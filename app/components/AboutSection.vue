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

      <!-- Timeline card -->
      <div class="mb-24">
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

      <!-- Z-shape photo layout with connecting lines -->
      <div class="relative">
        <!-- SVG connecting lines -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line x1="45%" y1="12%" x2="55%" y2="30%" stroke="#d9d9d9" stroke-width="1.5" />
          <line x1="55%" y1="42%" x2="30%" y2="55%" stroke="#d9d9d9" stroke-width="1.5" />
          <line x1="30%" y1="67%" x2="60%" y2="78%" stroke="#d9d9d9" stroke-width="1.5" />
          <line x1="60%" y1="88%" x2="25%" y2="98%" stroke="#d9d9d9" stroke-width="1.5" />
        </svg>

        <!-- Photo 1 - center-right -->
        <div class="flex justify-end pr-12 mb-16">
          <div class="w-[420px] h-[260px] bg-[#d9d9d9] rounded-2xl shadow-sm" />
        </div>
        <!-- Photo 2 - left -->
        <div class="flex justify-start pl-8 mb-16">
          <div class="w-[380px] h-[280px] bg-[#d9d9d9] rounded-2xl shadow-sm" />
        </div>
        <!-- Photo 3 - center-right -->
        <div class="flex justify-end pr-8 mb-16">
          <div class="w-[400px] h-[260px] bg-[#d9d9d9] rounded-2xl shadow-sm" />
        </div>
        <!-- Photo 4 - left -->
        <div class="flex justify-start pl-12">
          <div class="w-[360px] h-[280px] bg-[#d9d9d9] rounded-2xl shadow-sm" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
