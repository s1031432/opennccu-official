<template>
  <section id="about" class="relative py-24 overflow-hidden">
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

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical timeline line -->
        <div class="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#d9d9d9] hidden lg:block"></div>

        <div
          v-for="(item, idx) in timelineItems"
          :key="item.year"
          class="mb-20 relative z-10"
        >
          <div
            class="flex flex-col lg:flex-row items-start gap-8"
            :class="idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Timeline card -->
            <div class="lg:w-1/2" :class="idx % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'">
              <div class="bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3
                  class="mb-4"
                  style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 300; color: #4ECBA5;"
                >
                  {{ item.year }}
                </h3>
                <h4
                  class="mb-3"
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 500; color: #606060;"
                >
                  {{ item.title }}
                </h4>
                <p
                  class="leading-relaxed"
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 18px; font-weight: 300; color: #aeaeb2;"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
            <!-- Photo placeholder -->
            <div class="lg:w-1/2" :class="idx % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'">
              <div class="w-full h-[240px] bg-[#d9d9d9]/60 rounded-2xl shadow-sm flex items-center justify-center overflow-hidden">
                <div class="text-center">
                  <svg class="w-12 h-12 mx-auto mb-3 text-[#aeaeb2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span
                    class="text-[#aeaeb2]"
                    style="font-family: 'Noto Sans TC', sans-serif; font-size: 14px;"
                  >{{ item.photoLabel }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline dot (desktop only) -->
          <div class="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-[#4ECBA5] border-4 border-[#f0f0f0]"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const timelineItems = [
  {
    year: '2020',
    title: '草創時期',
    description: '一群熱愛開發和設計的政大學生發起 OpenNCCU，從優化校園數位體驗出發，打造專屬政大的數位工具並推廣開放資源。',
    photoLabel: '創始團隊合照',
  },
  {
    year: '2022',
    title: '產品成形',
    description: '推出第一款正式產品「政大課表」，整合校務系統選課資料，提供直覺化的課程查詢與排課體驗，累計千人使用。',
    photoLabel: '產品發表活動',
  },
  {
    year: '2024',
    title: '服務拓展',
    description: '「政大吃什麼」上線，運用校園周邊餐廳資料幫助學生解決每日用餐選擇困難。同年團隊擴展至 20 人規模。',
    photoLabel: '團隊工作坊',
  },
  {
    year: '2025',
    title: '校園合作深化',
    description: '與職涯中心合作推出徵才月數位集點工具，當日活躍使用者突破 3,500 人，獲得校方肯定與更多合作機會。',
    photoLabel: '徵才月活動現場',
  },
  {
    year: '2026',
    title: '持續前行',
    description: '全新官網改版上線，籌備更多校園數位服務。我們相信每一個小工具，都能為政大人的校園生活帶來改變。',
    photoLabel: '新版官網設計稿',
  },
]
</script>
