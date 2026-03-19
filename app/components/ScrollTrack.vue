<template>
  <ClientOnly>
    <canvas
      ref="canvasEl"
      class="fixed inset-0 z-20 pointer-events-none"
      :style="{ width: '100vw', height: '100vh' }"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import * as THREE from 'three'

const canvasEl = ref<HTMLCanvasElement | null>(null)

// ── scroll state ────────────────────────────────────────────────────────────
const scrollY     = ref(0)
const progress    = ref(0)
let   totalHeight = 1000
let   vh          = window?.innerHeight ?? 800
let   vw          = window?.innerWidth  ?? 1200

// ── spring SHM state ────────────────────────────────────────────────────────
let springT      = 0
let springV0     = 0
let springActive = false
let lastScrollY  = 0
let scrollVel    = 0
let lastScrollTime = 0
let atBottomSince  = -1
let springBounce   = 0   // extra Y offset from spring

const SPRING_OMEGA = 9
const SPRING_GAMMA = 3.2

// ── Three.js objects ────────────────────────────────────────────────────────
let renderer: THREE.WebGLRenderer
let scene:    THREE.Scene
let camera:   THREE.OrthographicCamera
let rafId:    number

// Track curve
let trackCurve: THREE.CatmullRomCurve3
let trackPoints: THREE.Vector3[] = []
const CURVE_SEGMENTS = 300

// Track tube mesh
let trackTube:    THREE.Mesh
let trackGlow:    THREE.Mesh
let progressTube: THREE.Mesh

// Marble group
let marbleGroup: THREE.Group
let marbleMesh:  THREE.Mesh
let marbleRotX = 0
let lastMarblePos = new THREE.Vector3()
let totalDist = 0

// Waypoint spheres
let waypointMeshes: THREE.Mesh[] = []

// ── Build waypoints in world coordinates ────────────────────────────────────
function getWaypoints(): THREE.Vector3[] {
  // xFrac, yFrac — yFrac can exceed 1 (the track extends into scrollable area)
  const defs = [
    [0.65, 0.00], [0.55, 0.10], [0.72, 0.20],
    [0.87, 0.33], [0.72, 0.46], [0.55, 0.33],
    [0.72, 0.20], [0.50, 0.55], [0.62, 0.66],
    [0.76, 0.76], [0.91, 0.86], [0.76, 0.96],
    [0.60, 0.86], [0.76, 0.76], [0.45, 1.08],
    [0.55, 1.22], [0.40, 1.42], [0.50, 1.58],
    [0.62, 1.72], [0.48, 1.88], [0.40, 2.00],
  ]
  return defs.map(([xf, yf]) => new THREE.Vector3(
    xf * vw,
    yf * totalHeight,
    0,
  ))
}

// ── Create track materials ───────────────────────────────────────────────────
function makeTrackMaterials() {
  // outer groove: gray transparent
  const outer = new THREE.MeshBasicMaterial({
    color: 0xd1d5db,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
  })
  // inner channel: lighter
  const inner = new THREE.MeshBasicMaterial({
    color: 0xe5e7eb,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
  })
  // progress: mint green with glow
  const prog = new THREE.MeshBasicMaterial({
    color: 0x4ECBA5,
    transparent: true,
    opacity: 0.6,
    side: THREE.DoubleSide,
  })
  return { outer, inner, prog }
}

// ── Build marble (glass sphere look) ─────────────────────────────────────────
function buildMarble() {
  marbleGroup = new THREE.Group()
  const R = 14

  // Main sphere with Phong shading for glass look
  const geo = new THREE.SphereGeometry(R, 48, 48)
  const mat = new THREE.MeshPhongMaterial({
    color:       0x4ECBA5,
    emissive:    0x1a5e42,
    specular:    0xffffff,
    shininess:   200,
    transparent: true,
    opacity:     0.88,
  })
  marbleMesh = new THREE.Mesh(geo, mat)
  marbleGroup.add(marbleMesh)

  // Inner swirl sphere (mint lighter)
  const swirlGeo = new THREE.SphereGeometry(R * 0.72, 24, 24)
  const swirlMat = new THREE.MeshPhongMaterial({
    color:       0x7EDCBA,
    transparent: true,
    opacity:     0.3,
    side:        THREE.BackSide,
  })
  marbleGroup.add(new THREE.Mesh(swirlGeo, swirlMat))

  // Specular highlight (small white sphere offset top-left)
  const specGeo = new THREE.SphereGeometry(R * 0.28, 16, 16)
  const specMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 })
  const specMesh = new THREE.Mesh(specGeo, specMat)
  specMesh.position.set(-R * 0.35, R * 0.42, R * 0.6)
  marbleGroup.add(specMesh)

  // Small secondary highlight
  const spec2Geo = new THREE.SphereGeometry(R * 0.1, 8, 8)
  const spec2Mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
  const spec2Mesh = new THREE.Mesh(spec2Geo, spec2Mat)
  spec2Mesh.position.set(R * 0.2, R * 0.55, R * 0.65)
  marbleGroup.add(spec2Mesh)

  scene.add(marbleGroup)
}

