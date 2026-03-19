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
          <linearGradient id="track-gray" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#d4d4d4" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#e5e5e5" stop-opacity="0.3" />
          </linearGradient>
        </defs>

        <!-- Gray track (full path, translated with scroll) -->
        <g :style="{ transform: `translateY(${-scrollY}px)` }">
          <path
            :d="fullTrackPath"
            fill="none"
            stroke="url(#track-gray)"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Green filled portion -->
          <path
            :d="fullTrackPath"
            fill="none"
            stroke="#77E6B0"
            stroke-opacity="0.35"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            :stroke-dasharray="totalPathLen"
            :stroke-dashoffset="Math.max(0, totalPathLen - totalPathLen * progress)"
          />

          <!-- Small node circles at waypoints -->
          <circle
            v-for="(pt, i) in waypoints"
            :key="i"
            :cx="pt.x"
            :cy="pt.y"
            r="6"
            :fill="progress >= pt.t ? '#77E6B0' : '#d4d4d4'"
            :fill-opacity="progress >= pt.t ? 0.6 : 0.3"
            stroke="white"
            stroke-width="2"
            stroke-opacity="0.5"
          />
        </g>
      </svg>

      <!-- Marble ball following the track -->
      <div
        class="absolute transition-none"
        :style="marbleStyle"
      >
        <MarbleBall :size="28" :rotation="scrollY * 1.5" variant="mint" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const scrollY = ref(0)
const vw = ref(1200)
const vh = ref(800)
const totalHeight = ref(4000)
const progress = ref(0)

// Define waypoints as relative positions (fractions of viewport)
// The track goes from top-right, diagonally down-left, curves around diamond shapes
const waypointsDef = [
  { xFrac: 0.65, yFrac: 0.0 },    // top entry
  { xFrac: 0.55, yFrac: 0.12 },
  { xFrac: 0.70, yFrac: 0.22 },   // diamond top
  { xFrac: 0.85, yFrac: 0.35 },   // diamond right
  { xFrac: 0.70, yFrac: 0.48 },   // diamond bottom
  { xFrac: 0.55, yFrac: 0.35 },   // diamond left
  { xFrac: 0.70, yFrac: 0.22 },   // back to diamond top (close shape)
  { xFrac: 0.50, yFrac: 0.55 },   // continue down
  { xFrac: 0.60, yFrac: 0.65 },
  { xFrac: 0.75, yFrac: 0.75 },   // second diamond top
  { xFrac: 0.90, yFrac: 0.85 },   // second diamond right
  { xFrac: 0.75, yFrac: 0.95 },   // second diamond bottom
  { xFrac: 0.60, yFrac: 0.85 },   // second diamond left
  { xFrac: 0.75, yFrac: 0.75 },   // close second diamond
  { xFrac: 0.45, yFrac: 1.05 },   // exit down
  { xFrac: 0.55, yFrac: 1.20 },
  { xFrac: 0.40, yFrac: 1.40 },
  { xFrac: 0.50, yFrac: 1.55 },
  { xFrac: 0.65, yFrac: 1.70 },
  { xFrac: 0.50, yFrac: 1.85 },
  { xFrac: 0.40, yFrac: 2.00 },
]

// Compute actual waypoints in pixel space
const waypoints = computed(() => {
  return waypointsDef.map((wp, i) => ({
    x: wp.xFrac * vw.value,
    y: wp.yFrac * totalHeight.value,
    t: i / (waypointsDef.length - 1),
  }))
})

// Generate smooth path through waypoints
const fullTrackPath = computed(() => {
  const pts = waypoints.value
  if (pts.length < 2) return ''

  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1]
    const curr = pts[i]
    // Use quadratic bezier for smoothness
    const cpx = (prev.x + curr.x) / 2
    const cpy = (prev.y + curr.y) / 2
    d += ` Q ${prev.x} ${prev.y} ${cpx} ${cpy}`
  }
  // Final segment
  const last = pts[pts.length - 1]
  d += ` L ${last.x} ${last.y}`
  return d
})

// Approximate total path length
const totalPathLen = computed(() => {
  const pts = waypoints.value
  let len = 0
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i - 1].x
    const dy = pts[i].y - pts[i - 1].y
    len += Math.sqrt(dx * dx + dy * dy)
  }
  return len
})

// Marble position — interpolate along waypoints based on progress
const marbleStyle = computed(() => {
  const pts = waypoints.value
  const t = progress.value
  const totalSegments = pts.length - 1
  const segment = Math.min(Math.floor(t * totalSegments), totalSegments - 1)
  const segT = (t * totalSegments) - segment

  const p0 = pts[segment]
  const p1 = pts[Math.min(segment + 1, pts.length - 1)]
  const x = p0.x + (p1.x - p0.x) * segT
  const y = p0.y + (p1.y - p0.y) * segT

  return {
    left: `${x - 14}px`,
    top: `${y - scrollY.value - 14}px`,
  }
})

const onScroll = () => {
  scrollY.value = window.scrollY
  totalHeight.value = document.documentElement.scrollHeight
  const maxScroll = totalHeight.value - vh.value
  progress.value = maxScroll > 0 ? Math.min(scrollY.value / maxScroll, 1) : 0
}

const onResize = () => {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  totalHeight.value = document.documentElement.scrollHeight
}

onMounted(() => {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  totalHeight.value = document.documentElement.scrollHeight
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  setTimeout(() => {
    totalHeight.value = document.documentElement.scrollHeight
  }, 500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>
