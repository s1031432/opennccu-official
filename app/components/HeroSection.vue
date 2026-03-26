<template>
  <section class="relative min-h-screen flex items-center">
    <!-- Brand decorative geometric lines (right side) — hidden on mobile -->
    <HeroBrandDecoration class="hidden md:block" />

    <!-- Main content -->
    <div id="hero-content" class="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-20 w-full relative flex items-center">
      <div class="relative z-10 max-w-xl flex-shrink-0">
        <h1
          class="font-normal text-[#aeaeb2]"
          style="font-family: 'Montserrat', sans-serif; font-size: clamp(36px, 6vw, 80px); font-weight: 400; letter-spacing: clamp(3px, 0.5vw, 9.6px);"
        >
          Open NCCU
        </h1>
        <p
          class="text-[#aeaeb2] mt-8 md:mt-[61px]"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; letter-spacing: clamp(1.5px, 0.3vw, 3.84px); line-height: 1.45;"
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
