<template>
  <ClientOnly>
    <div
      ref="marbleRef"
      class="marble fixed z-50 pointer-events-none"
      :class="sizeClass"
      :style="marbleStyle"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  startX?: number
  startY?: number
  speed?: number
}>(), {
  size: 'md',
  startX: 90,
  startY: 20,
  speed: 1,
})

const marbleRef = ref<HTMLElement>()
const scrollY = ref(0)
const viewportWidth = ref(1024)
const docHeight = ref(3000)
const windowHeight = ref(800)

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'marble-sm'
  if (props.size === 'lg') return 'marble-lg'
  return ''
})

const marbleStyle = computed(() => {
  const progress = scrollY.value / Math.max(docHeight.value - windowHeight.value, 1)
  const rotation = scrollY.value * props.speed * 2

  // Marble rolls along a sine-wave path across the viewport
  const amplitude = viewportWidth.value * 0.3
  const centerX = viewportWidth.value * (props.startX / 100)
  const xOffset = Math.sin(progress * Math.PI * 4) * amplitude

  // Vertical position follows scroll naturally
  const topPercent = props.startY + progress * 60

  return {
    left: `${Math.max(40, Math.min(centerX + xOffset, viewportWidth.value - 120))}px`,
    top: `${topPercent}vh`,
    transform: `rotate(${rotation}deg)`,
  }
})

const onScroll = () => {
  scrollY.value = window.scrollY
  docHeight.value = document.documentElement.scrollHeight
  windowHeight.value = window.innerHeight
}

const onResize = () => {
  viewportWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

onMounted(() => {
  viewportWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
  docHeight.value = document.documentElement.scrollHeight
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>
