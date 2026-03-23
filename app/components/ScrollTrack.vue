<template>
  <ClientOnly>
    <div class="hidden md:block fixed inset-0 pointer-events-none" style="z-index: 0;">
      <svg
        :width="vw"
        :height="vh"
        :viewBox="`0 0 ${vw} ${vh}`"
        class="absolute inset-0"
        overflow="visible"
      >
        <defs>
          <!-- Neumorphic groove: gray -->
          <filter id="neGray" x="-10%" y="-10%" width="130%" height="130%"
            filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="bg"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
            <feBlend in2="bg" result="dropShadow"/>
            <feBlend in="SourceGraphic" in2="dropShadow" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="ha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
            <feBlend in2="shape"/>
          </filter>
          <!-- Neumorphic groove: green (for trail) -->
          <filter id="neGreen" x="-10%" y="-10%" width="130%" height="130%"
            filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="bg"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
            <feBlend in2="bg" result="dropShadow"/>
            <feBlend in="SourceGraphic" in2="dropShadow" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha"/>
            <feOffset dx="8" dy="8"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="ha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend in2="shape"/>
          </filter>
          <!-- Figma ball filter (diiif) -->
          <filter id="figBall" x="-50%" y="-50%" width="200%" height="200%"
            filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="bg"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="dilated"/>
            <feOffset dx="1" dy="1" in="dilated" result="offDil"/>
            <feGaussianBlur stdDeviation="2.5" in="offDil" result="blurred"/>
            <feComposite in="blurred" in2="SourceAlpha" operator="out" result="shadow"/>
            <feColorMatrix type="matrix" in="shadow"
              values="0 0 0 0 0.75 0 0 0 0 0.92 0 0 0 0 0.85 0 0 0 0.3 0" result="cShadow"/>
            <feBlend in="cShadow" in2="bg" result="dropShadow"/>
            <feBlend in="SourceGraphic" in2="dropShadow" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha1"/>
            <feOffset dx="-5" dy="-5"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="ha1" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix"
              values="0 0 0 0 0.65 0 0 0 0 0.88 0 0 0 0 0.78 0 0 0 0.5 0"/>
            <feBlend mode="multiply" in2="shape" result="inner1"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2"/>
            <feOffset dx="3" dy="3"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="ha2" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/>
            <feBlend in2="inner1" result="inner2"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha3"/>
            <feOffset dx="1" dy="0.5"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="ha3" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend in2="inner2" result="inner3"/>
            <feGaussianBlur stdDeviation="1.5" in="inner3"/>
          </filter>
        </defs>

        <g :style="{ transform: `translateY(${-scrollY}px)`, willChange: 'transform' }">
          <!-- Brand mark group: SVG coords → page coords via transform -->
          <g :transform="brandTransform">

            <!-- ═══ Layer 1: Gray grooves ═══ -->
            <g filter="url(#neGray)">
              <path d="M2198 -1798L907.389 740.131C900.401 753.867 901.927 770.395 911.31 782.62L1060.5 977"
                stroke="#F0F0F0" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </g>
            <g filter="url(#neGray)">
              <path d="M1171 328L1318.6 519.579C1328.1 531.909 1329.58 548.63 1322.4 562.441L1090 1009.5"
                stroke="#F0F0F0" stroke-width="30" stroke-linecap="round" fill="none"/>
            </g>
            <!-- ═══ Right arm + extension as single continuous groove ═══ -->
            <g filter="url(#neGray)">
              <path :d="marblePath"
                stroke="#F0F0F0" stroke-width="30" stroke-linecap="round" fill="none"/>
            </g>

            <!-- ═══ Layer 2: Green overlays on brand mark (clipped to ball positions) ═══ -->
            <!-- Left arm: green starts at ball (1171,222) downward to junction -->
            <g filter="url(#neGreen)">
              <path d="M1171 222L907.404 740.124C900.408 753.863 901.93 770.4 911.317 782.63L1060.5 977"
                stroke="#77E6B0" stroke-opacity="0.35" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </g>
            <!-- Middle arm: full path between the two balls -->
            <g filter="url(#neGreen)">
              <path d="M1171 328L1318.6 519.579C1328.1 531.909 1329.58 548.63 1322.4 562.441L1090 1009.5"
                stroke="#77E6B0" stroke-opacity="0.35" stroke-width="30" stroke-linecap="round" fill="none"/>
            </g>

            <!-- ═══ Green trail: follows marble down the right arm + extension ═══ -->
            <g filter="url(#neGreen)">
              <path class="green-trail-ref" :d="marblePath"
                stroke="#77E6B0" stroke-opacity="0.35" stroke-width="30" stroke-linecap="round" fill="none"
                :stroke-dasharray="greenTrailDash"
                :stroke-dashoffset="0"/>
            </g>

            <!-- ═══ Balls ═══ -->
            <g filter="url(#figBall)">
              <circle cx="1171" cy="222" r="8" fill="#F7F7F7"/>
            </g>
            <g filter="url(#figBall)">
              <circle cx="1090" cy="1009" r="8" fill="white"/>
            </g>

            <!-- ═══ Marble path (hidden, for arc-length sampling) ═══ -->
            <path class="track-path-ref" :d="marblePath" fill="none" stroke="none" />

            <!-- ═══ Glass marble ═══ -->
            <g filter="url(#figBall)">
              <circle :cx="marblePos.x" :cy="marblePos.y" r="8" fill="white"/>
            </g>

            <!-- ═══ JOIN US button border + text (brand-mark SVG coords) ═══ -->
            <g v-if="orbitCenterSvg">
              <circle :cx="orbitCenterSvg.x" :cy="orbitCenterSvg.y" :r="btnRadiusSvg"
                stroke="#d9d9d9" stroke-width="3" fill="none"/>
              <text :x="orbitCenterSvg.x" :y="orbitCenterSvg.y - 12"
                text-anchor="middle" dominant-baseline="middle"
                fill="#aeaeb2" font-family="'Montserrat', sans-serif"
                :font-size="(20 / bmScale).toFixed(1)" font-weight="600" letter-spacing="2">JOIN</text>
              <text :x="orbitCenterSvg.x" :y="orbitCenterSvg.y + 22"
                text-anchor="middle" dominant-baseline="middle"
                fill="#aeaeb2" font-family="'Montserrat', sans-serif"
                :font-size="(20 / bmScale).toFixed(1)" font-weight="600" letter-spacing="2">US !</text>
              <a href="#">
                <circle :cx="orbitCenterSvg.x" :cy="orbitCenterSvg.y" :r="btnRadiusSvg"
                  fill="transparent" style="cursor: pointer; pointer-events: auto;"/>
              </a>
            </g>

          </g>
        </g>
      </svg>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const scrollY     = ref(0)
