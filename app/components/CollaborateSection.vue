<template>
  <section id="collaborate" class="relative py-24 overflow-hidden">
    <!-- Collaboration Detail overlay -->
    <Transition name="detail-fade">
      <div v-if="showDetail" class="relative z-20">
        <CollaborationDetailCard @back="showDetail = false" />
      </div>
    </Transition>

    <div v-show="!showDetail">
    <!-- Decorative organic curve -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute w-[2px] bg-[#c8ede0]/40"
        style="height: 300%; top: -50%; left: 45%; transform: rotate(-15deg); transform-origin: top center;"
      />
    </div>

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Section title -->
      <h2
        class="text-center mb-6"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060; letter-spacing: 9.6px;"
      >
        與我們合作
      </h2>

      <!-- Carousel pagination dots -->
      <div class="flex justify-end gap-3 mb-6 pr-4">
        <span class="pagination-dot-active w-[35px] h-[12px] rounded-full bg-[#81edb9]"></span>
        <span class="pagination-dot w-[20px] h-[12px] rounded-full bg-[#aeaeb2]"></span>
        <span class="pagination-dot w-[20px] h-[12px] rounded-full bg-[#aeaeb2]"></span>
      </div>

      <!-- Collaboration showcase card -->
      <div class="collaborate-card rounded-[20px] overflow-hidden mb-20 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[637px]">
          <!-- Left: text content -->
          <div class="lg:col-span-4 p-10 lg:p-[75px] flex flex-col justify-center">
            <h3
              class="mb-3"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 48px; font-weight: 300; color: #606060; letter-spacing: 3.84px;"
            >
              徵才月
            </h3>
            <p
              class="leading-[50px] mb-10"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 300; color: #aeaeb2; letter-spacing: 1.12px;"
            >
              職涯中心與OpenNCCU 合作推出的「數位集點工具」，將學生的參與紀錄與問卷回饋集中化管理，協助學生隨時掌握積點進度與線上兌獎，獲得更直覺的抽獎參與體驗。
            </p>
            <button
              class="cta-btn inline-flex items-center gap-2 rounded-full px-8 py-4 w-fit"
              @click="showDetail = true"
            >
              <span
                class="text-white"
                style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 0.96px;"
              >了解更多</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="-rotate-90">
                <path d="M16 6L16 26M16 6L8 14M16 6L24 14" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Right: mockup images -->
          <div class="lg:col-span-8 relative overflow-hidden rounded-r-[20px]">
            <!-- Background image -->
            <div class="absolute inset-0">
              <img src="/assets/cm-bg.png" alt="" class="w-full h-full object-cover" />
            </div>
            <!-- CM Logo -->
            <div class="absolute top-[122px] right-[138px] w-[400px] h-[158px] hidden lg:block">
              <img src="/assets/cm-logo.png" alt="Career Month" class="w-full h-full object-contain" />
            </div>
            <!-- Phone mockup -->
            <div class="absolute left-1/4 top-[72px] w-[418px] h-[859px] hidden lg:block">
              <img src="/assets/cm-mockup.png" alt="App mockup" class="w-full h-full object-contain" />
            </div>
            <!-- Card image -->
            <div class="absolute bottom-[100px] right-[100px] w-[432px] h-[246px] rounded-[15px] overflow-hidden hidden lg:block">
              <img src="/assets/cm-card.png" alt="CM Card" class="w-full h-full object-cover" />
            </div>
            <!-- Mobile fallback -->
            <div class="lg:hidden flex items-center justify-center py-12">
              <img src="/assets/cm-mockup.png" alt="App mockup" class="h-[400px] object-contain" />
            </div>
          </div>
        </div>

        <!-- Carousel navigation arrow -->
        <button class="absolute right-0 top-1/2 -translate-y-1/2 carousel-arrow w-[58px] h-[241px] flex items-center justify-center text-[#606060] hover:text-[#4ECBA5] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <!-- Stats row -->
      <div class="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-20 text-center">
        <div class="flex flex-col items-center w-full md:w-auto">
          <p
            class="text-[#606060]"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 48px; font-weight: 300; letter-spacing: 3.84px;"
          >
            當日活躍使用者
          </p>
          <p class="stats-gradient" style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 600;">
            3,500+
          </p>
        </div>
        <div class="flex flex-col items-center w-full md:w-auto">
          <p
            class="text-[#606060]"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 48px; font-weight: 300; letter-spacing: 3.84px;"
          >
            使用次數
          </p>
          <p class="stats-gradient" style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 600;">
            15,000+
          </p>
        </div>
      </div>

      <!-- Partners -->
      <div class="text-center">
        <h3
          class="mb-12"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 48px; font-weight: 300; color: #606060; letter-spacing: 3.84px;"
        >
          合作夥伴
        </h3>
        <div class="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="partner-item flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div class="partner-circle relative w-[120px] h-[120px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div class="partner-bg absolute inset-0 rounded-full group-hover:shadow-lg transition-shadow duration-300" />
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="relative z-10 w-[96px] h-[96px] object-contain rounded-full group-hover:opacity-100 transition-opacity duration-300"
                :style="partner.opacity ? `opacity: ${partner.opacity / 100}` : ''"
              />
            </div>
            <span
              class="text-[#aeaeb2] group-hover:text-[#606060] transition-colors duration-300"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 16px; font-weight: 300; letter-spacing: 1px;"
            >
              {{ partner.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDetail = ref(false)
const partners = [
  { name: '政大通', logo: '/assets/partner-nccupass.png' },
  { name: 'InternX', logo: '/assets/partner-internx.png', opacity: 45 },
  { name: '政大考古題交流', logo: '/assets/partner-exam.png', opacity: 70 },
  { name: 'GDG', logo: '/assets/partner-gdg.png' },
  { name: '政大學生會', logo: '/assets/partner-nccusa.png', opacity: 50 },
  { name: '政大學生議會', logo: '/assets/partner-sc.png', opacity: 70 },
]
</script>

<style scoped>
.collaborate-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  box-shadow:
    7px 6px 7px -6px rgba(0, 0, 0, 0.08),
    6px 6px 18px -14px rgba(135, 135, 135, 0.3),
    -5px -5px 15px 0px #fcfcfc;
}

.cta-btn {
  background: linear-gradient(170deg, rgb(148, 204, 185) 5%, rgb(63, 164, 182) 95%);
  box-shadow:
    inset 3px 3px 10px 0px rgba(255, 255, 255, 0.7),
    inset -3px -3px 10px 0px #1693ba;
}

.cta-btn:hover {
  filter: brightness(1.05);
}

.stats-gradient {
  background: linear-gradient(176deg, rgb(148, 204, 185) 5%, rgb(63, 164, 182) 95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.carousel-arrow {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 0 20px 20px 0;
}

.pagination-dot-active {
  box-shadow:
    inset -4px -4px 5px 0px rgba(59, 58, 118, 0.2),
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.4);
}

.pagination-dot {
  box-shadow: inset 0px 2.3px 2.3px 0px rgba(0, 0, 0, 0.1);
}

.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: all 0.4s ease;
}

.detail-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.detail-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.partner-bg {
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.5),
    0 2px 8px rgba(0, 0, 0, 0.06),
    -3px -3px 8px rgba(255, 255, 255, 0.8),
    3px 3px 8px rgba(0, 0, 0, 0.05);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.6));
}
</style>
