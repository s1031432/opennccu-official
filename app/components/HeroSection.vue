<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-[#f0f0f0]">
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
    <div class="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full relative flex items-center">
      <!-- Left side: text -->
      <div class="relative z-10 max-w-xl flex-shrink-0">
        <h1
          class="text-7xl md:text-8xl font-normal tracking-wide text-[#aeaeb2]"
          style="font-family: 'Montserrat', sans-serif;"
        >
          Open NCCU
        </h1>
        <p
          class="text-3xl md:text-5xl text-[#aeaeb2] leading-snug font-light mt-8"
          style="font-family: 'Noto Sans TC', sans-serif;"
        >
          政大學生設計，<br />
          設計給政大學生！
        </p>
      </div>

      <!-- Right side: large decorative SVG brand mark -->
      <div
        class="hidden md:flex flex-1 justify-center items-center relative -mr-16 lg:-mr-24"
        :style="{ transform: `translateY(${scrollY * 0.05}px)` }"
      >
        <svg
          class="w-[480px] h-[480px] lg:w-[600px] lg:h-[600px]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mintGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#9ee8c8" />
              <stop offset="100%" stop-color="#b8f0d8" />
            </linearGradient>
            <linearGradient id="mintGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#b8f0d8" />
              <stop offset="100%" stop-color="#9ee8c8" />
            </linearGradient>
            <filter id="heroSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
              <feOffset dx="2" dy="4" result="offsetBlur" />
              <feComponentTransfer result="shadow">
                <feFuncA type="linear" slope="0.12" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <!-- Diamond / chevron shape -->
          <g filter="url(#heroSoftShadow)">
            <path
              d="M 260 50 L 160 195 L 260 340"
              stroke="url(#mintGrad1)"
              stroke-width="20"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
            <path
              d="M 260 50 L 360 195 L 260 340"
              stroke="url(#mintGrad1)"
              stroke-width="20"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </g>

          <!-- U-shaped curve at bottom -->
          <g filter="url(#heroSoftShadow)">
            <path
              d="M 280 340 L 280 250 Q 280 185 345 185 Q 410 185 410 250 L 410 430"
              stroke="url(#mintGrad2)"
              stroke-width="20"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </g>

          <!-- Diagonal lines crossing the design -->
          <g filter="url(#heroSoftShadow)">
            <line
              x1="130" y1="120"
              x2="420" y2="380"
              stroke="url(#mintGrad1)"
              stroke-width="14"
              stroke-linecap="round"
              opacity="0.5"
            />
            <line
              x1="180" y1="80"
              x2="440" y2="320"
              stroke="url(#mintGrad2)"
              stroke-width="10"
              stroke-linecap="round"
              opacity="0.35"
            />
          </g>

          <!-- Small circle decorations at endpoints -->
          <circle cx="260" cy="50" r="6" fill="#9ee8c8" opacity="0.8" />
          <circle cx="160" cy="195" r="5" fill="#b8f0d8" opacity="0.7" />
          <circle cx="360" cy="195" r="5" fill="#b8f0d8" opacity="0.7" />
          <circle cx="410" cy="430" r="6" fill="#9ee8c8" opacity="0.8" />
          <circle cx="130" cy="120" r="4" fill="#b8f0d8" opacity="0.6" />
          <circle cx="420" cy="380" r="4" fill="#b8f0d8" opacity="0.6" />

          <!-- Highlight overlays for depth -->
          <path
            d="M 260 50 L 160 195 L 260 340"
            stroke="white"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            opacity="0.2"
            style="transform: translate(-2px, -2px);"
          />
          <path
            d="M 260 50 L 360 195 L 260 340"
            stroke="white"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            opacity="0.2"
            style="transform: translate(-2px, -2px);"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  scrollY: number
}>()
</script>
