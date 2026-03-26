<template>
  <!-- Single decorative neumorphic curve that runs through all sections.
       Positioned as a fixed/absolute background layer behind all content.
       Hidden on mobile for performance. -->
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
            <!-- Drop shadow (white, offset up-left = raised effect) -->
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
            <feOffset dx="-4" dy="-4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="ha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
            <feBlend in2="bg" result="highlight" />
            <!-- Drop shadow (dark, offset down-right = depth) -->
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2" />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="ha2" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="highlight" result="shadow" />
            <feBlend in="SourceGraphic" in2="shadow" result="shape" />
            <!-- Inner shadow for groove -->
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha3" />
            <feOffset dx="3" dy="3" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="ha3" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend in2="shape" result="final" />
          </filter>

          <!-- Mint green glow filter for accent segments -->
          <filter id="bg-curve-glow" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="bg" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
            <feOffset dx="6" dy="6" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="ha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0" />
            <feBlend in2="bg" result="highlight" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2" />
            <feOffset dx="5" dy="5" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="ha2" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend in2="highlight" result="shadow" />
            <feBlend in="SourceGraphic" in2="shadow" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha3" />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="ha3" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend in2="shape" />
          </filter>

          <!-- Endpoint orb filter -->
          <filter id="bg-orb" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="bg" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="ha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="bg" result="shadow" />
            <feBlend in="SourceGraphic" in2="shadow" />
          </filter>
        </defs>

        <!-- Translate the entire path group with scroll so it moves with the page -->
        <g :style="{ transform: `translateY(${-scrollY}px)` }">
          <!-- ═══ Main continuous neumorphic groove line ═══ -->
          <!-- This single path flows from the top of the page (News area)
               through Product, Collaborate, About, and down to Crew/Footer.
               Stroke = #f0f0f0 (same as bg) with neumorphic shadows = "carved groove" -->
          <path
            :d="curvePath"
            stroke="#ededed"
            stroke-width="28"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            filter="url(#bg-curve-emboss)"
          />

          <!-- ═══ Mint green accent segment (Product section area) ═══ -->
          <path
            :d="accentPath"
            stroke="#8FD4B4"
            stroke-width="32"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            filter="url(#bg-curve-glow)"
            opacity="0.7"
          />
          <!-- Highlight edge on accent -->
          <path
            :d="accentPath"
            stroke="#ffffff"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            opacity="0.25"
          />

          <!-- ═══ Endpoint orbs ═══ -->
          <!-- Top of curve -->
          <g filter="url(#bg-orb)">
            <circle :cx="pts[0].x" :cy="pts[0].y" r="14" fill="#e0e0e0" />
            <circle :cx="pts[0].x - 3" :cy="pts[0].y - 3" r="5" fill="white" fill-opacity="0.5" />
          </g>
          <!-- Bottom of curve -->
          <g filter="url(#bg-orb)">
            <circle :cx="pts[pts.length-1].x" :cy="pts[pts.length-1].y" r="14" fill="#e0e0e0" />
            <circle :cx="pts[pts.length-1].x - 3" :cy="pts[pts.length-1].y - 3" r="5" fill="white" fill-opacity="0.5" />
          </g>
          <!-- Accent segment start orb (mint) -->
          <g filter="url(#bg-orb)">
            <circle :cx="accentPts[0].x" :cy="accentPts[0].y" r="16" fill="#9DD5BE" />
            <circle :cx="accentPts[0].x - 3" :cy="accentPts[0].y - 3" r="5" fill="white" fill-opacity="0.5" />
          </g>
          <!-- Accent segment end orb (mint) -->
          <g filter="url(#bg-orb)">
            <circle :cx="accentPts[accentPts.length-1].x" :cy="accentPts[accentPts.length-1].y" r="16" fill="#9DD5BE" />
            <circle :cx="accentPts[accentPts.length-1].x - 3" :cy="accentPts[accentPts.length-1].y - 3" r="5" fill="white" fill-opacity="0.5" />
          </g>
        </g>
      </svg>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
/**
 * BackgroundCurve — a single neumorphic groove line that runs through
 * the entire page, connecting all sections visually.
 *
 * The curve path is defined as waypoints (fraction of viewport width × page height).
 * It's drawn in a fixed SVG and translated with scrollY.
 */
const scrollY = ref(0)
const vw = ref(1920)
const vh = ref(1080)
const pageH = ref(8000)

// ── Waypoints: the groove flows like a lazy S through the page ──────────────
// xFrac = fraction of viewport width (0..1)
// yAbs  = approximate pixel position from top of page
// These create a smooth continuous curve through all sections
const waypointsDef = [
  // News section area (top, right side)
  { xFrac: 0.56, yAbs: 1200 },
  { xFrac: 0.52, yAbs: 1600 },
  // Product section area (curves left then right through the phones)
  { xFrac: 0.40, yAbs: 2100 },
  { xFrac: 0.30, yAbs: 2600 },
  { xFrac: 0.38, yAbs: 3100 },
  // Collaborate section (sweeps right)
  { xFrac: 0.55, yAbs: 3800 },
  { xFrac: 0.65, yAbs: 4400 },
  // About section (curves back left)
  { xFrac: 0.50, yAbs: 5200 },
  { xFrac: 0.35, yAbs: 6000 },
  { xFrac: 0.42, yAbs: 6800 },
  // Crew section (subtle exit)
  { xFrac: 0.55, yAbs: 7500 },
  { xFrac: 0.50, yAbs: 8200 },
]

// Accent segment waypoints (the mint green portion, through Product section)
const accentDef = [
  { xFrac: 0.40, yAbs: 2100 },
  { xFrac: 0.30, yAbs: 2600 },
  { xFrac: 0.38, yAbs: 3100 },
]

const pts = computed(() =>
  waypointsDef.map(wp => ({ x: wp.xFrac * vw.value, y: wp.yAbs }))
)

const accentPts = computed(() =>
  accentDef.map(wp => ({ x: wp.xFrac * vw.value, y: wp.yAbs }))
)

// ── Build smooth SVG path through waypoints ──────────────────────────────────
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
const accentPath = computed(() => buildSmoothPath(accentPts.value))

// ── Scroll & resize handlers ─────────────────────────────────────────────────
function onScroll() {
  scrollY.value = window.scrollY
}

function onResize() {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  pageH.value = document.documentElement.scrollHeight
}

onMounted(() => {
  if (window.innerWidth < 768) return

  vw.value = window.innerWidth
  vh.value = window.innerHeight
  pageH.value = document.documentElement.scrollHeight

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })

  setTimeout(() => {
    pageH.value = document.documentElement.scrollHeight
  }, 500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>
