<template>
  <section id="about" class="relative py-24 overflow-hidden">
    <!-- Flowing organic S-curves connecting timeline items per Figma (smooth curves, NOT straight zigzag) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <svg class="absolute left-0 top-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 2800" fill="none">
        <!-- Figma: multiple parallel S-curve strands (~3-4) creating a subtle ribbon bundle effect -->
        <!-- Strand 1 (center) -->
        <path
          d="M350 520 C350 620, 850 620, 850 720 C850 820, 350 820, 350 1020 C350 1120, 850 1120, 850 1320 C850 1420, 350 1420, 350 1620 C350 1720, 850 1720, 850 1920 C850 2020, 350 2020, 350 2220 C350 2320, 850 2320, 850 2520"
          stroke="#d5d5d5"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
        />
        <!-- Strand 2 (offset left ~8px) -->
        <path
          d="M342 520 C342 620, 842 620, 842 720 C842 820, 342 820, 342 1020 C342 1120, 842 1120, 842 1320 C842 1420, 342 1420, 342 1620 C342 1720, 842 1720, 842 1920 C842 2020, 342 2020, 342 2220 C342 2320, 842 2320, 842 2520"
          stroke="#dcdcdc"
          stroke-width="1"
          stroke-linecap="round"
          fill="none"
          opacity="0.7"
        />
        <!-- Strand 3 (offset right ~8px) -->
        <path
          d="M358 520 C358 620, 858 620, 858 720 C858 820, 358 820, 358 1020 C358 1120, 858 1120, 858 1320 C858 1420, 358 1420, 358 1620 C358 1720, 858 1720, 858 1920 C858 2020, 358 2020, 358 2220 C358 2320, 858 2320, 858 2520"
          stroke="#dcdcdc"
          stroke-width="1"
          stroke-linecap="round"
          fill="none"
          opacity="0.7"
        />
        <!-- Strand 4 (slightly wider offset right ~16px, more subtle) -->
        <path
          d="M366 520 C366 620, 866 620, 866 720 C866 820, 366 820, 366 1020 C366 1120, 866 1120, 866 1320 C866 1420, 366 1420, 366 1620 C366 1720, 866 1720, 866 1920 C866 2020, 366 2020, 366 2220 C366 2320, 866 2320, 866 2520"
          stroke="#e2e2e2"
          stroke-width="0.8"
          stroke-linecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Title -->
      <h2
        class="text-center mb-6"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060; letter-spacing: 9.6px;"
      >
        我們是誰？
      </h2>

      <!-- Description — Figma spec: ~16-18px body text, NOT 28px — DO NOT ENLARGE -->
      <div class="text-center max-w-4xl mx-auto mb-12">
        <p
          class="leading-[1.8]"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 18px; font-weight: 400; color: #606060; letter-spacing: 0.72px;"
        >
          我們是 <span style="font-family: 'Montserrat', sans-serif; font-weight: 400;">OpenNCCU</span>，一群熱愛開發和設計的政大學生所發起的非營利組織！
        </p>
        <p
          class="leading-[1.8] mt-1"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 18px; font-weight: 400; color: #606060; letter-spacing: 0.72px;"
        >
          我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源，期許為校園數位化創造更多可能。
        </p>
      </div>

      <!-- Separator line per Figma -->
      <div class="max-w-5xl mx-auto mb-24">
        <hr class="border-t border-[#d9d9d9]" />
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div
          v-for="(item, idx) in timelineItems"
          :key="item.year"
          class="mb-20 relative z-10"
        >
          <div
            class="flex flex-col lg:flex-row items-start gap-8"
            :class="idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Text content -->
            <div class="lg:w-1/2" :class="idx % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'">
              <!-- Figma: timeline card border-radius ~16-20px -->
            <div class="timeline-card rounded-[20px] p-8 lg:p-10">
                <h3
                  class="mb-4"
                  style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 300; color: #606060; letter-spacing: 3.84px;"
                >
                  {{ item.year }}
                </h3>
                <p
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 300; color: #606060; letter-spacing: 0.96px; line-height: 1.8;"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
            <!-- Image -->
            <div class="lg:w-1/2" :class="idx % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'">
              <!-- Figma: image border-radius ~16-20px -->
              <div class="w-full h-[355px] rounded-[20px] overflow-hidden" :class="item.photo ? '' : 'bg-[#d9d9d9] flex items-center justify-center'">
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
/* Figma: clearly visible light gray card background ~#DCDCDC (10-15% gray), NOT barely-visible */
.timeline-card {
  background: rgba(210, 210, 210, 0.55);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04);
  border: none;
  /* Figma: ~16-20px border-radius */
  border-radius: 20px;
}
</style>
