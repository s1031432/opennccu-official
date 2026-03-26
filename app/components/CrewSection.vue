<template>
  <!-- Outer scroll runway -->
  <section
    ref="sectionRef"
    class="relative crew-runway"
    :style="{ height: isMobile ? 'auto' : '400vh' }"
  >
    <!-- Sticky inner container -->
    <div
      class="crew-sticky"
      :class="{ 'position-sticky': !isMobile }"
    >
      <div class="max-w-7xl mx-auto px-6 relative h-full flex flex-col md:flex-row items-center">
        <!-- Decorative flowing curve (left side per Figma API): rendered by ScrollTrack, removed from here to avoid duplication -->

        <!-- Figma layout: title on left (x=356), cards on right (x=842) — side by side on desktop -->
        <div class="relative z-10 flex-shrink-0 self-center mb-8 md:mb-0" style="width: clamp(200px, 25vw, 380px);">
          <!-- Figma: crew.png shows 團隊成員 in LIGHT weight (300) matching other section titles — DO NOT change to bold -->
          <h2
            style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(36px, 6vw, 80px); font-weight: 300; color: #616161; letter-spacing: clamp(3px, 0.5vw, 9.6px);"
          >
            團隊成員
          </h2>
        </div>

        <!-- Desktop: scroll-animated cards (right side per Figma x=842) -->
        <div v-if="!isMobile" class="crew-card-area relative flex-1 overflow-visible" style="height: 480px;">
          <!-- State 1 & 2: Team group cards (3 cards) -->
          <CrewCard
            v-for="(group, i) in teamGroups"
            :key="'group-' + group.id"
            :label="group.name"
            :description="group.description"
            :icon="group.icon"
            :color="group.color"
            :color-rgb="group.colorRgb"
            :color-light="group.colorLight"
            :show-description="false"
            :show-open-nccu="smoothProgress < 0.25 && i === teamGroups.length - 1"
            :open-nccu-opacity="smoothProgress < 0.1 ? 1 : Math.max(0, 1 - (smoothProgress - 0.1) / 0.15)"
            :multi-line="true"
            :style="groupCardStyle(i)"
          />

          <!-- State 2 & 3: Role cards (6 cards) -->
          <CrewCard
            v-for="(role, i) in roleCards"
            :key="'role-' + role.id"
            :label="role.name"
            :description="role.description"
            :icon="role.icon"
            :color="role.color"
            :color-rgb="role.colorRgb"
            :color-light="role.colorLight"
            :show-description="smoothProgress > 0.6"
            :style="roleCardStyle(i)"
            @click="openRolePopup(role)"
          />

          <!-- Founder circle (centered between UR/MKT/PM/PR, behind them) -->
          <FounderCircle
            :style="founderStyle"
            @click="openFounderPopup"
          />
        </div>

        <!-- Mobile: static grid -->
        <div v-else class="grid grid-cols-2 gap-4 mb-8">
          <div
            v-for="role in roleCards"
            :key="'mobile-' + role.id"
            class="crew-card-mobile"
            :style="{ '--card-color-rgb': role.colorRgb }"
            @click="openRolePopup(role)"
          >
            <div class="crew-card-blob-mobile" />
            <div class="relative z-10 p-5 text-center">
              <!-- Figma API: mobile role names use same gradient #94CCB9→#3FA4B6 as desktop -->
              <h3
                class="mb-2 crew-card-name-mobile"
                style="font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 300; letter-spacing: 1.92px;"
              >{{ role.name }}</h3>
              <p style="font-family: 'Noto Sans TC', sans-serif; font-size: 13px; font-weight: 300; color: #aeaeb2;">
                {{ role.description }}
              </p>
            </div>
          </div>

          <!-- Founder circle mobile -->
          <div class="col-span-2 flex justify-center mt-4">
            <FounderCircle @click="openFounderPopup" />
          </div>
        </div>
      </div>
    </div>

    <!-- JOIN US! neumorphic circle (Figma Ellipse 186: 223×223px at bottom-left) -->
    <!-- NOTE: The circle is rendered inside ScrollTrack SVG for the marble animation.
         This hidden anchor is kept for layout measurement only. -->
    <div class="absolute bottom-16 max-w-7xl mx-auto left-0 right-0 px-6">
      <a
        id="join-us-btn"
        href="https://instagram.com/open.nccu"
        target="_blank"
        rel="noopener noreferrer"
        class="join-us-circle flex items-center justify-center ml-4"
      >
        <!-- Figma: "JOIN US !" is a vector text in #F0F0F0 with drop shadow 4,4,6px black 7% -->
        <div class="join-us-text">
          <span class="block">JOIN</span>
          <span class="block">US !</span>
        </div>
      </a>
    </div>

    <!-- Popups -->
    <CrewPopup
      v-if="popupRole"
      :role="popupRole"
      @close="popupRole = null"
    />
    <FounderPopup
      v-if="showFounderPopup"
      :members="founderMembers"
      @close="showFounderPopup = false"
    />
  </section>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'

