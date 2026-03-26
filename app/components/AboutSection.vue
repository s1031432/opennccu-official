<template>
  <!-- Figma API: About frame y=5090, title at y=5195. Top padding = 105px -->
  <section id="about" class="relative pt-[105px] pb-24 overflow-hidden">
    <!-- Decorative curve removed — now handled by BackgroundCurve -->

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Title — Figma API: y=5195, h=96. Description at y=5389. Gap = 98px -->
      <h2
        class="text-center mb-[98px]"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(36px, 6vw, 80px); font-weight: 300; color: #616161; letter-spacing: clamp(3px, 0.5vw, 9.6px); line-height: 96px;"
      >
        我們是誰？
      </h2>

      <!-- Description — Figma API: x=140 w=1609 on 1920px canvas = nearly full width, NOT centered narrow block -->
      <!-- Figma API: 28px/weight300/#606060/ls1.12/lineHeight50px — DO NOT SHRINK below 28px -->
      <!-- Figma API: description bottom y=5489, first photo y=5661 → gap=172px. NO separator line in Figma -->
      <div class="mb-[172px]" style="max-width: 1609px; margin-left: auto; margin-right: auto; padding-left: 8px; padding-right: 8px;">
        <p
          style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(16px, 2.5vw, 28px); font-weight: 300; color: #616161; letter-spacing: 1.12px; line-height: 50px;"
        >
          我們是 <span style="font-family: 'Montserrat', sans-serif; font-weight: 300;">OpenNCCU</span>，一群熱愛開發和設計的政大學生所發起的非營利組織！
          我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源，期許為校園數位化創造更多可能。
        </p>
      </div>

      <!-- Timeline with zigzag connecting lines per Figma -->
      <div class="relative">
        <!-- Zigzag connecting lines (desktop only) — Figma shows thin straight diagonal lines connecting each timeline entry to the next -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" preserveAspectRatio="none">
          <line v-for="i in timelineItems.length - 1" :key="'line-'+i"
            :x1="i % 2 === 1 ? '25%' : '75%'"
            :y1="((i - 0.3) / timelineItems.length * 100) + '%'"
            :x2="i % 2 === 1 ? '75%' : '25%'"
            :y2="((i + 0.3) / timelineItems.length * 100) + '%'"
            stroke="#d9d9d9"
            stroke-width="1.5"
          />
        </svg>

        <div
          v-for="(item, idx) in timelineItems"
          :key="item.year"
          class="mb-20 relative z-10"
        >
          <div
            class="flex flex-col lg:flex-row items-start gap-8"
            :class="idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Text content — Figma API: NO card/box around timeline text. Plain text at x=183, left-aligned -->
            <div class="lg:w-1/2" :class="idx % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'">
              <div class="py-4 lg:py-6">
                <h3
                  class="mb-4"
                  style="font-family: 'Montserrat', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #616161; letter-spacing: 3.84px; line-height: 58.5px;"
                >
                  {{ item.year }}
                </h3>
                <p
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 300; color: #616161; letter-spacing: 0.96px; line-height: 36px;"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
            <!-- Image -->
            <div class="lg:w-1/2" :class="idx % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'">
              <!-- Figma API: photo rectangles cr=50 — DO NOT SHRINK below 50px -->
              <!-- Figma API: photo rectangles 547×355px, cr=50, fill #D9D9D9 (solid, rgb 0.851) -->
              <div class="w-full h-[355px] rounded-[50px] overflow-hidden" :class="item.photo ? '' : 'bg-[#d9d9d9] flex items-center justify-center'">
                <img
                  v-if="item.photo"
                  :src="item.photo"
                  :alt="item.photoLabel"
                  class="w-full h-full object-cover"
                />
                <div v-else class="text-center">
                  <svg class="w-12 h-12 mx-auto mb-3 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span class="text-white/60" style="font-family: 'Noto Sans TC', sans-serif; font-size: 14px;">
                    {{ item.photoLabel }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const timelineItems = [
  {
    year: '2020',
    description: 'OpenNCCU，一群熱愛開發和設計的政大學生所發起的非營利組織！我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源。',
    photoLabel: '創始團隊合照',
    photo: '/assets/team-xmas.jpg',
  },
  {
    year: '2022',
    description: '推出第一款正式產品「政大課表」，整合校務系統選課資料，提供直覺化的課程查詢與排課體驗，累計千人使用。',
    photoLabel: '產品發表活動',
    photo: '/assets/team-classroom.jpg',
  },
  {
    year: '2024',
    description: '「政大吃什麼」正式上線，幫助政大學生解決每天的用餐選擇困難，整合校園周邊餐廳資訊，提供隨機推薦與評價功能。',
    photoLabel: '團隊工作坊',
    photo: '/assets/team-fun.jpg',
  },
  {
    year: '2025',
    description: '與職涯中心合作推出徵才月數位集點工具，當日活躍使用者突破 3,500 人，獲得校方肯定與更多合作機會。',
    photoLabel: '徵才月活動現場',
    photo: '/assets/team-outdoor.jpg',
  },
  {
    year: '2026',
    description: '全新官網改版上線，籌備更多校園數位服務。我們相信每一個小工具，都能為政大人的校園生活帶來改變。',
    photoLabel: '新版官網設計稿',
    photo: '/assets/team-2026.jpg',
  },
]
</script>

<style scoped>
/* Figma API: NO card/box around timeline text — plain text, no background, no shadow, no border */
</style>
