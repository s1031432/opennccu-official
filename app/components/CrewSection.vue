<template>
  <section class="relative py-24 bg-[#f0f0f0] overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Top area: title + decorative elements -->
      <div class="flex flex-col lg:flex-row items-start gap-12 mb-20">
        <!-- Left side: title + decorative SVG curve -->
        <div class="lg:w-1/2 relative">
          <h2
            class="text-5xl md:text-7xl font-light text-[#606060] mb-12"
            style="font-family: 'Noto Sans TC', sans-serif;"
          >
            團隊成員
          </h2>

          <!-- Decorative mint green curved line -->
          <svg
            class="w-64 h-64 -ml-8"
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 30 220 Q 30 30 130 30 Q 230 30 230 130"
              stroke="#9ee8c8"
              stroke-width="16"
              stroke-linecap="round"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M 60 220 Q 60 70 140 70 Q 210 70 210 150"
              stroke="#b8f0d8"
              stroke-width="10"
              stroke-linecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>

          <!-- JOIN US! circular element -->
          <div class="mt-8 inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-[#4ECBA5] text-[#4ECBA5]">
            <span
              class="text-xl font-semibold tracking-wide"
              style="font-family: 'Montserrat', sans-serif;"
            >
              JOIN US!
            </span>
          </div>
        </div>

        <!-- Right side: stack of glass cards -->
        <div class="lg:w-1/2 flex flex-col gap-4">
          <div
            v-for="i in 3"
            :key="i"
            class="glass-card px-8 py-6"
            :style="{ transform: `translateX(${(i - 1) * 12}px)` }"
          >
            <span
              class="text-2xl font-light text-[#aeaeb2] tracking-widest"
              style="font-family: 'Montserrat', sans-serif;"
            >
              OPEN NCCU
            </span>
          </div>
        </div>
      </div>

      <!-- Team role cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="role in teamRoles"
          :key="role.name"
          class="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-lg transition-all"
        >
          <h3
            class="text-3xl md:text-4xl font-light text-[#606060] mb-3"
            style="font-family: 'Montserrat', sans-serif;"
          >
            {{ role.name }}
          </h3>
          <p
            class="text-lg md:text-xl text-[#aeaeb2] font-light leading-relaxed"
            style="font-family: 'Noto Sans TC', sans-serif;"
          >
            {{ role.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamRoles = [
  { name: 'LEAD', description: '組織領導者，統籌所有團隊運作與策略方向' },
  { name: 'PM', description: '專案經理，負責專案規劃、進度管理與協調溝通' },
  { name: 'Product Team', description: '產品團隊，從使用者需求出發，規劃與設計產品功能' },
  { name: 'UI', description: '介面設計師，打造美觀且易用的使用者介面' },
  { name: 'BE', description: '後端工程師，建構穩定可靠的系統架構與 API' },
  { name: 'Insight Team', description: '洞察團隊，透過數據分析與使用者研究驅動產品決策' },
  { name: 'MKT', description: '行銷團隊，負責品牌推廣、社群經營與內容產出' },
]
</script>
