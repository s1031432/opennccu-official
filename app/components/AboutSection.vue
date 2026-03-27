<template>
  <!-- Figma API: About frame y=5090, title at y=5195. Top padding = 105px -->
  <section id="about" class="relative pt-[105px] pb-24 overflow-hidden">
    <!-- Decorative curve removed — now handled by BackgroundCurve -->

    <div class="relative px-6">
      <!-- Title — Figma API: y=5195, h=96. Description at y=5389. Gap = 98px -->
      <h2
        class="text-center mb-[40px] md:mb-[98px] max-w-6xl mx-auto"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(36px, 6vw, 80px); font-weight: 300; color: #616161; letter-spacing: clamp(3px, 0.5vw, 9.6px); line-height: clamp(44px, 7.5vw, 96px);"
      >
        我們是誰？
      </h2>

      <!-- Description — Figma API: x=140 w=1609 on 1920px canvas = nearly full width, NOT centered narrow block -->
      <!-- Figma API: 28px/weight300/#606060/ls1.12/lineHeight50px — DO NOT SHRINK below 28px -->
      <!-- Figma API: description bottom y=5489, first photo y=5661 → gap=172px. NO separator line in Figma -->
      <div class="mb-[80px] md:mb-[172px]" style="max-width: 1609px; margin-left: auto; margin-right: auto; padding-left: 8px; padding-right: 8px;">
        <p
          style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(16px, 2.5vw, 28px); font-weight: 300; color: #616161; letter-spacing: 1.12px; line-height: clamp(28px, 4vw, 50px);"
        >
          我們是 <span style="font-family: 'Montserrat', sans-serif; font-weight: 300;">OpenNCCU</span>，一群熱愛開發和設計的政大學生所發起的非營利組織！
          我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源，期許為校園數位化創造更多可能。
        </p>
      </div>

      <!-- Timeline with zigzag photos per Figma API -->
      <!-- Figma: Photos zigzag L/R/L/R/L. Text at x=183 for first entry (overlays photo 1). -->
      <!-- For entries where photo is LEFT, text moves to RIGHT to avoid overlap. -->
      <div class="relative">
        <!-- Zigzag connecting curves (desktop only) — Figma shows curved decorative lines between photos -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" preserveAspectRatio="none">
          <path v-for="i in timelineItems.length - 1" :key="'curve-'+i"
            :d="getCurvePath(i - 1, i, timelineItems.length)"
            fill="none"
            stroke="#d9d9d9"
            stroke-width="1.5"
          />
        </svg>

        <div
          v-for="(item, idx) in timelineItems"
          :key="item.year"
          class="relative z-10"
          :class="idx < timelineItems.length - 1 ? 'mb-[90px] lg:mb-[90px]' : ''"
        >
          <!-- Desktop layout: text position depends on photo side to avoid overlap -->
          <div class="hidden lg:block relative" :style="{ minHeight: '355px' }">
            <!-- Text — First entry: Figma x=183 (overlays photo). Others: opposite side of photo -->
            <!-- Figma: First entry text intentionally overlays photo 1. z-20 ensures readability -->
            <!-- Semi-transparent bg on first entry for readability over photo -->
            <div
              class="absolute z-20"
              :class="idx === 0 ? 'about-text-overlay rounded-[16px] px-4 py-3' : ''"
              :style="{
                left: idx === 0 ? '9.5%' : (item.photoSide === 'left' ? '55%' : '9.5%'),
                width: '449px',
                top: '42px',
              }"
            >
              <h3
                class="mb-4"
                style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 300; color: #616161; letter-spacing: 3.84px; line-height: 58.5px;"
              >
                {{ item.year }}
              </h3>
              <p
                style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 300; color: #616161; letter-spacing: 0.96px; line-height: 36px;"
              >
                {{ item.description }}
              </p>
            </div>
            <!-- Photo — Figma: 547×355, cr=50, alternates L(~7%)/R(~55-66%) -->
            <!-- z-10 so text (z-20) renders above photo for first entry overlay -->
            <div
              class="absolute z-10"
              :style="{
                left: item.photoLeft,
                width: '547px',
                height: '355px',
              }"
            >
              <div class="w-full h-full rounded-[50px] overflow-hidden" :class="item.photo ? '' : 'bg-[#d9d9d9] flex items-center justify-center'">
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

          <!-- Mobile layout: stacked vertically -->
          <div class="lg:hidden flex flex-col gap-4">
            <div class="px-2">
              <h3
                class="mb-2"
                style="font-family: 'Montserrat', sans-serif; font-size: clamp(24px, 6vw, 48px); font-weight: 300; color: #616161; letter-spacing: 3.84px; line-height: 58.5px;"
              >
                {{ item.year }}
              </h3>
              <p
                style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(16px, 3.5vw, 24px); font-weight: 300; color: #616161; letter-spacing: 0.96px; line-height: 36px;"
              >
                {{ item.description }}
              </p>
            </div>
            <div class="w-full aspect-[547/355] rounded-[30px] overflow-hidden" :class="item.photo ? '' : 'bg-[#d9d9d9] flex items-center justify-center'">
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
  </section>
