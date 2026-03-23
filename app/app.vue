<template>
  <div>
    <!-- Loading overlay: prevents interaction until fully hydrated -->
    <Transition name="loading-fade">
      <div v-if="!ready" class="loading-overlay">
        <div class="loading-content">
          <img src="/logo.png" alt="Open NCCU" class="loading-logo" />
        </div>
      </div>
    </Transition>

    <ScrollTrack />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const ready = ref(false)

if (import.meta.client) {
  onMounted(() => {
    // Wait for next frame + a small delay to ensure all child components
    // (ScrollTrack, CrewSection, etc.) have finished mounting and measuring
    requestAnimationFrame(() => {
      setTimeout(() => {
        ready.value = true
      }, 300)
    })
  })
}
</script>

<style>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  text-align: center;
}

.loading-logo {
  width: 64px;
  height: 64px;
  animation: loading-pulse 1.5s ease-in-out infinite;
}

@keyframes loading-pulse {
  0%, 100% { opacity: 0.4; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1); }
}

.loading-fade-leave-active {
  transition: opacity 0.4s ease;
}

.loading-fade-leave-to {
  opacity: 0;
}
</style>