const vw          = ref(1200)
const vh          = ref(800)
const totalHeight = ref(4000)

// ── Brand mark positioning (measured from hero-content div) ─────────────────
const bmLeft  = ref(800)
const bmTop   = ref(200)
const bmScale = ref(0.82)

const brandTransform = computed(() => {
  const s = bmScale.value
  const tx = bmLeft.value - 800 * s
  const ty = bmTop.value + 100 * s
  return `translate(${tx.toFixed(1)}, ${ty.toFixed(1)}) scale(${s.toFixed(4)})`
})

// ── Coordinate helpers ──────────────────────────────────────────────────────
function svgTransformOrigin() {
  const s = bmScale.value
  return { tx: bmLeft.value - 800 * s, ty: bmTop.value + 100 * s, s }
}

function pageToSvg(px: number, py: number): { x: number; y: number } | null {
  const { tx, ty, s } = svgTransformOrigin()
  if (s <= 0) return null
  return { x: (px - tx) / s, y: (py - ty) / s }
}

function measureBrandMark() {
  const el = document.getElementById('hero-content')
  if (!el) return
  const rect = el.getBoundingClientRect()
  const isLg = vw.value >= 1024
  const widthFrac = isLg ? 0.48 : 0.55
  const containerWidth = rect.width * widthFrac

  bmLeft.value = rect.right - containerWidth + window.scrollX - containerWidth * 0.08
  bmTop.value  = rect.top + window.scrollY - rect.height * 0.7
  bmScale.value = containerWidth / 900

  measureJoinUs()
  nextTick(() => buildArcTable())
}

