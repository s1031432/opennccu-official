<template>
  <nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-full px-6 md:px-8 py-3 flex items-center gap-6 md:gap-10">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="/logo.png" alt="Open NCCU Logo" class="w-10 h-10 object-contain" />
    </div>

    <!-- Nav Links (desktop) -->
    <div class="hidden md:flex items-center gap-10">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="transition-colors whitespace-nowrap"
        :class="activeSection === link.href ? 'text-[#77e5b0]' : 'text-[#606060] hover:text-[#77e5b0]'"
        :style="{
          fontFamily: activeSection === link.href ? '\'Montserrat\', \'Noto Sans TC\', sans-serif' : '\'Noto Sans TC\', sans-serif',
          fontSize: '24px',
          fontWeight: activeSection === link.href ? '500' : '400',
        }"
      >
        {{ link.label }}
      </a>
    </div>

    <!-- Right Actions -->
    <div class="flex items-center gap-3 ml-auto md:ml-4">
      <button
        class="w-10 h-10 hidden md:flex items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors rounded-full hover:bg-white/40"
        aria-label="Language"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </button>
      <button
        class="w-10 h-10 hidden md:flex items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors rounded-full hover:bg-white/40"
        aria-label="Toggle theme"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="1" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </svg>
      </button>
      <!-- Mobile hamburger -->
      <button
        class="w-10 h-10 flex md:hidden items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors rounded-full hover:bg-white/40"
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
    </div>
  </nav>

  <!-- Mobile dropdown menu -->
  <Transition name="mobile-menu">
    <div
      v-if="mobileOpen"
      class="fixed top-20 left-1/2 -translate-x-1/2 z-40 glass-nav rounded-2xl px-8 py-6 flex flex-col gap-5 md:hidden w-[calc(100%-2rem)] max-w-sm"
    >
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="transition-colors whitespace-nowrap"
        :class="activeSection === link.href ? 'text-[#77e5b0]' : 'text-[#606060] hover:text-[#77e5b0]'"
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