// ── Responsive detection ────────────────────────────────────────────────────
const isMobile = ref(false)
function checkMobile() {
  isMobile.value = window.innerWidth < 768
}
if (import.meta.client) {
  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
  })
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
}

// ── Scroll progress (inline for reliability) ────────────────────────────────
const sectionRef = ref<HTMLElement | null>(null)
const smoothProgress = ref(0)

if (import.meta.client) {
  let targetP = 0
  let velocity = 0
  let raf = 0
  let running = false

  function tick() {
    const diff = targetP - smoothProgress.value
    velocity += diff * 0.06
    velocity *= 0.8
    smoothProgress.value = Math.max(0, Math.min(1, smoothProgress.value + velocity))
    if (Math.abs(diff) > 0.0001 || Math.abs(velocity) > 0.0001) {
      raf = requestAnimationFrame(tick)
    } else {
      smoothProgress.value = targetP
      running = false
    }
  }

  function onScroll() {
    const el = sectionRef.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const runway = rect.height - window.innerHeight
    if (runway <= 0) return
    targetP = Math.max(0, Math.min(1, -rect.top / runway))
    if (!running) { running = true; tick() }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    // Initial call after a short delay to ensure layout is ready
    setTimeout(onScroll, 100)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(raf)
  })
}

// ── Data (from app/data/crew.ts) ─────────────────────────────────────────────
import { teamGroups, roleCards, founderMembers } from '~/data/crew'
import type { RoleData } from '~/data/crew'

// ── Popup state ─────────────────────────────────────────────────────────────
const popupRole = ref<RoleData | null>(null)
const showFounderPopup = ref(false)

function openRolePopup(role: RoleData) {
  popupRole.value = role
}
function openFounderPopup() {
  showFounderPopup.value = true
}

// ── Card position engine ────────────────────────────────────────────────────
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// Group card positions for 3 states
interface CardPosition {
  x: number
  y: number
  rotation: number
  scale: number
  opacity: number
}

// State 1: all stacked at center
const stackedPositions: CardPosition[] = [
  { x: 200, y: 60, rotation: -4, scale: 0.95, opacity: 1 },
  { x: 220, y: 35, rotation: 2, scale: 0.97, opacity: 1 },
  { x: 240, y: 10, rotation: 6, scale: 1, opacity: 1 },
]

// State 2: 3 team group cards spread out
const groupPositions: CardPosition[] = [
  { x: -40, y: 120, rotation: -3, scale: 1, opacity: 1 },    // Product Team (left)
  { x: 220, y: 10, rotation: 2, scale: 1, opacity: 1 },      // Insight Team (center)
  { x: 500, y: 130, rotation: 4, scale: 1, opacity: 1 },     // Operation Team (right)
]

// State 1 for role cards: hidden/stacked
const roleStackedPositions: CardPosition[] = [
  { x: 220, y: 40, rotation: -2, scale: 0.9, opacity: 0 },
  { x: 230, y: 30, rotation: 1, scale: 0.9, opacity: 0 },
  { x: 240, y: 20, rotation: 3, scale: 0.9, opacity: 0 },
  { x: 210, y: 50, rotation: -1, scale: 0.9, opacity: 0 },
  { x: 225, y: 35, rotation: 2, scale: 0.9, opacity: 0 },
  { x: 235, y: 25, rotation: -3, scale: 0.9, opacity: 0 },
]

// State 3: 6 role cards in scattered 2x3 grid
const roleSpreadPositions: CardPosition[] = [
  { x: -50, y: 0, rotation: -2, scale: 0.82, opacity: 1 },     // UI
  { x: -30, y: 210, rotation: 1, scale: 0.82, opacity: 1 },    // DEV
  { x: 210, y: -15, rotation: 3, scale: 0.82, opacity: 1 },    // UR
  { x: 230, y: 200, rotation: -1, scale: 0.82, opacity: 1 },   // MKT
  { x: 470, y: 5, rotation: -3, scale: 0.82, opacity: 1 },     // PM
  { x: 490, y: 215, rotation: 2, scale: 0.82, opacity: 1 },    // PR
]

function lerpPosition(a: CardPosition, b: CardPosition, t: number): CardPosition {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    rotation: lerp(a.rotation, b.rotation, t),
    scale: lerp(a.scale, b.scale, t),
    opacity: lerp(a.opacity, b.opacity, t),
  }
}