// ── Footer Y in SVG coords ──────────────────────────────────────────────────
const footerSvgY = computed(() => {
  const s = bmScale.value
  if (s <= 0) return 2000
  return (totalHeight.value - bmTop.value) / s - 100
})

// ── JOIN US button position ─────────────────────────────────────────────────
const joinUsPage = ref({ cx: 0, cy: 0, btnR: 70, orbitR: 76 })

function measureJoinUs() {
  const el = document.getElementById('join-us-btn')
  if (!el) return
  const rect = el.getBoundingClientRect()
  joinUsPage.value = {
    cx: rect.left + rect.width / 2 + window.scrollX,
    cy: rect.top + rect.height / 2 + window.scrollY,
    btnR: rect.width / 2,
    orbitR: rect.width / 2 + 6,
  }
}

// ── Orbit geometry in brand-mark SVG coords ─────────────────────────────────
const orbitCenterSvg = computed(() => {
  const jp = joinUsPage.value
  return jp.cx > 0 ? pageToSvg(jp.cx, jp.cy) : null
})

const orbitRadiusSvg = computed(() => {
  const s = bmScale.value
  return s > 0 ? joinUsPage.value.orbitR / s : 0
})

const btnRadiusSvg = computed(() => {
  const s = bmScale.value
  return s > 0 ? joinUsPage.value.btnR / s : 0
})

const ORBIT_ENTRY_ANGLE = 0              // 3 o'clock
const ORBIT_EXIT_ANGLE  = -Math.PI / 3   // ~1 o'clock

function orbitPointSvg(angle: number) {
  const c = orbitCenterSvg.value
  const r = orbitRadiusSvg.value
  if (!c || r <= 0) return null
  return { x: c.x + r * Math.cos(angle), y: c.y + r * Math.sin(angle) }
}

const orbitEntrySvg = computed(() => orbitPointSvg(ORBIT_ENTRY_ANGLE))
const orbitExitSvg  = computed(() => orbitPointSvg(ORBIT_EXIT_ANGLE))

// ── Shared extension waypoint data ──────────────────────────────────────────
// x values and fractional y multipliers shared between extensionPath and marblePath
const EXT_WAYPOINTS: [number, number][] = [
  [1120,  0.012], [1060,  0.022],
  [1000,  0.04],  [850,   0.10],  [750,   0.18],  [680,   0.28],
  [620,   0.36],  [520,   0.42],
  [320,   0.48],  [270,   0.52],
  [550,   0.54],  [1000,  0.57],
  [550,   0.59],  [220,   0.62],
  [550,   0.64],  [1000,  0.67],
  [550,   0.69],  [220,   0.72],
  [270,   0.76],  [180,   0.78],  [130,   0.795],
  [270,   0.81],  [420,   0.82],
  [270,   0.835], [130,   0.85],  [80,    0.87],
  [130,   0.89],  [180,   0.91],  [80,    0.91],
]

function buildExtWaypoints(baseY: number, range: number): { x: number; y: number }[] {
  return EXT_WAYPOINTS.map(([x, f]) => ({ x, y: baseY + range * f }))
}

function appendOrbitArc(pts: { x: number; y: number }[]): string {
  const entry = orbitEntrySvg.value
  const exit  = orbitExitSvg.value
  const r     = orbitRadiusSvg.value

  if (entry) {
    pts.push({ x: entry.x, y: entry.y - 50 })
    pts.push(entry)
  }

  let d = buildSmoothPath(pts)

  if (exit && r > 0) {
    d += ` A ${r.toFixed(1)} ${r.toFixed(1)} 0 1 1 ${exit.x.toFixed(1)} ${exit.y.toFixed(1)}`
  }

  return d
}

// ── Extension path ──────────────────────────────────────────────────────────
// ── Marble path ─────────────────────────────────────────────────────────────
// Exact SVG path matching the gray groove for Path 3 (right arm)
const RIGHT_ARM_EXACT = "M1419.5 1100L1267.33 899.224C1257.97 886.879 1256.58 870.241 1263.77 856.516L1375.5 643C1393.17 617.333 1442.63 571.5 1500 571.5C1549 571.5 1583.5 590.5 1599 602.5C1612.17 612.694 1635 633 1651 673.5C1667 714 1661.5 761 1643.5 796C1629.1 824 1315.5 1436.33 1160.5 1739"