</template>

<script setup lang="ts">
// Generate curved SVG paths between zigzag photo positions
function getCurvePath(fromIdx: number, toIdx: number, total: number) {
  const fromItem = timelineItems[fromIdx]
  const toItem = timelineItems[toIdx]
  // Calculate center positions of photos
  const fromX = fromItem.photoSide === 'left' ? 20 : 70
  const toX = toItem.photoSide === 'left' ? 20 : 70
  const fromY = ((fromIdx + 0.7) / total) * 100
  const toY = ((toIdx + 0.3) / total) * 100
  const midY = (fromY + toY) / 2
  // Bezier curve connecting photo centers
  return `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`
}

// Figma API positions: Photos zigzag L/R/L/R/L
// Photo 1: x=134 (7.0%) LEFT, Photo 2: x=1060 (55.2%) RIGHT
// Photo 3: x=164 (8.5%) LEFT, Photo 4: x=1267 (66.0%) RIGHT
// Photo 5: x=150 (7.8%) LEFT
const timelineItems = [
  {
    year: '2020',
    description: 'OpenNCCU，一群熱愛開發和設計的政大學生所發起的非營利組織！我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源。',
    photoLabel: '創始團隊合照',
    photo: '/assets/team-xmas.jpg',
    photoSide: 'left' as const,
    photoLeft: '7%',
  },
  {
    year: '2022',
    description: '推出第一款正式產品「政大課表」，整合校務系統選課資料，提供直覺化的課程查詢與排課體驗，累計千人使用。',
    photoLabel: '產品發表活動',
    photo: '/assets/team-classroom.jpg',
    photoSide: 'right' as const,
    photoLeft: '55.2%',
  },
  {
    year: '2024',
    description: '「政大吃什麼」正式上線，幫助政大學生解決每天的用餐選擇困難，整合校園周邊餐廳資訊，提供隨機推薦與評價功能。',
    photoLabel: '團隊工作坊',
    photo: '/assets/team-fun.jpg',
    photoSide: 'left' as const,
    photoLeft: '8.5%',
  },
  {
    year: '2025',
    description: '與職涯中心合作推出徵才月數位集點工具，當日活躍使用者突破 3,500 人，獲得校方肯定與更多合作機會。',
    photoLabel: '徵才月活動現場',
    photo: '/assets/team-outdoor.jpg',
    photoSide: 'right' as const,
    photoLeft: '66%',
  },
  {
    year: '2026',
    description: '全新官網改版上線，籌備更多校園數位服務。我們相信每一個小工具，都能為政大人的校園生活帶來改變。',
    photoLabel: '新版官網設計稿',
    photo: '/assets/team-2026.jpg',
    photoSide: 'left' as const,
    photoLeft: '7.8%',
  },
]
</script>

<style scoped>
/* Figma API: NO card/box around timeline text — plain text, no background, no shadow, no border */
/* Exception: first entry overlays photo, needs subtle frosted bg for readability */
.about-text-overlay {
  background: rgba(240, 240, 240, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