// ── Build lights ──────────────────────────────────────────────────────────────
function buildLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambient)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
  dirLight.position.set(-200, -400, 500)
  scene.add(dirLight)

  const rimLight = new THREE.DirectionalLight(0x4ECBA5, 0.5)
  rimLight.position.set(300, 200, -200)
  scene.add(rimLight)

  const pointLight = new THREE.PointLight(0x4ECBA5, 0.8, 600)
  pointLight.position.set(vw * 0.5, vh * 0.5, 200)
  scene.add(pointLight)
}

// ── Build the track tube ─────────────────────────────────────────────────────
function buildTrack() {
  // Remove old
  if (trackTube)    { scene.remove(trackTube);    trackTube.geometry.dispose() }
  if (trackGlow)    { scene.remove(trackGlow);    trackGlow.geometry.dispose() }
  if (progressTube) { scene.remove(progressTube); progressTube.geometry.dispose() }
  waypointMeshes.forEach(m => { scene.remove(m); m.geometry.dispose() })
  waypointMeshes = []

  trackPoints = getWaypoints()
  trackCurve  = new THREE.CatmullRomCurve3(trackPoints, false, 'catmullrom', 0.5)

  const mats = makeTrackMaterials()

  // Outer groove tube
  const outerGeo = new THREE.TubeGeometry(trackCurve, CURVE_SEGMENTS, 11, 10, false)
  trackGlow = new THREE.Mesh(outerGeo, mats.outer)
  scene.add(trackGlow)

  // Inner channel tube
  const innerGeo = new THREE.TubeGeometry(trackCurve, CURVE_SEGMENTS, 7, 10, false)
  trackTube = new THREE.Mesh(innerGeo, mats.inner)
  scene.add(trackTube)

  // Waypoint spheres
  const wpGeo = new THREE.SphereGeometry(5, 12, 12)
  trackPoints.forEach((pt) => {
    const m = new THREE.Mesh(wpGeo, new THREE.MeshBasicMaterial({
      color: 0xd1d5db, transparent: true, opacity: 0.5
    }))
    m.position.copy(pt)
    scene.add(m)
    waypointMeshes.push(m)
  })
}

// ── Build progress tube (partial) ────────────────────────────────────────────
function updateProgressTube(p: number) {
  if (progressTube) { scene.remove(progressTube); progressTube.geometry.dispose() }
  const clamped = Math.min(Math.max(p, 0), 1)
  if (clamped <= 0) return

  // Build a sub-curve from 0..p
  const N = Math.max(2, Math.floor(clamped * CURVE_SEGMENTS))
  const subPts: THREE.Vector3[] = []
  for (let i = 0; i <= N; i++) {
    subPts.push(trackCurve.getPointAt(i / N * clamped))
  }
  const subCurve = new THREE.CatmullRomCurve3(subPts, false, 'catmullrom', 0.5)
  const geo = new THREE.TubeGeometry(subCurve, N, 5, 10, false)
  const mat = new THREE.MeshBasicMaterial({ color: 0x4ECBA5, transparent: true, opacity: 0.55 })
  progressTube = new THREE.Mesh(geo, mat)
  scene.add(progressTube)

  // Update waypoint colors
  waypointMeshes.forEach((m, i) => {
    const t = i / (waypointMeshes.length - 1)
    ;(m.material as THREE.MeshBasicMaterial).color.setHex(t <= clamped ? 0x4ECBA5 : 0xd1d5db)
  })
}

