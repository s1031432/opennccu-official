<template>
  <section class="relative py-24 bg-[#f0f0f0] overflow-hidden min-h-screen">
    <div class="max-w-6xl mx-auto px-6 relative">
      <!-- Top area: title + glass cards -->
      <div class="flex flex-col lg:flex-row items-start gap-12 mb-24">
        <!-- Left side: decorative curve + title -->
        <div class="lg:w-1/2 relative">
          <!-- Large decorative mint green curved line -->
          <svg
            class="absolute -left-20 -top-20 w-[400px] h-[700px] pointer-events-none"
            viewBox="0 0 400 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Main swooping curve from top-left down -->
            <path
              d="M 100 0 Q 380 50 350 200 Q 320 350 200 350 Q 80 350 80 480 Q 80 610 100 700"
              stroke="#9ee8c8"
              stroke-width="18"
              stroke-linecap="round"
              fill="none"
              opacity="0.6"
            />
            <!-- Inner thinner line -->
            <path
              d="M 80 0 Q 360 40 330 190 Q 300 340 180 340 Q 60 340 60 470 Q 60 600 80 700"
              stroke="#cef5e6"
              stroke-width="8"
              stroke-linecap="round"
              fill="none"
              opacity="0.3"
            />
            <!-- Small circle endpoint -->
            <circle cx="100" cy="700" r="6" fill="#9ee8c8" opacity="0.5" />
          </svg>

          <h2
            class="relative z-10 mb-12 pl-16 pt-16"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060;"
          >
            團隊成員
          </h2>
        </div>

        <!-- Right side: stacked glass cards -->
        <div class="lg:w-1/2 flex justify-center items-center pt-8">
          <div class="relative w-[280px] h-[280px]">
            <!-- Card 3 (back) -->
            <div
              class="absolute w-[260px] h-[260px] rounded-2xl border border-white/60 shadow-lg"
              style="background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1)); backdrop-filter: blur(12px); top: 0; left: 40px; transform: rotate(8deg);"
            >
              <span
                class="absolute bottom-8 left-8 text-2xl tracking-widest"
                style="font-family: 'Montserrat', sans-serif; font-weight: 300; color: #aeaeb2;"
              >
                OPEN<br />NCCU
              </span>
            </div>
            <!-- Card 2 (middle) -->
            <div
              class="absolute w-[260px] h-[260px] rounded-2xl border border-white/60 shadow-lg"
              style="background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.15)); backdrop-filter: blur(12px); top: 10px; left: 20px; transform: rotate(4deg);"
            />
            <!-- Card 1 (front) - glass morphism with gradient -->
            <div
              class="absolute w-[260px] h-[260px] rounded-2xl border border-white/60 shadow-xl overflow-hidden"
              style="background: linear-gradient(135deg, rgba(78,203,165,0.15), rgba(120,180,220,0.1), rgba(255,255,255,0.3)); backdrop-filter: blur(16px); top: 20px; left: 0;"
            >
              <span
                class="absolute bottom-8 left-8 text-2xl tracking-widest"
                style="font-family: 'Montserrat', sans-serif; font-weight: 300; color: #4ECBA5;"
              >
                OPEN<br />NCCU
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Team role cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div
          v-for="role in teamRoles"
          :key="role.name"
          class="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-lg transition-all"
        >
          <h3
            class="mb-3"
            style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 300; color: #606060;"
          >
            {{ role.name }}
          </h3>
          <p
            class="leading-relaxed"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 20px; font-weight: 300; color: #aeaeb2;"
          >
            {{ role.description }}
          </p>
        </div>
      </div>

      <!-- JOIN US! button -->
      <div class="flex justify-start pl-4">
        <a
          href="#"
          class="inline-flex items-center justify-center w-36 h-36 rounded-full border-2 border-[#d9d9d9] text-[#aeaeb2] hover:border-[#4ECBA5] hover:text-[#4ECBA5] transition-colors"
        >
          <span
            class="text-xl font-semibold tracking-wide text-center leading-tight"
            style="font-family: 'Montserrat', sans-serif;"
          >
            JOIN<br />US !
          </span>
        </a>
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