const marblePath = computed(() => {
  const range = footerSvgY.value - 1739
  if (range <= 0) return RIGHT_ARM_EXACT

  let d = RIGHT_ARM_EXACT

  // S-curve cubic bezier transition from right arm end to extension
  // Right arm tangent at (1160.5, 1739): from ctrl pt (1315.5, 1436.33) → direction (-155, 303)
  // CP1: continue that tangent direction
  const cp1x = 1160.5 - 155 * 0.55  // ≈ 1075
  const cp1y = 1739 + 303 * 0.55    // ≈ 1906
  // S-curve target: the first zigzag entry point
  const sTargetX = 520
  const sTargetY = 1739 + range * 0.42
  // CP2: approach target from upper-right
  const cp2x = 680
  const cp2y = sTargetY - range * 0.08

  d += ` C${cp1x.toFixed(1)} ${cp1y.toFixed(1)} ${cp2x.toFixed(1)} ${cp2y.toFixed(1)} ${sTargetX.toFixed(1)} ${sTargetY.toFixed(1)}`

  // Remaining extension waypoints (zigzag section, starting after the S-curve)
  const remainingExt = EXT_WAYPOINTS.filter(([_, f]) => f >= 0.48)
    .map(([x, f]) => ({ x, y: 1739 + range * f }))

  const entry = orbitEntrySvg.value
  const exit  = orbitExitSvg.value
  const r     = orbitRadiusSvg.value
  if (entry) {
    remainingExt.push({ x: entry.x, y: entry.y - 50 })
    remainingExt.push(entry)
  }

  // Build smooth continuation from S-curve target through remaining waypoints
  if (remainingExt.length > 0) {
    const allPts = [{ x: sTargetX, y: sTargetY }, ...remainingExt]
    const smooth = buildSmoothPath(allPts)
    const continuation = smooth.replace(/^M\s*[\d.-]+\s*[\d.-]+\s*/, '')
    d += ' ' + continuation
  }

  if (exit && r > 0) {
    d += ` A ${r.toFixed(1)} ${r.toFixed(1)} 0 1 1 ${exit.x.toFixed(1)} ${exit.y.toFixed(1)}`
  }

  return d
})

// ── Path building ───────────────────────────────────────────────────────────
function buildSmoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return ''
  const segs = [`M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`]
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = ((pts[i].x + pts[i + 1].x) / 2).toFixed(1)
    const my = ((pts[i].y + pts[i + 1].y) / 2).toFixed(1)
    segs.push(`Q ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)} ${mx} ${my}`)
  }
  const last = pts[pts.length - 1]
  segs.push(`L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`)
  return segs.join(' ')
}

// ── Green trail dash ────────────────────────────────────────────────────────
const greenTrailDash = computed(() => {
  const p = smoothProgress.value
  if (totalArcLen <= 0 || p < 0.001) return '0 99999'
  const revealed = p * totalArcLen
  return `${revealed.toFixed(1)} ${(totalArcLen + 100).toFixed(1)}`
})

// ── Inertia spring system ────────────────────────────────────────────────────
let targetProgress = 0
let smoothVelocity = 0
const smoothProgress = ref(0)
let animating = false
let rafId = 0

const SPRING_STIFFNESS = 0.045
const SPRING_DAMPING   = 0.82
const MIN_DELTA        = 0.00005

function startAnimation() {
  if (animating) return
  animating = true
  tickAnimation()
}

function tickAnimation() {
  if (targetProgress <= 0 && smoothProgress.value < 0.001) {
    smoothProgress.value = 0; smoothVelocity = 0; animating = false; return
  }
  if (targetProgress >= 1 && smoothProgress.value > 0.98) {
    smoothProgress.value = 1; smoothVelocity = 0; animating = false; return
  }

  const diff = targetProgress - smoothProgress.value
  smoothVelocity += diff * SPRING_STIFFNESS
  smoothVelocity *= SPRING_DAMPING
  const next = smoothProgress.value + smoothVelocity
  smoothProgress.value = Math.max(0, Math.min(1, next))
  if ((smoothProgress.value <= 0 && smoothVelocity < 0) || (smoothProgress.value >= 1 && smoothVelocity > 0)) smoothVelocity = 0

  if (Math.abs(diff) > MIN_DELTA || Math.abs(smoothVelocity) > MIN_DELTA) {
    rafId = requestAnimationFrame(tickAnimation)
  } else {
    smoothProgress.value = targetProgress
    animating = false
  }
}

