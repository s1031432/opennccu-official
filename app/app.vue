<template>
  <div>
    <!-- Loading overlay: hides once JS removes it -->
    <div id="loading-overlay" class="loading-overlay">
      <div class="loading-content">
        <img src="/assets/logo-grayscale.svg" alt="Open NCCU" class="loading-logo" />
        <p class="loading-text">loading</p>
      </div>
    </div>

    <ScrollTrack />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
if (import.meta.client) {
  // Remove loading overlay as soon as this script executes (JS is working)
  const removeOverlay = () => {
    const el = document.getElementById('loading-overlay')
    if (el) {
      el.style.opacity = '0'
      setTimeout(() => el.remove(), 400)
    }
  }

  // Try immediately, and also on mount as fallback
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(removeOverlay, 300)
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(removeOverlay, 300))
  }
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
  transition: opacity 0.4s ease;
}

.loading-content {
  text-align: center;
}

.loading-logo {
  width: 100px;
  height: 100px;
  padding: 8px;
  margin-bottom: 8px;
}

.loading-text {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: #aeaeb2;
}

.loading-fade-leave-active {
  transition: opacity 0.4s ease;
}

.loading-fade-leave-to {
  opacity: 0;
}
</style>
