<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-3">
    <div class="max-w-6xl mx-auto">
      <div class="glass-nav rounded-2xl px-6 py-3 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="Open NCCU Logo" class="w-8 h-8 object-contain" />
        </div>

        <!-- Nav Links -->
        <div class="hidden md:flex items-center gap-1">
          <a v-for="link in navLinks" :key="link.label" :href="link.href"
            class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
            :class="link.active ? 'text-[#4ECBA5]' : 'text-gray-600 hover:text-[#4ECBA5] hover:bg-mint-50'">
            {{ link.label }}
          </a>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-3">
          <button class="w-8 h-8 rounded-full glass-btn flex items-center justify-center text-gray-500 hover:text-[#4ECBA5] !px-0 !py-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </button>
          <button class="w-8 h-8 rounded-full glass-btn flex items-center justify-center text-gray-500 hover:text-[#4ECBA5] !px-0 !py-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M2 12h2M20 12h2M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41"/>
            </svg>
          </button>
        </div>
      </div>
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