function positionToStyle(pos: CardPosition, zIndex = 1): CSSProperties {
  return {
    transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg) scale(${pos.scale})`,
    opacity: pos.opacity,
    zIndex,
    pointerEvents: pos.opacity > 0.3 ? 'auto' : 'none',
    transition: 'box-shadow 0.3s ease',
  }
}

function groupCardStyle(index: number): CSSProperties {
  const p = smoothProgress.value

  if (p < 0.15) {
    // State 1: stacked
    return positionToStyle(stackedPositions[index])
  } else if (p < 0.35) {
    // Transition: stacked → spread
    const t = easeInOutCubic((p - 0.15) / 0.2)
    return positionToStyle(lerpPosition(stackedPositions[index], groupPositions[index], t))
  } else if (p < 0.5) {
    // State 2: 3 team cards visible
    return positionToStyle(groupPositions[index])
  } else {
    // Fade out as role cards appear
    const t = easeInOutCubic(Math.min(1, (p - 0.5) / 0.15))
    const faded = { ...groupPositions[index], opacity: lerp(1, 0, t) }
    return positionToStyle(faded)
  }
}

function roleCardStyle(index: number): CSSProperties {
  const p = smoothProgress.value

  if (p < 0.45) {
    // Hidden
    return positionToStyle(roleStackedPositions[index], 2)
  } else if (p < 0.65) {
    // Fade in + spread
    const t = easeInOutCubic((p - 0.45) / 0.2)
    return positionToStyle(lerpPosition(roleStackedPositions[index], roleSpreadPositions[index], t), 2)
  } else {
    // State 3: fully visible
    return positionToStyle(roleSpreadPositions[index], 2)
  }
}

// Founder circle: centered between UR(2), MKT(3), PM(4), PR(5)
const CARD_W = 312 * 0.82 // scaled card width
const CARD_H = 268 * 0.82 // scaled card height
const FOUNDER_SIZE = 180

const founderOpacity = computed(() => {
  const p = smoothProgress.value
  if (p < 0.7) return 0
  if (p > 0.85) return 1
  return (p - 0.7) / 0.15
})

const founderStyle = computed((): CSSProperties => {
  // Center of the 4 cards (UR=2, MKT=3, PM=4, PR=5)
  const cards = [roleSpreadPositions[2], roleSpreadPositions[3], roleSpreadPositions[4], roleSpreadPositions[5]]
  const centerX = cards.reduce((s, c) => s + c.x + CARD_W / 2, 0) / 4 - FOUNDER_SIZE / 2
  const centerY = cards.reduce((s, c) => s + c.y + CARD_H / 2, 0) / 4 - FOUNDER_SIZE / 2

  const scale = lerp(0.8, 1, Math.min(1, founderOpacity.value))

  return {
    position: 'absolute',
    left: `${centerX}px`,
    top: `${centerY}px`,
    opacity: founderOpacity.value,
    transform: `scale(${scale})`,
    zIndex: 0, // behind the role cards
    pointerEvents: founderOpacity.value > 0.5 ? 'auto' : 'none',
  }
})
</script>

<style scoped>
.crew-runway {
  position: relative;
}

.position-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
}

.crew-card-mobile {
  position: relative;
  /* Figma API: all crew cards cr=50.0 — mobile uses proportionally smaller 32px */
  border-radius: 32px;
  /* Figma API: fill rgba(253,253,253,0.56) + GLASS + teal shadow */
  background: rgba(253, 253, 253, 0.56);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    4px 4px 12px rgba(39, 82, 72, 0.2);
  overflow: hidden;
  cursor: pointer;
}

/* Figma Ellipse 186: 223×223px, fill #F0F0F0, neumorphic inner+drop shadows */
.join-us-circle {
  width: 223px;
  height: 223px;
  border-radius: 50%;
  /* Figma: fill #F0F0F0 (same as background — neumorphic raised circle) */
  background: #f0f0f0;
  box-shadow:
    /* Figma DROP_SHADOW: 8,8,15px white 40% */
    8px 8px 15px rgba(255, 255, 255, 0.4),
    /* Figma INNER_SHADOW: 8,8,15px black 7% (simulated as inset) */
    inset 8px 8px 15px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
}

.join-us-circle:hover {
  box-shadow:
    8px 8px 15px rgba(255, 255, 255, 0.5),
    inset 8px 8px 15px rgba(0, 0, 0, 0.09);
  transform: scale(1.03);
}

/* Figma: "JOIN US !" vector text fill #F0F0F0 with DROP_SHADOW 4,4,6px black 7% — embossed neumorphic text */
.join-us-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 1.15;
  text-align: center;
  /* Figma: text color same as bg (#F0F0F0) — visible only via shadow (embossed) */
  color: #e0e0e0;
  text-shadow:
    4px 4px 6px rgba(0, 0, 0, 0.07),
    -2px -2px 4px rgba(255, 255, 255, 0.9);
}

/* Figma API: mobile role names gradient matching desktop — #94CCB9 → #3FA4B6 */
.crew-card-name-mobile {
  background: linear-gradient(170deg, #94CCB9 0%, #3FA4B6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.crew-card-blob-mobile {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--card-color-rgb), 0.15) 0%,
    rgba(var(--card-color-rgb), 0.04) 50%,
    transparent 70%
  );
  z-index: 1;
  bottom: -30px;
  right: -20px;
}
</style>
