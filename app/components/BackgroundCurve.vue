<template>
  <!-- Single neumorphic groove line running through all sections (except Hero).
       One continuous curve, one marble ball on ScrollTrack. No extra orbs here. -->
  <ClientOnly>
    <div class="hidden md:block fixed inset-0 pointer-events-none overflow-hidden" style="z-index: 1;">
      <svg
        :width="vw"
        :height="vh"
        :viewBox="`0 0 ${vw} ${vh}`"
        class="absolute inset-0"
        fill="none"
      >
        <defs>
          <!-- Neumorphic emboss filter for the groove line -->
          <filter id="bg-curve-emboss" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="bg" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
            <feOffset dx="-4" dy="-4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="ha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
            <feBlend in2="bg" result="highlight" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2" />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="ha2" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="highlight" result="shadow" />
            <feBlend in="SourceGraphic" in2="shadow" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha3" />
            <feOffset dx="3" dy="3" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="ha3" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend in2="shape" />
          </filter>
        </defs>

        <!-- Translate with scroll -->
        <g :style="{ transform: `translateY(${-scrollY}px)` }">
          <!-- Single continuous neumorphic groove -->
          <path
            :d="curvePath"
            stroke="#ededed"
            stroke-width="28"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            filter="url(#bg-curve-emboss)"
          />
        </g>
      </svg>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const scrollY = ref(0)
const vw = ref(1920)
const vh = ref(1080)

// One continuous groove flowing from News through to Crew
const waypointsDef = [
  { xFrac: 0.56, yAbs: 1200 },
  { xFrac: 0.52, yAbs: 1600 },
  { xFrac: 0.40, yAbs: 2100 },
  { xFrac: 0.30, yAbs: 2600 },
  { xFrac: 0.38, yAbs: 3100 },
  { xFrac: 0.55, yAbs: 3800 },
  { xFrac: 0.65, yAbs: 4400 },
  { xFrac: 0.50, yAbs: 5200 },
  { xFrac: 0.35, yAbs: 6000 },
  { xFrac: 0.42, yAbs: 6800 },
  { xFrac: 0.55, yAbs: 7500 },
  { xFrac: 0.50, yAbs: 8200 },
]

const pts = computed(() =>
  waypointsDef.map(wp => ({ x: wp.xFrac * vw.value, y: wp.yAbs }))
)

function buildSmoothPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return ''
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`
  for (let i = 1; i < points.length - 1; i++) {
    const mid = {
      x: (points[i].x + points[i + 1].x) / 2,
      y: (points[i].y + points[i + 1].y) / 2,
    }
    d += ` Q ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)} ${mid.x.toFixed(1)} ${mid.y.toFixed(1)}`
  }
  const last = points[points.length - 1]
  d += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`
  return d
}

const curvePath = computed(() => buildSmoothPath(pts.value))

function onScroll() { scrollY.value = window.scrollY }
function onResize() {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
}

onMounted(() => {
  if (window.innerWidth < 768) return
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>
