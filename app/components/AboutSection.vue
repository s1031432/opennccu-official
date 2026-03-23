<template>
  <section id="about" class="relative py-24 overflow-hidden">
    <!-- Decorative organic curve connecting timeline items -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <svg class="absolute left-0 top-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 2788" fill="none">
        <path
          d="M400 400 C600 500, 900 600, 1100 700 S1400 900, 1200 1100 S600 1300, 400 1500 S900 1700, 1300 1800 S600 2100, 400 2300"
          stroke="rgba(200, 237, 224, 0.5)"
          stroke-width="2"
          fill="none"
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

      <!-- Description -->
      <div class="text-center max-w-5xl mx-auto mb-24">
        <p
          class="leading-[50px]"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 300; color: #606060; letter-spacing: 1.12px;"
        >
          <span style="font-family: 'Montserrat', sans-serif; font-weight: 300;">Open NCCU</span>，一群熱愛隕石開發的工程師和設計政大學生的設計師所發起的非營利組織！
        </p>
        <p
          class="leading-[50px]"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 300; color: #606060; letter-spacing: 1.12px;"
        >
          我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源。
        </p>
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
              <div class="timeline-card rounded-[30px] p-8 lg:p-10">
                <h3
                  class="mb-4"
                  style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 300; color: #606060; letter-spacing: 3.84px;"
                >
                  {{ item.year }}
                </h3>
                <p
                  class="leading-relaxed"
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 300; color: #606060; letter-spacing: 0.96px;"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
            <!-- Image -->
            <div class="lg:w-1/2" :class="idx % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'">
              <div class="w-full h-[355px] rounded-[30px] overflow-hidden" :class="item.photo ? '' : 'bg-[#d9d9d9] flex items-center justify-center'">
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
    description: 'Open NCCU，一群熱愛隕石開發的工程師和設計政大學生的設計師所發起的非營利組織！我們從優化校園的數位體驗出發，打造專屬政大的數位工具並推廣開放資源。',
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
    description: '「政大吃什麼」上線，白衣男手上的黑衣男是政治大學指南校區的美食佳餚：東東，傳說只能在每年的二月三十號能捕捉到，還不知道要吃什麼嗎？那就來吃東東！',
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
.timeline-card {
  background: rgba(245, 245, 245, 0.8);
  box-shadow:
    6px 6px 16px rgba(0, 0, 0, 0.06),
    -6px -6px 16px rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
</style>
