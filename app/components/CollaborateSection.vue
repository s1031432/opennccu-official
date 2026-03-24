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

      <!-- Collaboration showcase card -->
      <div class="collaborate-card rounded-[20px] overflow-hidden mb-20 relative">
        <!-- Carousel pagination dots (inside card, top-right per Figma) -->
        <div class="absolute top-5 right-6 flex items-center gap-2 z-10">
          <span class="w-[10px] h-[10px] rounded-full bg-[#4ECBA5]"></span>
          <span class="w-[10px] h-[10px] rounded-full bg-[#d0d0d0]"></span>
          <span class="w-[10px] h-[10px] rounded-full bg-[#d0d0d0]"></span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[637px]">
          <!-- Left: text content -->
          <div class="lg:col-span-4 p-10 lg:p-[75px] flex flex-col justify-center">
            <h3
              class="mb-3"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 32px; font-weight: 700; color: #606060; letter-spacing: 2px;"
            >
              徵才月
            </h3>
            <p
              class="leading-[1.7] mb-10"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 16px; font-weight: 300; color: #aeaeb2; letter-spacing: 0.5px;"
            >
              職涯中心與OpenNCCU 合作推出的「數位集點工具」，將學生的參與紀錄與問卷回饋集中化管理，協助學生隨時掌握積點進度與線上兌獎，獲得更直覺的抽獎參與體驗。
            </p>
            <button
              class="cta-btn inline-flex items-center gap-2 rounded-full px-6 py-3 w-fit"
              @click="showDetail = true"
            >
              <span
                class="text-white"
                style="font-family: 'Noto Sans TC', sans-serif; font-size: 16px; font-weight: 700; letter-spacing: 0.5px;"
              >了解更多</span>
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                <path d="M6 16H26M26 16L18 8M26 16L18 24" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
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
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 22px; font-weight: 400; letter-spacing: 1.5px;"
          >
            當日活躍使用者
          </p>
          <p style="font-family: 'Montserrat', sans-serif; font-size: 40px; font-weight: 600; color: #4ECBA5;">
            3,500+
          </p>
        </div>
        <div class="flex flex-col items-center w-full md:w-auto">
          <p
            class="text-[#606060]"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 22px; font-weight: 400; letter-spacing: 1.5px;"
          >
            使用次數
          </p>
          <p style="font-family: 'Montserrat', sans-serif; font-size: 40px; font-weight: 600; color: #4ECBA5;">
            15,000+
          </p>
        </div>
      </div>

      <!-- Partners -->
      <div class="text-center">
        <h3
          class="mb-10"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 400; color: #606060; letter-spacing: 2px;"
        >
          合作夥伴
        </h3>
        <div class="flex justify-center items-center gap-6 md:gap-10 flex-wrap">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="partner-item flex flex-col items-center gap-2.5 group cursor-pointer"
          >
            <!-- Partner circles ~65px per Figma (was 85px, too large) -->
            <div class="partner-circle relative w-[65px] h-[65px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div class="partner-bg absolute inset-0 rounded-full group-hover:shadow-lg transition-shadow duration-300" />
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="partner-logo relative z-10 w-[48px] h-[48px] object-contain rounded-full transition-all duration-300"
              />
            </div>
            <span
              class="text-[#aeaeb2] group-hover:text-[#606060] transition-colors duration-300"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 14px; font-weight: 300; letter-spacing: 0.8px;"
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
  { name: 'InternX', logo: '/assets/partner-internx.png' },
  { name: '政大考古題交流', logo: '/assets/partner-exam.png' },
  { name: 'GDG', logo: '/assets/partner-gdg.png' },
  { name: '政大學生會', logo: '/assets/partner-nccusa.png' },
  { name: '政大學生議會', logo: '/assets/partner-sc.png' },
]
</script>

<style scoped>
.collaborate-card {
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(230, 245, 255, 0.5) 20%,
      rgba(255, 230, 250, 0.3) 40%,
      rgba(255, 255, 255, 0.6) 55%,
      rgba(230, 255, 240, 0.4) 70%,
      rgba(245, 230, 255, 0.3) 85%,
      rgba(255, 255, 255, 0.7) 100%
    );
  backdrop-filter: blur(12px);
  box-shadow:
    7px 6px 7px -6px rgba(0, 0, 0, 0.08),
    6px 6px 18px -14px rgba(135, 135, 135, 0.3),
    -5px -5px 15px 0px #fcfcfc,
    inset 0 0 60px rgba(255, 255, 255, 0.3);
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

.carousel-arrow {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 0 20px 20px 0;
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

.partner-logo {
  filter: grayscale(100%);
  opacity: 0.6;
}

.group:hover .partner-logo {
  filter: grayscale(0%);
  opacity: 1;
}
</style>