// ── Arc-length parameterized position ───────────────────────────────────────
let arcSamples: { len: number; x: number; y: number }[] = []
let totalArcLen = 1000
let loopTopProgress = 0 // progress value where marble reaches loop top (1651, 673.5)
let hasAutoRolled = false

function buildArcTable() {
  const el = document.querySelector('.track-path-ref') as SVGPathElement | null
  if (!el) return
  const total = el.getTotalLength()
  totalArcLen = total
  const N = 500
  arcSamples = []
  for (let i = 0; i <= N; i++) {
    const len = (i / N) * total
    const pt  = el.getPointAtLength(len)
    arcSamples.push({ len, x: pt.x, y: pt.y })
  }

  // Find resting position: past loop top, near (1643, 796) on the downward arm
  let bestDist = Infinity
  let bestLen = 0
  const searchLen = total * 0.4 // only search first 40%
  for (const s of arcSamples) {
    if (s.len > searchLen) break
    const dx = s.x - 1643, dy = s.y - 796
    const dist = dx * dx + dy * dy
    if (dist < bestDist) {
      bestDist = dist
      bestLen = s.len
    }
  }
  loopTopProgress = bestLen / total

  // Auto-roll marble to loop top on first load (if user hasn't scrolled yet)
  if (!hasAutoRolled && window.scrollY < 10) {
    hasAutoRolled = true
    targetProgress = loopTopProgress
    startAnimation()
  }
}

function pointAtProgress(p: number): { x: number; y: number } {
  if (!arcSamples.length) return { x: 1419.5, y: 1100 }
  const targetLen = Math.min(Math.max(p, 0), 1) * totalArcLen
  let lo = 0, hi = arcSamples.length - 1
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (arcSamples[mid].len < targetLen) lo = mid + 1
    else hi = mid
  }
  const idx = Math.min(lo, arcSamples.length - 1)
  if (idx > 0 && idx < arcSamples.length) {
    const a = arcSamples[idx - 1]
    const b = arcSamples[idx]
    const segLen = b.len - a.len
    if (segLen > 0) {
      const f = (targetLen - a.len) / segLen
      return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f }
    }
  }
  return arcSamples[idx]
}

// ── Bounce animation ────────────────────────────────────────────────────────
const bounceX = ref(0)
const bounceY = ref(0)
let bounceActive = false
let bounceStartTime = 0
let bounceRafId = 0
let wasAtEnd = false

let bounceVelX = 0, bounceVelY = 0
let bouncePosX = 0, bouncePosY = 0
let bounceContainerR = 80
let bounceBtnOffsetX = 0, bounceBtnOffsetY = 0

const BOUNCE_GRAVITY = 500
const BOUNCE_RESTITUTION = 0.6
const BOUNCE_FRICTION = 0.92
const BALL_R = 8

function resetBounce() {
  wasAtEnd = false
  bounceActive = false
  bounceX.value = 0
  bounceY.value = 0
  bouncePosX = 0; bouncePosY = 0
  bounceVelX = 0; bounceVelY = 0
  cancelAnimationFrame(bounceRafId)
}

function startBounce() {
  if (bounceActive) return
  bounceActive = true
  bounceStartTime = performance.now()
  const endPos = pointAtProgress(1)
  const btnEl = document.getElementById('join-us-btn')
  const { tx, ty, s } = svgTransformOrigin()
  if (btnEl && s > 0) {
    const btnRect = btnEl.getBoundingClientRect()
    bounceContainerR = (btnRect.width / 2 - 4) / s
    const btnVpCx = btnRect.left + btnRect.width / 2
    const btnVpCy = btnRect.top + btnRect.height / 2
    const endVpX = tx + endPos.x * s
    const endVpY = ty + endPos.y * s - scrollY.value
    bounceBtnOffsetX = (btnVpCx - endVpX) / s
    bounceBtnOffsetY = (btnVpCy - endVpY) / s
  } else {
    bounceContainerR = 60
    bounceBtnOffsetX = 0
    bounceBtnOffsetY = 40
  }
  bouncePosX = 0; bouncePosY = 0
  bounceVelX = 80; bounceVelY = 20
  tickBounce()
}

