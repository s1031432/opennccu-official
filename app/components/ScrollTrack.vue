<template>
  <ClientOnly>
    <div class="fixed inset-0 z-20 pointer-events-none overflow-hidden">
      <svg
        :width="vw"
        :height="vh"
        :viewBox="`0 0 ${vw} ${vh}`"
        class="absolute inset-0"
      >
        <defs>
          <filter id="track-groove" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feOffset dx="0" dy="1" result="offsetBlur" />
            <feFlood flood-color="white" flood-opacity="0.6" result="white" />
            <feComposite in="white" in2="offsetBlur" operator="in" result="highlight" />
            <feMerge>
              <feMergeNode in="highlight" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="track-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <g :style="{ transform: `translateY(${-scrollY}px)` }">
          <!-- Hidden reference path for arc-length sampling -->
          <path class="track-path-ref" :d="fullTrackPath" fill="none" stroke="none" />

          <!-- Outer groove shadow -->
          <path :d="fullTrackPath" fill="none" stroke="#c8c8c8"
            stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.25"
            filter="url(#track-groove)" />
          <!-- Inner channel -->
          <path :d="fullTrackPath" fill="none" stroke="#e0e0e0"
            stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.45" />
          <!-- Center line -->
          <path :d="fullTrackPath" fill="none" stroke="#d0d0d0"
            stroke-width="1" stroke-linecap="round" stroke-opacity="0.3" />

          <!-- Progress glow -->
          <path :d="fullTrackPath" fill="none" stroke="#4ECBA5" stroke-opacity="0.2"
            stroke-width="10" stroke-linecap="round" stroke-linejoin="round"
            :stroke-dasharray="totalPathLen"
            :stroke-dashoffset="totalPathLen * (1 - smoothProgress)"
            filter="url(#track-glow)" />
          <!-- Progress line -->
          <path :d="fullTrackPath" fill="none" stroke="#4ECBA5" stroke-opacity="0.5"
            stroke-width="3" stroke-linecap="round"
            :stroke-dasharray="totalPathLen"
            :stroke-dashoffset="totalPathLen * (1 - smoothProgress)" />

          <!-- Waypoint dots -->
          <circle
            v-for="(pt, i) in waypoints" :key="`wp-${i}`"
            :cx="pt.x" :cy="pt.y" r="4"
            :fill="smoothProgress >= pt.t ? '#4ECBA5' : '#d4d4d4'"
            :fill-opacity="smoothProgress >= pt.t ? 0.6 : 0.3"
            stroke="white" stroke-width="1.5" stroke-opacity="0.5"
          />
        </g>
      </svg>

      <!-- Marble -->
      <div class="absolute" :style="marbleStyle">
        <MarbleBall :size="MARBLE_SIZE" :rotation="marbleRotation" variant="mint" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const MARBLE_SIZE = 32

const scrollY     = ref(0)
const vw          = ref(1200)
const vh          = ref(800)
const totalHeight = ref(4000)

// ── Inertia spring system ────────────────────────────────────────────────────
// targetProgress = actual scroll position
// smoothProgress = displayed position with momentum
let targetProgress = 0
let smoothVelocity = 0
const smoothProgress = ref(0)
let animating = false
let rafId = 0

const SPRING_STIFFNESS = 0.08   // how fast it catches up
const SPRING_DAMPING   = 0.72   // <1 means overshoot (bouncy), closer to 1 = less bounce
const MIN_DELTA        = 0.00005

function startAnimation() {
  if (animating) return
  animating = true
  tickAnimation()
}

function tickAnimation() {
  const diff = targetProgress - smoothProgress.value
  // Spring force
  smoothVelocity += diff * SPRING_STIFFNESS
  // Damping
  smoothVelocity *= SPRING_DAMPING

  smoothProgress.value = Math.max(0, Math.min(1, smoothProgress.value + smoothVelocity))

  // Update marble rotation based on movement
  updateMarbleRotation()

  if (Math.abs(diff) > MIN_DELTA || Math.abs(smoothVelocity) > MIN_DELTA) {
    rafId = requestAnimationFrame(tickAnimation)
  } else {
    smoothProgress.value = targetProgress
    animating = false
  }
}

