<template>
  <section id="collaborate" class="relative py-24 overflow-hidden">
    <!-- Collaboration Detail overlay -->
    <Transition name="detail-fade">
      <div v-if="showDetail" class="relative z-20">
        <CollaborationDetailCard @back="showDetail = false" />
      </div>
    </Transition>

    <div v-show="!showDetail">
    <!-- Decorative curve removed — now handled by BackgroundCurve -->

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Figma: LARGE LIGHT GRAY title matching other sections — 80px weight300 #606060 per DESIGN-SPEC.md + verified from case-studies.png — DO NOT change to teal or shrink -->
      <h2
        class="text-center mb-10"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(36px, 6vw, 80px); font-weight: 300; color: #616161; letter-spacing: clamp(3px, 0.5vw, 9.6px);"
      >
        與我們合作
      </h2>

      <!-- Carousel pagination dots (above card, top-right per Figma API) -->
      <!-- Figma API: active=35×12 #81edb9, inactive=20×12 #aeaeb2, all border-radius 20 (pill shape, NOT circles) -->
      <div class="flex justify-end items-center gap-2 mb-3 pr-2">
        <span class="w-[35px] h-[12px] rounded-[20px] bg-[#81edb9]"></span>
        <span class="w-[20px] h-[12px] rounded-[20px] bg-[#aeaeb2]"></span>
        <span class="w-[20px] h-[12px] rounded-[20px] bg-[#aeaeb2]"></span>
      </div>

      <!-- Collaboration showcase card — Figma API: Body gap=72 between CM Card and Achievement -->
      <div class="collaborate-card rounded-[20px] overflow-hidden mb-[72px] relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[637px]">
          <!-- Left: text content -->
          <div class="lg:col-span-4 p-10 lg:p-[75px] flex flex-col justify-center">
            <!-- Figma API: 48px/weight300/#606060/ls3.84/lh57.6 — matches other section titles -->
            <h3
              class="mb-[12px]"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #616161; letter-spacing: 3.84px; line-height: 57.6px;"
            >
              徵才月
            </h3>
            <!-- Figma API: 28px/weight300/#aeaeb2/ls1.12/lh50px — DO NOT shrink -->
            <p
              class="mb-10"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(16px, 2.5vw, 28px); font-weight: 300; color: #aeaeb2; letter-spacing: 1.12px; line-height: 50px;"
            >
              職涯中心與OpenNCCU 合作推出的「數位集點工具」，將學生的參與紀錄與問卷回饋集中化管理，協助學生隨時掌握積點進度與線上兌獎，獲得更直覺的抽獎參與體驗。
            </p>
            <!-- Figma API: CTA Btn 203×64px, cornerRadius=2000 (pill), pad T16/B16/L32/R32, gap=8, gradient fill #94CCB9→#3FA4B6 ~145deg, inner shadows -->
            <button
              class="cta-btn inline-flex items-center gap-2 rounded-full px-[32px] py-[16px] w-fit"
              @click="showDetail = true"
            >
              <!-- Figma API: 24px/weight700/#ffffff/ls0.96 -->
              <span
                class="text-white"
                style="font-family: 'Noto Sans TC', sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 0.96px;"
              >了解更多</span>
              <!-- Figma API: arrow frame 32×32px -->
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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

        <!-- Figma API: Carousel arrow Btn 58×241px, cornerRadius=10, fill #f0f0f0, neumorphic 3x DROP_SHADOW -->
        <!-- Figma API: arrow icon 18×30px filled #616161 (not stroked) — exported from node 44537:23158 -->
        <button class="absolute right-0 top-1/2 -translate-y-1/2 carousel-arrow w-[58px] h-[241px] flex items-center justify-center transition-colors rounded-[10px]">
          <svg width="18" height="30" viewBox="0 0 18 30" fill="none">
            <path d="M18 15C18 15.5763 17.7699 16.0678 17.292 16.5085L3.48673 29.4407C3.11504 29.8136 2.61947 30 2.0531 30C0.902655 30 0 29.1525 0 28.0339C0 27.4915 0.230087 27 0.619469 26.6271L13.0619 15L0.619469 3.37288C0.230087 2.98305 0 2.49153 0 1.94915C0 0.847458 0.902655 0 2.0531 0C2.61947 0 3.11504 0.186441 3.48673 0.559322L17.292 13.4915C17.7699 13.9322 17.9823 14.4237 18 15Z" fill="#616161"/>
          </svg>
        </button>
      </div>

      <!-- Stats row — Figma API: Achievement gap=96px, labels 48px/weight300/#606060/ls3.84, numbers 48px/weight600/teal/ls3.84 -->
      <div class="flex flex-col md:flex-row justify-center gap-16 md:gap-[96px] mb-20 text-center">
        <div class="flex flex-col items-center w-full md:w-auto">
          <!-- Figma API: 48px/weight300/#606060/ls3.84 -->
          <p
            class="mb-2"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #616161; letter-spacing: 3.84px;"
          >
            當日活躍使用者
          </p>
          <!-- Figma API: 48px/weight600/gradient #94CCB9→#3FA4B6/ls3.84 — NOT solid teal -->
          <p class="stats-gradient" style="font-family: 'Montserrat', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 600; letter-spacing: 3.84px;">
            3,500+
          </p>
        </div>
        <div class="flex flex-col items-center w-full md:w-auto">
          <!-- Figma API: 48px/weight300/#606060/ls3.84 -->
          <p
            class="mb-2"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #616161; letter-spacing: 3.84px;"
          >
            使用次數
          </p>
          <!-- Figma API: 48px/weight600/gradient #94CCB9→#3FA4B6/ls3.84 — NOT solid teal -->
          <p class="stats-gradient" style="font-family: 'Montserrat', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 600; letter-spacing: 3.84px;">
            15,000+
          </p>
        </div>
      </div>

      <!-- Partners -->
      <div class="text-center">
        <!-- Figma API: "合作夥伴" 48px/weight300/#606060/ls3.84, Partners frame gap=48 — matches section title style -->
        <h3
          class="mb-[48px]"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #616161; letter-spacing: 3.84px;"
        >
          合作夥伴
        </h3>
        <!-- Figma API: PartnerList gap=64px — DO NOT shrink -->
        <div class="flex justify-center items-center gap-[64px] flex-wrap">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="partner-item flex flex-col items-center gap-2.5 group cursor-pointer"
          >
            <!-- Figma API: Partner circles 120×120px, fill #f0f0f0, logos 96×96px — DO NOT shrink below 120px -->
            <div class="partner-circle relative w-[120px] h-[120px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div class="partner-bg-neumorphic absolute inset-0 rounded-full transition-shadow duration-300" />
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="partner-logo relative z-10 w-[96px] h-[96px] object-contain rounded-full transition-all duration-300"
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

