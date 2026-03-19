<template>
  <nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-full px-8 py-3 flex items-center gap-10">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="/logo.png" alt="Open NCCU Logo" class="w-10 h-10 object-contain" />
    </div>

    <!-- Nav Links -->
    <div class="hidden md:flex items-center gap-10">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="transition-colors whitespace-nowrap"
        :class="link.active ? 'text-[#77e5b0]' : 'text-[#606060] hover:text-[#77e5b0]'"
        :style="{
          fontFamily: link.active ? '\'Montserrat\', \'Noto Sans TC\', sans-serif' : '\'Noto Sans TC\', sans-serif',
          fontSize: '24px',
          fontWeight: link.active ? '500' : '400',
        }"
      >
        {{ link.label }}
      </a>
    </div>

    <!-- Right Actions -->
    <div class="flex items-center gap-3 ml-4">
      <button
        class="w-10 h-10 flex items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors rounded-full hover:bg-white/40"
        aria-label="Language"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </button>
      <button
        class="w-10 h-10 flex items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors rounded-full hover:bg-white/40"
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
    </div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  { label: '產品 & 服務', href: '#products', active: true },
  { label: '合作案例', href: '#collaborate', active: false },
  { label: '關於團隊', href: '#about', active: false },
  { label: '聯絡我們', href: '#contact', active: false },
]
</script>