// ── Camera converts world y (0=top, growing down) to NDC ─────────────────────
// We use an orthographic camera that matches pixel coords,
// then pan it with scrollY (just shift camera top edge)
function updateCamera() {
  const top    = scrollY.value
  const bottom = scrollY.value + vh
  camera.top    = -top
  camera.bottom = -(bottom)
  camera.left   = 0
  camera.right  = vw
  camera.near   = -1000
  camera.far    = 1000
  camera.updateProjectionMatrix()
}

// ── Spring helpers ────────────────────────────────────────────────────────────
function startSpring(v0: number) {
  springActive = true
  springT  = 0
  springV0 = Math.max(Math.abs(v0) * 0.25, 10)
}

// ── Animation loop ─────────────────────────────────────────────────────────
function animate() {
  rafId = requestAnimationFrame(animate)

  // Advance spring
  if (springActive) {
    springT += 1 / 60
    const omegaD = Math.sqrt(Math.max(SPRING_OMEGA**2 - SPRING_GAMMA**2, 0.1))
    springBounce = (springV0 / omegaD) * Math.exp(-SPRING_GAMMA * springT) * Math.sin(omegaD * springT)
    if (Math.abs(springBounce) < 0.3 && springT > 0.2) {
      springBounce = 0
      springActive = false
    }
  }

  const p = Math.min(progress.value, 1)
  updateProgressTube(p)

  // Marble position along curve
  const pt = trackCurve.getPointAt(p)
  const bounce = p >= 0.98 ? springBounce : 0
  marbleGroup.position.set(pt.x, pt.y + bounce, 0)

  // Marble rotation: accumulate distance
  const dx = pt.x - lastMarblePos.x
  const dy = pt.y - lastMarblePos.y
  const dist = Math.sqrt(dx*dx + dy*dy)
  totalDist += dist
  marbleRotX += dist / 14 // circumference / (2πR) = 1/R; rotation in rad
  marbleMesh.rotation.z = -marbleRotX   // roll direction
  lastMarblePos.copy(pt)

  // Slight wobble swirl rotation
  marbleMesh.rotation.y = Math.sin(Date.now() * 0.001) * 0.2

  updateCamera()
  renderer.render(scene, camera)
}

// ── Init Three.js ─────────────────────────────────────────────────────────────
function init() {
  const canvas = canvasEl.value!
  vw  = window.innerWidth
  vh  = window.innerHeight
  totalHeight = document.documentElement.scrollHeight

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(vw, vh)
  renderer.setClearColor(0x000000, 0)

  scene = new THREE.Scene()

  // Orthographic: maps pixel coords directly
  camera = new THREE.OrthographicCamera(0, vw, 0, -vh, -1000, 1000)
  camera.position.z = 100
  updateCamera()

  buildLights()
  buildTrack()
  buildMarble()

  lastMarblePos = trackCurve.getPointAt(0)
  marbleGroup.position.copy(lastMarblePos)

  animate()
}

// ── Scroll & resize ──────────────────────────────────────────────────────────
function onScroll() {
  const now = performance.now()
  const dt  = Math.max(now - lastScrollTime, 1)
  scrollVel = (window.scrollY - lastScrollY) / dt * 1000
  lastScrollY   = window.scrollY
  lastScrollTime = now

  scrollY.value     = window.scrollY
  totalHeight       = document.documentElement.scrollHeight
  const maxScroll   = totalHeight - vh
  progress.value    = maxScroll > 0 ? window.scrollY / maxScroll : 0

  if (progress.value >= 0.98) {
    if (atBottomSince < 0) {
      atBottomSince = now
      startSpring(scrollVel)
    }
  } else {
    atBottomSince = -1
  }
}

function onResize() {
  vw = window.innerWidth
  vh = window.innerHeight
  totalHeight = document.documentElement.scrollHeight
  renderer.setSize(vw, vh)
  camera.right  = vw
  camera.bottom = -vh
  camera.updateProjectionMatrix()
  buildTrack()
  lastMarblePos = trackCurve.getPointAt(Math.min(progress.value, 1))
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────
onMounted(() => {
  nextTick(() => {
    if (!canvasEl.value) return
    totalHeight = document.documentElement.scrollHeight
    init()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    // re-measure after full paint
    setTimeout(() => {
      totalHeight = document.documentElement.scrollHeight
      buildTrack()
    }, 500)
  })
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
})
</script>
