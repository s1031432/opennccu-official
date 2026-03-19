<template>
  <div
    class="marble-wrapper"
    :style="{
      width: size + 'px',
      height: size + 'px',
      transform: `rotate(${rotation}deg)`,
      transition: 'transform 0.05s linear',
    }"
  >
    <svg
      :width="size"
      :height="size"
      :viewBox="`0 0 ${size} ${size}`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Main radial gradient for glass sphere -->
        <radialGradient :id="`marble-grad-${uid}`" cx="38%" cy="32%" r="65%" fx="38%" fy="32%">
          <stop offset="0%" :stop-color="highlightColor" stop-opacity="0.95" />
          <stop offset="30%" :stop-color="mainColor" stop-opacity="0.75" />
          <stop offset="70%" :stop-color="shadowColor" stop-opacity="0.60" />
          <stop offset="100%" :stop-color="deepShadow" stop-opacity="0.55" />
        </radialGradient>

        <!-- Swirl pattern gradient -->
        <radialGradient :id="`swirl-${uid}`" cx="60%" cy="65%" r="50%">
          <stop offset="0%" stop-color="white" stop-opacity="0.3" />
          <stop offset="100%" stop-color="transparent" stop-opacity="0" />
        </radialGradient>

        <!-- Specular highlight -->
        <radialGradient :id="`spec-${uid}`" cx="35%" cy="28%" r="30%">
          <stop offset="0%" stop-color="white" stop-opacity="0.85" />
          <stop offset="60%" stop-color="white" stop-opacity="0.2" />
          <stop offset="100%" stop-color="white" stop-opacity="0" />
        </radialGradient>

        <!-- Bottom reflection -->
        <radialGradient :id="`reflect-${uid}`" cx="50%" cy="90%" r="40%">
          <stop offset="0%" :stop-color="mainColor" stop-opacity="0.4" />
          <stop offset="100%" stop-color="transparent" stop-opacity="0" />
        </radialGradient>

        <filter :id="`blur-${uid}`">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <filter :id="`glow-${uid}`">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Outer glow ring -->
      <circle
        :cx="size / 2" :cy="size / 2" :r="size / 2 - 1"
        :fill="mainColor"
        opacity="0.08"
        :filter="`url(#glow-${uid})`"
      />

      <!-- Main sphere body -->
      <circle
        :cx="size / 2" :cy="size / 2" :r="size / 2 - 2"
        :fill="`url(#marble-grad-${uid})`"
      />

      <!-- Swirl internal pattern -->
      <ellipse
        :cx="size * 0.55" :cy="size * 0.6"
        :rx="size * 0.25" :ry="size * 0.18"
        :fill="`url(#swirl-${uid})`"
        opacity="0.6"
        transform-origin="center"
        :transform="`rotate(${rotation * 0.3}, ${size/2}, ${size/2})`"
      />

      <!-- Secondary swirl -->
      <ellipse
        :cx="size * 0.4" :cy="size * 0.45"
        :rx="size * 0.2" :ry="size * 0.12"
        fill="white"
        opacity="0.12"
        :transform="`rotate(${-rotation * 0.2 + 30}, ${size/2}, ${size/2})`"
      />

      <!-- Primary specular highlight -->
      <circle
        :cx="size * 0.37" :cy="size * 0.3"
        :r="size * 0.12"
        :fill="`url(#spec-${uid})`"
      />

      <!-- Small secondary highlight -->
      <circle
        :cx="size * 0.55" :cy="size * 0.22"
        :r="size * 0.045"
        fill="white"
        opacity="0.7"
      />

      <!-- Bottom reflection -->
      <circle
        :cx="size / 2" :cy="size / 2" :r="size / 2 - 2"
        :fill="`url(#reflect-${uid})`"
      />

      <!-- Edge rim for glass effect -->
      <circle
        :cx="size / 2" :cy="size / 2" :r="size / 2 - 2"
        :stroke="rimColor"
        stroke-width="1.5"
        fill="none"
        opacity="0.5"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: number
  rotation?: number
  variant?: 'mint' | 'teal' | 'white' | 'sage'
}>(), {
  size: 80,
  rotation: 0,
  variant: 'mint',
})

const uid = useId()

const colorMap = {
  mint: {
    highlight: '#A8EDD8',
    main: '#4ECBA5',
    shadow: '#2EA87E',
    deep: '#1A7055',
    rim: '#6DDBB8',
  },
  teal: {
    highlight: '#B2F0E8',
    main: '#38BEC9',
    shadow: '#1A8C96',
    deep: '#0F5F67',
    rim: '#5DD4DC',
  },
  white: {
    highlight: '#FFFFFF',
    main: '#D4F5EC',
    shadow: '#A8E8D5',
    deep: '#7DCFB8',
    rim: '#FFFFFF',
  },
  sage: {
    highlight: '#C8EDDE',
    main: '#8FC9B5',
    shadow: '#5BA090',
    deep: '#3D7568',
    rim: '#A8D9C9',
  },
}

const colors = computed(() => colorMap[props.variant])
const highlightColor = computed(() => colors.value.highlight)
const mainColor = computed(() => colors.value.main)
const shadowColor = computed(() => colors.value.shadow)
const deepShadow = computed(() => colors.value.deep)
const rimColor = computed(() => colors.value.rim)
</script>

<style scoped>
.marble-wrapper {
  display: inline-block;
  filter: drop-shadow(0 8px 24px rgba(78, 203, 165, 0.35)) drop-shadow(0 2px 8px rgba(0,0,0,0.12));
}
</style>
