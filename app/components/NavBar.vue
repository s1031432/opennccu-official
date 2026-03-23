<template>
  <div class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8">
    <!-- Main nav pill -->
    <nav class="glass-nav rounded-full px-10 md:px-20 py-6 flex items-center gap-10 md:gap-[68px]">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/logo.png" alt="Open NCCU Logo" class="w-[43px] h-[45px] object-contain" />
      </div>

      <!-- Nav Links (desktop) -->
      <template v-for="link in navLinks" :key="link.label">
        <a
          :href="link.href"
          class="hidden md:flex transition-colors whitespace-nowrap"
          :class="activeSection === link.href ? 'text-[#77e6b0]' : 'text-[#616161] hover:text-[#77e6b0]'"
          :style="{
            fontFamily: activeSection === link.href && link.label === '產品 & 服務' ? '\'Montserrat\', sans-serif' : '\'Noto Sans TC\', sans-serif',
            fontSize: '24px',
            fontWeight: activeSection === link.href ? '500' : '400',
          }"
        >
          <template v-if="link.label === '產品 & 服務' && activeSection === link.href">
            <span style="font-family: 'Noto Sans TC', sans-serif;">產品</span>
            <span style="font-family: 'Montserrat', sans-serif;"> &amp; </span>
            <span style="font-family: 'Noto Sans TC', sans-serif;">服務</span>
          </template>
          <template v-else>
            {{ link.label }}
          </template>
        </a>
      </template>

      <!-- Mobile hamburger (inside main pill) -->
      <button
        class="w-10 h-10 flex md:hidden items-center justify-center text-[#616161] hover:text-[#4ECBA5] transition-colors rounded-full hover:bg-white/40 ml-auto"
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
    <div class="hidden md:flex glass-nav rounded-full px-[60px] py-6 items-center gap-12">
      <button
        class="flex items-center justify-center text-[#616161] hover:text-[#4ECBA5] transition-colors"
        aria-label="Language"
      >
        <Icon icon="ri:global-line" width="36" height="36" />
      </button>
      <button
        class="flex items-center justify-center text-[#616161] hover:text-[#4ECBA5] transition-colors"
        aria-label="Toggle theme"
      >
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
        :class="activeSection === link.href ? 'text-[#77e6b0]' : 'text-[#616161] hover:text-[#77e6b0]'"
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
  { label: '產品 & 服務', href: '#products' },
  { label: '合作案例', href: '#collaborate' },
  { label: '關於團隊', href: '#about' },
  { label: '聯絡我們', href: '#contact' },
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
