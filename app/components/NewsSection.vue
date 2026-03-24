<template>
  <section class="relative py-16 md:py-20 overflow-hidden">
    <!-- Diagonal decorative bands per Figma (large subtle stripes, not thin lines) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute bg-white/25"
        style="width: 80px; height: 250%; top: -40%; right: 15%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute bg-white/18"
        style="width: 60px; height: 250%; top: -40%; right: 38%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute bg-white/12"
        style="width: 50px; height: 250%; top: -40%; right: 58%; transform: rotate(-32deg); transform-origin: top center;"
      />
    </div>

    <div class="relative pl-[80px] pr-0">
      <div class="flex items-center gap-4">
        <!-- Left labels -->
        <div class="flex-shrink-0 flex flex-col items-start w-[150px] gap-1.5">
          <button
            class="flex items-center justify-center px-4 py-2 rounded-full transition-all"
            :class="activeTab === 'news' ? 'news-badge-pill' : ''"
            @click="activeTab = 'news'"
          >
            <!-- Figma: ~24-28px, weight 500, #5A5A5A active / #A0A0A0 inactive -->
            <span
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 500;"
              :style="{ color: activeTab === 'news' ? '#5a5a5a' : '#a0a0a0' }"
            >最新消息</span>
          </button>
          <button
            class="flex items-center justify-center px-4 py-2 rounded-full transition-all"
            :class="activeTab === 'press' ? 'news-badge-pill' : ''"
            @click="activeTab = 'press'"
          >
            <!-- Figma: ~22-26px secondary label, lighter color -->
            <span
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 22px; font-weight: 400;"
              :style="{ color: activeTab === 'press' ? '#5a5a5a' : '#a0a0a0' }"
            >新聞報導</span>
          </button>
        </div>

        <!-- Scrollable news cards -->
        <div class="flex-1 overflow-x-auto pt-6 pb-4 scrollbar-hide overflow-y-visible">
          <div class="flex gap-4" style="min-width: max-content;">
            <a
              v-for="news in activeItems"
              :key="news.id"
              :href="news.url || '#'"
              :target="news.url ? '_blank' : undefined"
              :rel="news.url ? 'noopener noreferrer' : undefined"
              class="news-card rounded-[12px] w-[340px] h-[155px] flex-shrink-0 cursor-pointer transition-all relative block no-underline -rotate-[4deg]"
            >
              <!-- New badge (top right, slightly overlapping card edge per Figma) -->
              <div v-if="news.isNew" class="absolute right-[-8px] top-[-8px]">
                <div class="new-badge rounded-full px-3.5 py-1 flex items-center justify-center">
                  <span
                    class="text-white"
                    style="font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.5px;"
                  >New</span>
                </div>
              </div>
              <!-- Card content -->
              <div class="absolute left-[20px] top-[16px] w-[240px] flex flex-col gap-0.5">
                <!-- Figma: date in medium gray ~#8A8A8A, not teal — DO NOT change to teal -->
                <span
                  class="text-[#8a8a8a]"
                  style="font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 400; letter-spacing: 1px;"
                >{{ news.date }}</span>
                <p
                  class="text-[#3d3d3d] font-bold line-clamp-1"
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 16px; letter-spacing: 2.4px;"
                >{{ news.title }}</p>
                <p
                  class="text-[#aaaaaa] mt-1 line-clamp-2"
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 12px; font-weight: 400; letter-spacing: 1px; line-height: 1.5;"
                >{{ news.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref<'news' | 'press'>('news')

const newsItems = [
  { id: 1, date: '2026.03.15', isNew: true, title: '徵才月集點工具正式上線', description: '與職涯中心合作推出數位集點系統，參加徵才月活動即可累積點數兌換精美好禮！', url: null },
  { id: 2, date: '2026.02.20', isNew: true, title: 'Open NCCU 官網全新改版', description: '全新視覺設計搭配互動動畫，帶來更現代化的瀏覽體驗，快來看看我們的新面貌！', url: null },
  { id: 3, date: '2026.01.08', isNew: false, title: '2025 年度回顧：成長與展望', description: '回顧過去一年的成果，Open NCCU 服務累計超過 15,000 次使用，感謝所有政大人的支持。', url: null },
  { id: 4, date: '2025.11.12', isNew: false, title: '「政大吃什麼」新增外送比價功能', description: '不只幫你決定吃什麼，現在還能比較各平台外送價格，幫你省荷包！', url: null },
]

const pressItems = [
  { id: 101, date: '2024.08.30', isNew: false, title: '學生自發打造 OPEN NCCU APP　創造政大人專屬的數位體驗', description: '廣電系學生范愷祐領導的 Open NCCU 團隊，開發專為政大學生設計的應用程式，已累積 4,530 名用戶。', url: 'https://www.nccu.edu.tw/p/406-1000-17528,r17.php?Lang=zh-tw' },
  { id: 102, date: '2024.01.01', isNew: false, title: 'Dcard — Open NCCU 相關討論', description: '政大學生在 Dcard 上討論 Open NCCU 的使用心得與功能建議。', url: 'https://www.dcard.tw/f/nccu/p/260990796' },
  { id: 103, date: '2025.09.15', isNew: false, title: 'Open NCCU 累計用戶突破 4,500 人', description: 'Open NCCU 服務累計使用者突破 4,500 人，涵蓋課表查詢、校園美食推薦等多項實用功能。', url: null },
]

const activeItems = computed(() =>
  activeTab.value === 'news' ? newsItems : pressItems
)
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* Figma: neumorphic raised pill for active tab — NOT white-fill with border */
.news-badge-pill {
  background: #f0f0f0;
  border: none;
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.08),
    -4px -4px 10px rgba(255, 255, 255, 0.9);
}

/* Figma: white card with soft diffused shadow, border-radius 12px */
.news-card {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Figma: card tilted ~-4deg counter-clockwise — DO NOT change to clockwise */
.news-card:hover {
  box-shadow:
    0 4px 16px 0 rgba(0, 0, 0, 0.10),
    0 2px 6px 0 rgba(0, 0, 0, 0.04);
  transform: rotate(-4deg) translateY(-2px);
}

.new-badge {
  background: linear-gradient(162deg, rgb(148, 204, 185) 5%, rgb(63, 164, 182) 95%);
  backdrop-filter: blur(10.5px);
  box-shadow:
    -4px -4px 12px 0px rgba(182, 182, 182, 0.25),
    6px 12px 45px -22px #999,
    7px 6px 7px -6px rgba(0, 0, 0, 0.11);
}
</style>
