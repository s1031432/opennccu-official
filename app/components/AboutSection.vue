<template>
  <section id="about" class="relative py-24 bg-[#f0f0f0] overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Title -->
      <h2
        class="text-5xl md:text-7xl font-light text-[#606060] text-center mb-10"
        style="font-family: 'Noto Sans TC', sans-serif;"
      >
        我們是誰？
      </h2>

      <!-- Description -->
      <div class="text-center max-w-4xl mx-auto mb-20">
        <p
          class="text-xl md:text-2xl font-light text-[#606060] leading-relaxed mb-4"
          style="font-family: 'Noto Sans TC', sans-serif;"
        >
          我們是 OpenNCCU，一群熱愛開發和設計的政大學生所發起的非營利組織！
        </p>
        <p
          class="text-xl md:text-2xl font-light text-[#606060] leading-relaxed"
          style="font-family: 'Noto Sans TC', sans-serif;"
        >
          我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源，期許為校園數位化創造更多可能。
        </p>
      </div>

      <!-- Timeline card -->
      <div class="flex flex-col lg:flex-row gap-12 mb-20">
        <div class="lg:w-1/2">
          <div class="glass-card p-8 max-w-md">
            <h3
              class="text-4xl md:text-5xl font-light text-[#606060] mb-4"
              style="font-family: 'Montserrat', sans-serif;"
            >
              2020
            </h3>
            <p
              class="text-lg text-[#aeaeb2] font-light leading-relaxed"
              style="font-family: 'Noto Sans TC', sans-serif;"
            >
              Open NCCU 成立於 2020 年，由一群對校園數位化充滿熱情的政大學生共同發起，致力於為政大師生打造更好的數位體驗。
            </p>
          </div>
        </div>
      </div>

      <!-- Rounded rectangle placeholders in zigzag layout -->
      <div class="relative space-y-8">
        <!-- Row 1 - left aligned -->
        <div class="flex justify-start">
          <div class="w-72 h-44 bg-[#d9d9d9] rounded-2xl" />
        </div>
        <!-- Row 2 - right aligned -->
        <div class="flex justify-end">
          <div class="w-80 h-48 bg-[#d9d9d9] rounded-2xl" />
        </div>
        <!-- Row 3 - left aligned, offset -->
        <div class="flex justify-start pl-16">
          <div class="w-64 h-40 bg-[#d9d9d9] rounded-2xl" />
        </div>
        <!-- Row 4 - right aligned, offset -->
        <div class="flex justify-end pr-12">
          <div class="w-72 h-44 bg-[#d9d9d9] rounded-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