function tickBounce() {
  const now = performance.now()
  const dt = Math.min((now - bounceStartTime) / 1000, 0.05)
  bounceStartTime = now

  bounceVelY += BOUNCE_GRAVITY * dt
  bouncePosX += bounceVelX * dt
  bouncePosY += bounceVelY * dt

  const cx = bounceBtnOffsetX
  const cy = bounceBtnOffsetY
  const dx = bouncePosX - cx
  const dy = bouncePosY - cy
  const dist = Math.sqrt(dx * dx + dy * dy)

  if (dist + BALL_R > bounceContainerR) {
    const nx = dx / dist
    const ny = dy / dist
    bouncePosX -= nx * (dist + BALL_R - bounceContainerR)
    bouncePosY -= ny * (dist + BALL_R - bounceContainerR)
    const vDotN = bounceVelX * nx + bounceVelY * ny
    if (vDotN > 0) {
      bounceVelX -= (1 + BOUNCE_RESTITUTION) * vDotN * nx
      bounceVelY -= (1 + BOUNCE_RESTITUTION) * vDotN * ny
      const ttx = -ny, tty = nx
      const vDotT = bounceVelX * ttx + bounceVelY * tty
      bounceVelX -= vDotT * (1 - BOUNCE_FRICTION) * ttx
      bounceVelY -= vDotT * (1 - BOUNCE_FRICTION) * tty
    }
  }

  // When velocity gets low, give the ball a random kick to keep it moving
  const speed = Math.sqrt(bounceVelX * bounceVelX + bounceVelY * bounceVelY)
  if (speed < 15) {
    const angle = Math.random() * Math.PI * 2
    const kick = 40 + Math.random() * 60
    bounceVelX += Math.cos(angle) * kick
    bounceVelY += Math.sin(angle) * kick - 30 // bias upward
  }

  bounceX.value = bouncePosX
  bounceY.value = bouncePosY
  bounceRafId = requestAnimationFrame(tickBounce)
}

// ── Marble position ──────────────────────────────────────────────────────────
const marblePos = computed(() => {
  const p = smoothProgress.value
  const pos = pointAtProgress(p)

  if (p >= 0.99) {
    if (!wasAtEnd) {
      wasAtEnd = true
      nextTick(() => startBounce())
    }
    return { x: pos.x + bounceX.value, y: pos.y + bounceY.value }
  }

  if (wasAtEnd) resetBounce()
  return pos
})

// ── Scroll / resize handlers ────────────────────────────────────────────────
let joinMeasuredOnScroll = false
const onLoadHandler = () => {
  totalHeight.value = document.documentElement.scrollHeight
  measureBrandMark()
}

function onScroll() {
  scrollY.value     = window.scrollY
  totalHeight.value = document.documentElement.scrollHeight
  const maxScroll   = totalHeight.value - vh.value
  const startOffset = vh.value * 0.1
  const scrollP     = maxScroll > 0 ? Math.max(0, Math.min(1, (window.scrollY - startOffset) / (maxScroll - startOffset))) : 0
  // Keep marble at least at loop top so it doesn't roll back into the junction
  targetProgress    = Math.max(scrollP, loopTopProgress)
  startAnimation()
  if (!joinMeasuredOnScroll) { measureJoinUs(); joinMeasuredOnScroll = true }
}

function onResize() {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  totalHeight.value = document.documentElement.scrollHeight
  measureBrandMark()
}

onMounted(() => {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  totalHeight.value = document.documentElement.scrollHeight

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  window.addEventListener('load', onLoadHandler)

  nextTick(() => {
    measureBrandMark()
    setTimeout(() => measureBrandMark(), 300)
    setTimeout(() => measureBrandMark(), 1000)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('load', onLoadHandler)
  cancelAnimationFrame(rafId)
  cancelAnimationFrame(bounceRafId)
})
</script>