/* Figma API: CTA Btn gradient #94CCB9→#3FA4B6 (approx 145deg), inner shadows: white 3px/3px/10px 70% + teal -3px/-3px/10px multiply */
.cta-btn {
  background: linear-gradient(145deg, #94CCB9 0%, #3FA4B6 100%);
  box-shadow:
    inset 3px 3px 10px 0px rgba(255, 255, 255, 0.7),
    inset -3px -3px 10px 0px rgba(22, 147, 186, 1);
}

.cta-btn:hover {
  filter: brightness(1.05);
}

/* Figma API: carousel arrow neumorphic — fill #f0f0f0, 3x DROP_SHADOW matching partner circles */
.carousel-arrow {
  background: #f0f0f0;
  box-shadow:
    7px 6px 7px -6px rgba(0, 0, 0, 0.08),
    6px 6px 18px -14px rgba(135, 135, 135, 0.3),
    -5px -5px 15px 0px #fcfcfc;
}
.carousel-arrow:hover {
  box-shadow:
    7px 6px 7px -6px rgba(0, 0, 0, 0.1),
    6px 6px 18px -14px rgba(135, 135, 135, 0.35),
    -5px -5px 15px 0px #fcfcfc;
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

/* Figma API: stats numbers gradient fill #94CCB9→#3FA4B6 (linear, top-left to bottom-right) */
.stats-gradient {
  background: linear-gradient(165deg, #94CCB9 0%, #3FA4B6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Figma API: partner circles fill #f0f0f0, 3x DROP_SHADOW neumorphic:
   - 7px 6px 7px -6px rgba(0,0,0,0.08)
   - 6px 6px 18px -14px rgba(135,135,135,0.3)
   - -5px -5px 15px rgba(252,252,252,1) */
.partner-bg-neumorphic {
  background: #f0f0f0;
  box-shadow:
    7px 6px 7px -6px rgba(0, 0, 0, 0.08),
    6px 6px 18px -14px rgba(135, 135, 135, 0.3),
    -5px -5px 15px 0px #fcfcfc;
}

.group:hover .partner-bg-neumorphic {
  box-shadow:
    7px 6px 7px -6px rgba(0, 0, 0, 0.1),
    6px 6px 18px -14px rgba(135, 135, 135, 0.35),
    -5px -5px 15px 0px #fcfcfc;
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
