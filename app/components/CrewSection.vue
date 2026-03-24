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
      <div class="max-w-7xl mx-auto px-6 relative h-full flex flex-col justify-center">
        <!-- Decorative flowing curve (left side per Figma): mint green tube → neumorphic gray groove transition -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <svg class="absolute left-0 top-0 w-full h-full" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <!-- Green tube gradient (upper portion) -->
              <linearGradient id="crew-curve-green" x1="0%" y1="0%" x2="0%" y2="50%">
                <stop offset="0%" stop-color="#8FD4B4" stop-opacity="0.8" />
                <stop offset="60%" stop-color="#77e5b0" stop-opacity="0.7" />
                <stop offset="100%" stop-color="#4ECBA5" stop-opacity="0.4" />
              </linearGradient>
              <linearGradient id="crew-curve-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6" />
                <stop offset="40%" stop-color="#ffffff" stop-opacity="0.2" />
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
              </linearGradient>
              <!-- Neumorphic groove: dark shadow side -->
              <linearGradient id="crew-groove-dark" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#c0c0c0" stop-opacity="0.5" />
                <stop offset="100%" stop-color="#d0d0d0" stop-opacity="0.3" />
              </linearGradient>
              <!-- Neumorphic groove: light highlight side -->
              <linearGradient id="crew-groove-light" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#f5f5f5" stop-opacity="0.6" />
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0.4" />
              </linearGradient>
              <filter id="crew-glow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- UPPER PORTION: Mint green 3D tube (from top, curving with loop) -->
            <path
              d="M80 -20 C80 120, 200 200, 160 350 S40 450, 100 500"
              stroke="url(#crew-curve-green)"
              stroke-width="7"
              stroke-linecap="round"
              fill="none"
              filter="url(#crew-glow)"
            />
            <!-- White highlight for 3D tube effect -->
            <path
              d="M77 -20 C77 120, 197 200, 157 350 S37 450, 97 500"
              stroke="url(#crew-curve-highlight)"
              stroke-width="2.5"
              stroke-linecap="round"
              fill="none"
            />

            <!-- LOWER PORTION: Neumorphic gray groove (carved into surface) -->
            <!-- Dark shadow edge (right/bottom side of groove) -->
            <path
              d="M102 500 C130 580, 70 660, 82 740 C90 800, 65 850, 80 920"
              stroke="#c8c8c8"
              stroke-width="4"
              stroke-linecap="round"
              fill="none"
              opacity="0.5"
            />
            <!-- Light highlight edge (left/top side of groove) -->
            <path
              d="M98 500 C126 580, 66 660, 78 740 C86 800, 61 850, 76 920"
              stroke="#f0f0f0"
              stroke-width="3"
              stroke-linecap="round"
              fill="none"
              opacity="0.6"
            />

            <!-- Transition dot at loop inflection (green → gray) -->
            <circle cx="160" cy="350" r="5" fill="#77e5b0" opacity="0.6" />
            <circle cx="100" cy="500" r="4" fill="#b0d0c0" opacity="0.4" />
          </svg>
        </div>

        <!-- Title -->
        <h2
          class="relative z-10 mb-8 pl-0 lg:pl-0"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060; letter-spacing: 9.6px;"
        >
          團隊成員
        </h2>

        <!-- Desktop: scroll-animated cards -->
        <div v-if="!isMobile" class="crew-card-area relative w-full overflow-visible" style="height: 480px;">
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
              <h3
                class="mb-2"
                style="font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 400;"
                :style="{ color: role.color }"
              >{{ role.name }}</h3>
              <p style="font-family: 'Noto Sans TC', sans-serif; font-size: 13px; font-weight: 300; color: #606060;">
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

    <!-- JOIN US! neumorphic circle button (bottom-left per Figma) -->
    <div class="absolute bottom-32 max-w-7xl mx-auto left-0 right-0 px-6">
      <a
        id="join-us-btn"
        href="https://instagram.com/open.nccu"
        target="_blank"
        rel="noopener noreferrer"
        class="join-us-circle flex items-center justify-center ml-4"
      >
        <span class="join-us-text text-center">JOIN<br />US !</span>
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
  /* Figma: ~20-25px rounded rectangles — DO NOT ENLARGE */
  border-radius: 24px;
  background: rgba(250, 250, 250, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  cursor: pointer;
}

.join-us-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #f0f0f0;
  box-shadow:
    6px 6px 16px rgba(0, 0, 0, 0.1),
    -6px -6px 16px rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
}

.join-us-circle:hover {
  box-shadow:
    4px 4px 12px rgba(0, 0, 0, 0.12),
    -4px -4px 12px rgba(255, 255, 255, 0.9);
  transform: scale(1.05);
}

.join-us-circle:active {
  box-shadow:
    inset 3px 3px 8px rgba(0, 0, 0, 0.08),
    inset -3px -3px 8px rgba(255, 255, 255, 0.7);
}

/* Figma: JOIN US text is light gray, semi-bold — matches neumorphic low-contrast style */
.join-us-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #999999;
  letter-spacing: 1.5px;
  line-height: 1.2;
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
