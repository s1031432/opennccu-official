<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white">
    <div class="max-w-6xl mx-auto px-6 pt-32 pb-20 w-full relative">
      <div class="relative z-10 max-w-xl">
        <h1 class="text-6xl md:text-7xl font-light tracking-[0.15em] mb-8 text-gray-300">
          Open NCCU
        </h1>
        <p class="text-2xl text-gray-400 leading-relaxed font-light">
          政大學生設計，<br />
          設計給政大學生！
        </p>
        <div class="mt-10 flex gap-4">
          <button class="mint-btn text-base px-8 py-3">開始使用</button>
          <button class="glass-btn text-base px-8 py-3 text-gray-600">了解更多</button>
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
