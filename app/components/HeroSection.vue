<template>
  <section class="relative min-h-screen flex items-center">
    <!-- Brand decorative geometric lines (right side) — per Figma -->
    <HeroBrandDecoration />

    <!-- Main content -->
    <div id="hero-content" class="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full relative flex items-center">
      <div class="relative z-10 max-w-xl flex-shrink-0">
        <h1
          class="font-normal text-[#aeaeb2] whitespace-nowrap"
          style="font-family: 'Montserrat', sans-serif; font-size: 80px; font-weight: 400; letter-spacing: 9.6px;"
        >
          Open NCCU
        </h1>
        <!-- Figma API: subtitle 48px weight300 letterSpacing 3.84px color #aeaeb2 — DO NOT SHRINK below 48px -->
        <p
          class="text-[#aeaeb2] mt-6"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 48px; font-weight: 300; letter-spacing: 3.84px; line-height: 69.5px;"
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
