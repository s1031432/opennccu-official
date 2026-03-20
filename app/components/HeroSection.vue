<template>
  <section class="relative min-h-screen flex items-center">
    <!-- Subtle diagonal lines crossing the background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute w-[1px] bg-white/60"
        style="height: 160%; top: -20%; right: 32%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute w-[1px] bg-white/40"
        style="height: 160%; top: -20%; right: 28%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute w-[1px] bg-white/30"
        style="height: 140%; top: -10%; left: 45%; transform: rotate(25deg); transform-origin: top center;"
      />
    </div>

    <!-- Main content -->
    <div id="hero-content" class="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full relative flex items-center">
      <div class="relative z-10 max-w-xl flex-shrink-0">
        <h1
          class="text-5xl md:text-6xl font-normal tracking-wide text-[#aeaeb2] whitespace-nowrap"
          style="font-family: 'Montserrat', sans-serif;"
        >
          Open NCCU
        </h1>
        <p
          class="text-2xl md:text-3xl text-[#aeaeb2] leading-snug font-light mt-8"
          style="font-family: 'Noto Sans TC', sans-serif;"
        >
          政大學生設計，<br />
          設計給政大學生！
        </p>
        <div class="flex items-center gap-4 mt-10">
          <a
            href="#products"
            class="inline-flex items-center gap-2 bg-[#4ECBA5] text-white rounded-full px-7 py-3 text-base font-medium hover:bg-[#3AB890] hover:shadow-lg hover:shadow-mint-500/30 transition-all"
            style="font-family: 'Noto Sans TC', sans-serif;"
          >
            探索產品
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a
            href="#about"
            class="inline-flex items-center gap-2 border border-[#aeaeb2] text-[#aeaeb2] rounded-full px-7 py-3 text-base font-medium hover:border-[#4ECBA5] hover:text-[#4ECBA5] transition-all"
            style="font-family: 'Noto Sans TC', sans-serif;"
          >
            認識我們
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  scrollY: number
}>()
</script>
