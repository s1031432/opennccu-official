<template>
  <div class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 md:gap-[32px]">
    <!-- Main nav pill -->
    <!-- Figma API: Tap Bar pad=T24/R80/B24/L80, gap=68, cr=333 — DO NOT SHRINK -->
    <nav class="glass-nav rounded-full px-10 md:px-20 py-4 md:py-6 flex items-center gap-4 md:gap-[68px]">
      <!-- Logo -->
      <div class="flex items-center">
        <!-- Figma spec: 43x45px logo — DO NOT SHRINK -->
        <img src="/assets/logo-main.png" alt="Open NCCU Logo" class="w-[43px] h-[45px] object-contain" />
      </div>

      <!-- Nav Links (desktop) -->
      <template v-for="link in navLinks" :key="link.label">
        <!-- Figma API: active="產品 & 服務" uses Montserrat 24px/500/#77e5b0, others use Noto Sans TC 24px/400/#606060 -->
        <a
          :href="link.href"
          class="hidden md:flex transition-colors whitespace-nowrap"
          :class="activeSection === link.href ? 'text-[#77e6b0]' : 'text-[#606060] hover:text-[#77e6b0]'"
          :style="{
            fontFamily: link.font === 'Montserrat' ? '\'Montserrat\', sans-serif' : '\'Noto Sans TC\', sans-serif',
            fontSize: '24px', /* Figma spec: 24px — DO NOT SHRINK */
            fontWeight: activeSection === link.href ? '500' : '400',
          }"
        >
          {{ link.label }}
        </a>
      </template>

      <!-- Mobile hamburger (inside main pill) -->
      <button
        class="w-10 h-10 flex md:hidden items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors rounded-full hover:bg-white/40 ml-auto"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
    </nav>

    <!-- Utility pill (desktop only) -->
    <!-- Figma API: Tap Bar (utility) pad=T24/R60/B24/L60, gap=48, cr=333 — DO NOT SHRINK -->
    <div class="hidden md:flex glass-nav rounded-full px-[60px] py-6 items-center gap-[48px]">
      <button
        class="flex items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors"
        aria-label="Language"
      >
        <!-- Figma spec: 36px icons — DO NOT SHRINK -->
        <Icon icon="ri:global-line" width="36" height="36" />
      </button>
      <button
        class="flex items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors"
        aria-label="Toggle theme"
      >
        <!-- Figma spec: 36px icons — DO NOT SHRINK -->
        <Icon icon="ci:sun" width="36" height="36" />
      </button>
    </div>
  </div>

  <!-- Mobile dropdown menu -->
  <Transition name="mobile-menu">
    <div
      v-if="mobileOpen"
      class="fixed top-24 left-1/2 -translate-x-1/2 z-40 glass-nav rounded-2xl px-8 py-6 flex flex-col gap-5 md:hidden w-[calc(100%-2rem)] max-w-sm"
    >
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="transition-colors whitespace-nowrap"
        :class="activeSection === link.href ? 'text-[#77e6b0]' : 'text-[#606060] hover:text-[#77e6b0]'"
        :style="{
          fontFamily: '\'Noto Sans TC\', sans-serif',
          fontSize: '20px',
          fontWeight: activeSection === link.href ? '500' : '400',
        }"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </a>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const mobileOpen = ref(false)
const activeSection = ref('#products')

const navLinks = [
  { label: '產品 & 服務', href: '#products', font: 'Montserrat' },
  { label: '合作案例', href: '#collaborate', font: 'Noto Sans TC' },
  { label: '關於團隊', href: '#about', font: 'Noto Sans TC' },
  { label: '聯絡我們', href: '#contact', font: 'Noto Sans TC' },
]

function updateActiveSection() {
  const sections = navLinks.map(l => l.href.slice(1))
  const scrollPos = window.scrollY + window.innerHeight / 3

  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.offsetTop <= scrollPos) {
      activeSection.value = `#${sections[i]}`
      return
    }
  }
  activeSection.value = '#products'
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translate(-50%, -8px);
}
</style>
