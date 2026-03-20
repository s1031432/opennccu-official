<template>
  <section id="about" class="relative py-24 bg-[#f0f0f0] overflow-hidden">
    <!-- Subtle diagonal decorative lines -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute w-[1px] bg-white/40"
        style="height: 200%; top: -30%; left: 30%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute w-[1px] bg-white/30"
        style="height: 200%; top: -20%; right: 35%; transform: rotate(-32deg); transform-origin: top center;"
      />
    </div>

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Title -->
      <h2
        class="text-center mb-10"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060;"
      >
        我們是誰？
      </h2>

      <!-- Description -->
      <div class="text-center max-w-4xl mx-auto mb-24">
        <p
          class="leading-relaxed mb-3"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 300; color: #606060;"
        >
          我們是 OpenNCCU，一群熱愛開發和設計的政大學生所發起的非營利組織！
        </p>
        <p
          class="leading-relaxed"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 300; color: #606060;"
        >
          我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源，期許為校園數位化創造更多可能。
        </p>
      </div>

      <!-- Separator line -->
      <div class="w-full h-[1px] bg-[#d9d9d9] mb-24"></div>

      <!-- Timeline + Z-shape photo layout with organic flowing curves -->
      <div class="relative">
        <!-- Organic flowing connecting curves (SVG ribbons) -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1100 1600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Main flowing ribbon curve from timeline card through photos -->
          <path
            d="M 200 120 C 350 180, 500 200, 650 180 C 800 160, 850 250, 750 340 C 650 430, 350 400, 250 500 C 150 600, 300 680, 500 660 C 700 640, 850 700, 800 820 C 750 940, 400 900, 300 1000 C 200 1100, 450 1200, 600 1180 C 750 1160, 850 1300, 700 1400"
            stroke="#d9d9d9"
            stroke-width="1.5"
            stroke-opacity="0.6"
          />
          <!-- Secondary thinner curve -->
          <path
            d="M 250 100 C 400 160, 550 180, 700 160 C 850 140, 900 230, 800 320 C 700 410, 400 380, 300 480 C 200 580, 350 660, 550 640 C 750 620, 900 680, 850 800"
            stroke="#e2e2e2"
            stroke-width="0.8"
            stroke-opacity="0.5"
          />
        </svg>

        <!-- Timeline card -->
        <div class="mb-28 relative z-10">
          <div class="max-w-md">
            <div class="bg-[#d9d9d9]/40 backdrop-blur-sm rounded-2xl p-8">
              <h3
                class="mb-4"
                style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 300; color: #606060;"
              >
                2020
              </h3>
              <p
                class="leading-relaxed mb-3"
                style="font-family: 'Noto Sans TC', sans-serif; font-size: 20px; font-weight: 300; color: #606060;"
              >
                OpenNCCU，一群熱愛開發和設計的政大學生所發起的非營利組織！
              </p>
              <p
                class="leading-relaxed"
                style="font-family: 'Noto Sans TC', sans-serif; font-size: 20px; font-weight: 300; color: #606060;"
              >
                我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源。
              </p>
            </div>
          </div>
        </div>

        <!-- Z-shape photo layout -->
        <!-- Photo 1 - right aligned -->
        <div class="flex justify-end pr-12 mb-20 relative z-10">
          <div class="w-[420px] h-[260px] bg-[#d9d9d9] rounded-2xl shadow-sm" />
        </div>
        <!-- Photo 2 - left aligned -->
        <div class="flex justify-start pl-8 mb-20 relative z-10">
          <div class="w-[380px] h-[280px] bg-[#d9d9d9] rounded-2xl shadow-sm" />
        </div>
        <!-- Photo 3 - right aligned -->
        <div class="flex justify-end pr-8 mb-20 relative z-10">
          <div class="w-[400px] h-[260px] bg-[#d9d9d9] rounded-2xl shadow-sm" />
        </div>
        <!-- Photo 4 - left aligned -->
        <div class="flex justify-start pl-12 relative z-10">
          <div class="w-[360px] h-[280px] bg-[#d9d9d9] rounded-2xl shadow-sm" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
