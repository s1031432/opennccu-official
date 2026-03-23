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
          class="font-normal tracking-wide text-[#aeaeb2] whitespace-nowrap"
          style="font-family: 'Montserrat', sans-serif; font-size: 80px; font-weight: 400;"
        >
          Open NCCU
        </h1>
        <p
          class="text-[#aeaeb2] leading-snug mt-8"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 48px; font-weight: 300;"
        >
          政大學生設計，<br />
          設計給政大學生！
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  scrollY: number
}>()
</script>