// ── Waypoints — gentle flowing diagonal matching Figma ──────────────────────
// Figma shows a smooth diagonal line from upper-right through the page,
// with gentle S-curves flowing through sections
const waypointsDef = [
  [0.90, 0.00],   // Start top-right (hero diagonal)
  [0.78, 0.07],   // Flow through hero
  [0.62, 0.15],   // Diagonal continues
  [0.50, 0.24],   // Reaching center (news area)
  [0.42, 0.34],   // Gentle curve left (product section)
  [0.38, 0.44],   // Left of center
  [0.44, 0.54],   // Gentle curve back right (case studies)
  [0.55, 0.64],   // Right of center
  [0.58, 0.72],   // Through about section
  [0.48, 0.82],   // Curve back center
  [0.35, 0.90],   // Moving left (crew section)
  [0.22, 1.00],   // End bottom-left
]

const waypoints = computed(() =>
  waypointsDef.map(([xf, yf], i) => ({
    x: xf * vw.value,
    y: yf * totalHeight.value,
    t: i / (waypointsDef.length - 1),
  }))
)

// ── SVG path (smooth quadratic Bézier) ──────────────────────────────────────
const fullTrackPath = computed(() => {
  const pts = waypoints.value
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
  for (let i = 1; i < pts.length - 1; i++) {
    const mid = { x: (pts[i].x + pts[i+1].x) / 2, y: (pts[i].y + pts[i+1].y) / 2 }
    d += ` Q ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)} ${mid.x.toFixed(1)} ${mid.y.toFixed(1)}`
  }
  const last = pts[pts.length - 1]
  d += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`
  return d
})

// ── Path length (approximate for dasharray) ─────────────────────────────────
const totalPathLen = computed(() => {
  const pts = waypoints.value
  let len = 0
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i-1].x
    const dy = pts[i].y - pts[i-1].y
    len += Math.sqrt(dx*dx + dy*dy)
  }
  return len * 1.15 // account for curve being longer than straight segments
})

// ── Arc-length parameterized position via DOM path ──────────────────────────
let arcSamples: { len: number; x: number; y: number }[] = []
let totalArcLen = 1000

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
}

function pointAtProgress(p: number): { x: number; y: number } {
  if (!arcSamples.length) {
    // fallback: linear interpolation along waypoints
    const pts = waypoints.value
    const t   = Math.min(Math.max(p, 0), 1) * (pts.length - 1)
    const i   = Math.min(Math.floor(t), pts.length - 2)
    const f   = t - i
    return { x: pts[i].x + (pts[i+1].x - pts[i].x) * f, y: pts[i].y + (pts[i+1].y - pts[i].y) * f }
  }
  const targetLen = Math.min(Math.max(p, 0), 1) * totalArcLen
  let lo = 0, hi = arcSamples.length - 1
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (arcSamples[mid].len < targetLen) lo = mid + 1
    else hi = mid
  }
  const idx = Math.min(lo, arcSamples.length - 1)
  // Interpolate between samples for smoother positioning
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

// ── Marble rotation via arc distance ────────────────────────────────────────
const marbleRotation = ref(0)
let totalDist = 0
let lastPos   = { x: 0, y: 0 }

function updateMarbleRotation() {
  const pt = pointAtProgress(smoothProgress.value)
  const dx = pt.x - lastPos.x
  const dy = pt.y - lastPos.y
  const dist = Math.sqrt(dx*dx + dy*dy)
  if (dist > 0.1) {
    // Direction-aware rotation: roll forward when scrolling down, backward when up
    const direction = dy >= 0 ? 1 : -1
    totalDist += dist * direction
    marbleRotation.value = (totalDist / (Math.PI * MARBLE_SIZE)) * 360
    lastPos = pt
  }
}

const marbleStyle = computed(() => {
  const pt   = pointAtProgress(smoothProgress.value)
  const half = MARBLE_SIZE / 2
  return {
    left: `${pt.x - half}px`,
    top:  `${pt.y - scrollY.value - half}px`,
  }
})

// ── Scroll handler ──────────────────────────────────────────────────────────
function onScroll() {
  scrollY.value     = window.scrollY
  totalHeight.value = document.documentElement.scrollHeight
  const maxScroll   = totalHeight.value - vh.value
  targetProgress    = maxScroll > 0 ? window.scrollY / maxScroll : 0

  startAnimation()
}

function onResize() {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  totalHeight.value = document.documentElement.scrollHeight
  nextTick(() => buildArcTable())
}

onMounted(() => {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  totalHeight.value = document.documentElement.scrollHeight

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })

  nextTick(() => {
    setTimeout(() => {
      buildArcTable()
      lastPos = pointAtProgress(0)
    }, 300)
  })

  window.addEventListener('load', () => {
    totalHeight.value = document.documentElement.scrollHeight
    nextTick(() => buildArcTable())
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  cancelAnimationFrame(rafId)
})
</script>
