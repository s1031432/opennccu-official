<template>
  <section class="relative min-h-screen">

    <!-- Brand decorative geometric lines (right side) — hidden on mobile -->
    <HeroBrandDecoration class="hidden md:block" />

    <!-- Main content — Figma API: text at y=570 within 1440px frame = 38% from top, x=173 on 1920px = 9% from left -->
    <div id="hero-content" class="relative w-full h-screen flex items-center px-6 md:px-0" style="padding-top: 0;">
      <div class="relative z-10 max-w-xl flex-shrink-0 md:ml-[9%]" style="margin-top: -12vh;">
        <!-- Figma API: Montserrat 80px w400 ls=9.6 lh=97.5 #aeaeb2 — DO NOT change positioning -->
        <h1
          class="font-normal text-[#aeaeb2]"
          style="font-family: 'Montserrat', sans-serif; font-size: clamp(36px, 6vw, 80px); font-weight: 400; letter-spacing: clamp(3px, 0.5vw, 9.6px); line-height: clamp(44px, 7.5vw, 97.5px);"
        >
          Open NCCU
        </h1>
        <!-- Figma API: Noto Sans TC 48px w300 ls=3.84 lh=69.5 #aeaeb2, gap from title = 61px -->
        <p
          class="text-[#aeaeb2] mt-8 md:mt-[61px]"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; letter-spacing: clamp(1.5px, 0.3vw, 3.84px); line-height: clamp(36px, 5.5vw, 69.5px);"
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
