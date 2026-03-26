<template>
  <div
    class="crew-card"
    :style="{ '--card-color': color, '--card-color-rgb': colorRgb }"
    @click="$emit('click')"
  >
    <!-- Gradient blob background -->
    <div class="crew-card-blob" />

    <!-- Card content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full p-6" :style="{ opacity: showOpenNccu ? 1 - (openNccuOpacity ?? 1) : 1 }">
      <!-- Team/role name — Figma API: 48px weight300 Montserrat, gradient #94CCB9→#3FA4B6, ls3.84, lh58.5 (same for all cards) -->
      <h3
        class="text-center mb-3 crew-card-name"
        style="font-family: 'Montserrat', sans-serif; font-weight: 300; font-size: clamp(24px, 4vw, 48px); line-height: 58.5px; letter-spacing: 3.84px;"
      >
        {{ label }}
      </h3>

      <!-- Decorative icon -->
      <div class="flex justify-center mb-4">
        <!-- Sparkles (green theme) -->
        <div v-if="icon === 'sparkles'" class="flex items-end gap-1">
          <svg v-for="(s, i) in [18, 22, 16, 24, 14]" :key="i" :width="s" :height="s" viewBox="0 0 24 24" class="drop-shadow-sm">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" :fill="color" :opacity="0.6 + i * 0.08" />
          </svg>
        </div>

        <!-- Bar chart (teal theme) -->
        <div v-else-if="icon === 'bars'" class="flex items-end gap-1.5">
          <div
            v-for="(h, i) in [32, 40, 20, 32, 44]"
            :key="i"
            class="w-5 rounded-sm"
            :style="{
              height: h + 'px',
              background: `linear-gradient(180deg, ${color}, ${colorLight})`,
              opacity: 0.7 + i * 0.06,
              boxShadow: `0 2px 4px ${color}40`,
            }"
          />
        </div>

        <!-- Dots grid (purple theme) -->
        <div v-else-if="icon === 'dots'" class="grid grid-cols-4 gap-1.5">
          <div
            v-for="(d, i) in [10, 8, 10, 6, 8, 10, 8, 10, 6, 8, 6, 8]"
            :key="i"
            class="rounded-full"
            :style="{
              width: d + 'px',
              height: d + 'px',
              backgroundColor: color,
              opacity: 0.5 + (i % 3) * 0.15,
              boxShadow: `0 1px 3px ${color}30`,
            }"
          />
        </div>
      </div>

      <!-- Description (shown when showDescription is true) — Figma API: 24px weight300 #AEAEB2 ls0.96 lh36 — DO NOT shrink below 24px -->
      <p
        v-if="description && showDescription"
        class="text-center"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 300; color: #aeaeb2; letter-spacing: 0.96px; line-height: 36px;"
      >
        {{ description }}
      </p>
    </div>

    <!-- OPEN NCCU overlay for collapsed state -->
    <div
      v-if="showOpenNccu"
      class="absolute inset-0 z-20 flex items-center justify-center rounded-[24px] overflow-hidden transition-opacity duration-300"
      :style="{
        background: 'linear-gradient(135deg, rgba(78,203,165,0.15), rgba(120,180,220,0.1), rgba(255,255,255,0.3))',
        opacity: openNccuOpacity,
      }"
    >
      <span
        class="text-4xl tracking-[0.2em] text-center leading-relaxed crew-card-name"
        style="font-family: 'Montserrat', sans-serif; font-weight: 300; font-size: clamp(24px, 4vw, 48px);"
      >
        OPEN<br>NCCU
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  description?: string
  icon: 'sparkles' | 'bars' | 'dots'
  color: string
  colorRgb: string
  colorLight: string
  showDescription?: boolean
  showOpenNccu?: boolean
  openNccuOpacity?: number
  multiLine?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.crew-card {
  position: absolute;
  width: 312px;
  height: 268px;
  /* Figma: ~20-25px rounded rectangles, NOT pill-shaped 50px — DO NOT ENLARGE */
  border-radius: 24px;
  /* Figma API: Cards fill = #FCFCFC at 48% opacity — DO NOT change to gradient */
  background: rgba(253, 253, 253, 0.48);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  overflow: hidden;
  cursor: pointer;
  will-change: transform;
  contain: layout style paint;
}

.crew-card:hover {
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

/* Figma API: ALL role/team names use the SAME gradient: #94CCB9 → #3FA4B6 (teal green to teal blue) */
.crew-card-name {
  background: linear-gradient(
    170deg,
    #94CCB9 0%,
    #3FA4B6 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.crew-card-blob {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--card-color-rgb), 0.2) 0%,
    rgba(var(--card-color-rgb), 0.06) 50%,
    transparent 70%
  );
  z-index: 1;
  bottom: -60px;
  right: -40px;
}
</style>
