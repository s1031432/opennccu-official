<template>
  <!-- Figma API: Case Studies section pt=85px pb=70px — DO NOT use uniform py -->
  <section id="collaborate" class="relative pt-[85px] pb-[70px] overflow-hidden">
    <!-- Collaboration Detail overlay -->
    <Transition name="detail-fade">
      <div v-if="showDetail" class="relative z-20">
        <CollaborationDetailCard @back="showDetail = false" />
      </div>
    </Transition>

    <div v-show="!showDetail">
    <!-- Decorative curve removed — now handled by BackgroundCurve -->

    <!-- Figma API: CM Card x=126 w=1668, PartnerList x=161 w=1600 — wider than 1152px max-w-6xl -->
    <div class="relative mx-auto px-6" style="max-width: 1800px;">
      <!-- Figma: LARGE LIGHT GRAY title matching other sections — 80px weight300 #606060 per DESIGN-SPEC.md + verified from case-studies.png — DO NOT change to teal or shrink -->
      <h2
        class="text-center mb-[40px] md:mb-[81px]"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(36px, 6vw, 80px); font-weight: 300; color: #606060; letter-spacing: clamp(3px, 0.5vw, 9.6px); line-height: clamp(44px, 7.5vw, 96px);"
      >
        與我們合作
      </h2>

      <!-- Carousel pagination dots (above card, top-right per Figma API) -->
      <!-- Figma API: Frame 48095639 gap=12, active=35×12 #81edb9 with neumorphic inner shadows, inactive=20×12 #aeaeb2 with subtle inset -->
      <!-- Figma: 32px gap between dots bottom and card top -->
      <div class="flex justify-end items-center gap-[12px] mb-[32px] pr-2">
        <span class="dot-active w-[35px] h-[12px] rounded-[20px]"></span>
        <span class="dot-inactive w-[20px] h-[12px] rounded-[20px]"></span>
        <span class="dot-inactive w-[20px] h-[12px] rounded-[20px]"></span>
      </div>

      <!-- Collaboration showcase card — Figma API: Body gap=72 between CM Card and Achievement -->
      <!-- Figma API: CM Card x=126 w=1668 h=637. Intro at left=116 top=75 w=433. Image at left=449 w=1198. Overlap=100px. -->
      <div class="collaborate-card rounded-[20px] overflow-hidden mb-[72px] relative">
        <div class="relative min-h-[400px] lg:min-h-[637px]">
          <!-- Left: text content — Figma: Intro absolute, left=116 top=75 w=433, overlaps Image by 100px, z-10 -->
          <div class="relative lg:absolute lg:z-10 lg:left-[116px] lg:top-[75px] lg:w-[433px] p-10 lg:p-0 flex flex-col justify-start">
            <!-- Figma API: 48px/weight300/#606060/ls3.84/lh57.6 — matches other section titles -->
            <h3
              class="mb-[12px]"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #606060; letter-spacing: 3.84px; line-height: clamp(32px, 4.5vw, 57.6px);"
            >
              徵才月
            </h3>
            <!-- Figma API: 28px/weight300/#aeaeb2/ls1.12/lh50px — DO NOT shrink -->
            <p
              class="mb-10"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(16px, 2.5vw, 28px); font-weight: 300; color: #aeaeb2; letter-spacing: 1.12px; line-height: clamp(28px, 4vw, 50px);"
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
              <!-- Figma API: arrow frame 32×32px — diagonal upper-right arrow exported from node 44537:23173 -->
              <svg width="32" height="32" viewBox="0 0 19 19" fill="none">
                <path d="M17.4449 1.55493L1.55508 17.4448M17.4449 1.55493L17.3254 15.0553M17.4449 1.55493L3.94453 1.6744" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Right: mockup images — Figma: Image at left=449px from card left (449/1668≈26.9%), w=1198, h=640, overlaps Intro by 100px -->
          <div class="relative lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:left-[26.9%] overflow-hidden lg:rounded-r-[20px]">
            <!-- Background image -->
            <div class="absolute inset-0">
              <img src="/assets/cm-bg.png" alt="" class="w-full h-full object-cover" />
            </div>
            <!-- CM Logo -->
            <div class="absolute top-[122px] right-[138px] w-[400px] h-[158px] hidden lg:block">
              <img src="/assets/cm-logo.png" alt="Career Month" class="w-full h-full object-contain" />
            </div>
            <!-- Phone mockup — Figma: x=751 relative to Image x=575 → left=176px, top=72px, w=418, h=859 -->
            <div class="absolute left-[176px] top-[72px] w-[418px] h-[859px] hidden lg:block">
              <img src="/assets/cm-mockup.png" alt="App mockup" class="w-full h-full object-contain" />
            </div>
            <!-- Card image — Figma: x=1219 relative to Image x=575 → left=644px, top=316px, w=432, h=246, cr=15 -->
            <div class="absolute top-[316px] right-[122px] w-[432px] h-[246px] rounded-[15px] overflow-hidden hidden lg:block">
              <img src="/assets/cm-card.png" alt="CM Card" class="w-full h-full object-cover" />
            </div>
            <!-- Mobile fallback -->
            <div class="lg:hidden flex items-center justify-center py-12">
              <img src="/assets/cm-mockup.png" alt="App mockup" class="h-[400px] object-contain" />
            </div>
          </div>
        </div>

        <!-- Figma API: Carousel arrow Btn 58×241px, cornerRadius=10, fill #f0f0f0, neumorphic 3x DROP_SHADOW -->
        <!-- Figma API: arrow icon 18×30px filled #606060 (not stroked) — exported from node 44537:23158 -->
        <!-- Figma: Btn at x=1734 relative to CM Card x=126 → right=1668-1608-58=2px, top=198px. Vertically NOT centered. -->
        <button class="absolute right-[2px] top-[198px] carousel-arrow w-[58px] h-[241px] hidden lg:flex items-center justify-center transition-colors rounded-[10px]">
          <svg width="18" height="30" viewBox="0 0 18 30" fill="none">
            <path d="M18 15C18 15.5763 17.7699 16.0678 17.292 16.5085L3.48673 29.4407C3.11504 29.8136 2.61947 30 2.0531 30C0.902655 30 0 29.1525 0 28.0339C0 27.4915 0.230087 27 0.619469 26.6271L13.0619 15L0.619469 3.37288C0.230087 2.98305 0 2.49153 0 1.94915C0 0.847458 0.902655 0 2.0531 0C2.61947 0 3.11504 0.186441 3.48673 0.559322L17.292 13.4915C17.7699 13.9322 17.9823 14.4237 18 15Z" fill="#606060"/>
          </svg>
        </button>
      </div>

      <!-- Stats row — Figma API: Achievement x=252 w=660 and x=1008 w=660. LEFT-ALIGNED, not centered -->
      <!-- Figma: gap between Body bottom (y=4648) and Achievement top (y=4500) → Achievement is INSIDE Body frame -->
      <!-- Figma: 87px gap between Body bottom and Partners top -->
      <!-- Figma API: Achievement gap=96px between two Content frames, primaryAxisAlignItems=CENTER -->
      <!-- Figma API: Achievement frame 1920×148, HORIZONTAL, primaryAxisAlignItems=CENTER, itemSpacing=96. Text inside 660px frames is CENTER-aligned. -->
      <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-[96px] mb-[40px] md:mb-[87px]">
        <div class="flex flex-col w-full md:w-[660px] text-center">
          <!-- Figma API: 48px/weight300/#606060/ls3.84/lh57.6/textAlignHorizontal=CENTER — bbox h=74 but actual lineHeight=57.6 -->
          <p
            class="mb-0"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #606060; letter-spacing: 3.84px; line-height: clamp(32px, 4.5vw, 57.6px);"
          >
            當日活躍使用者
          </p>
          <!-- Figma API: 48px/weight600/gradient #94CCB9→#3FA4B6/ls3.84/lh58.5/textAlignHorizontal=CENTER — NOT solid teal -->
          <p class="stats-gradient" style="font-family: 'Montserrat', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 600; letter-spacing: 3.84px; line-height: clamp(32px, 4.5vw, 58.5px);">
            3,500+
          </p>
        </div>
        <div class="flex flex-col w-full md:w-[660px] text-center">
          <!-- Figma API: 48px/weight300/#606060/ls3.84/lh57.6/textAlignHorizontal=CENTER — bbox h=74 but actual lineHeight=57.6 -->
          <p
            class="mb-0"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #606060; letter-spacing: 3.84px; line-height: clamp(32px, 4.5vw, 57.6px);"
          >
            使用次數
          </p>
          <!-- Figma API: 48px/weight600/gradient #94CCB9→#3FA4B6/ls3.84/lh58.5/textAlignHorizontal=CENTER — NOT solid teal -->
          <p class="stats-gradient" style="font-family: 'Montserrat', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 600; letter-spacing: 3.84px; line-height: clamp(32px, 4.5vw, 58.5px);">
            15,000+
          </p>
        </div>
      </div>

      <!-- Partners -->
      <div class="text-center">
        <!-- Figma API: "合作夥伴" 48px/weight300/#606060/ls3.84/lh57.6, Partners frame gap=48 — matches section title style -->
        <h3
          class="mb-[24px] md:mb-[48px]"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(24px, 4vw, 48px); font-weight: 300; color: #606060; letter-spacing: 3.84px; line-height: clamp(32px, 4.5vw, 57.6px);"
        >
          合作夥伴
        </h3>
        <!-- Figma API: PartnerList gap=64px desktop, 32px mobile for fit -->
        <div class="flex justify-center items-center gap-[32px] md:gap-[64px] flex-wrap">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="partner-item flex flex-col items-center gap-2.5 group cursor-pointer"
          >
            <!-- Figma API: Partner circles 120×120px desktop, 80×80px mobile for viewport fit -->
            <div class="partner-circle relative w-[80px] h-[80px] md:w-[120px] md:h-[120px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div class="partner-bg-neumorphic absolute inset-0 rounded-full transition-shadow duration-300" />
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="partner-logo relative z-10 w-[64px] h-[64px] md:w-[96px] md:h-[96px] object-contain rounded-full transition-all duration-300"
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
/* Figma API: CM Card Subtract (44537:23153) fill=#F0F0F0, 3x DROP_SHADOW:
   7px 6px 7px -6px rgba(0,0,0,0.08), 6px 6px 18px -14px rgba(135,135,135,0.3),
   -5px -5px 15px rgba(252,252,252,1) — standard neumorphic. NO gradient, NO blur. */
.collaborate-card {
  background: #f0f0f0;
  box-shadow:
    7px 6px 7px -6px rgba(0, 0, 0, 0.08),
    6px 6px 18px -14px rgba(135, 135, 135, 0.3),
    -5px -5px 15px 0px #fcfcfc;
}

/* Figma API: active dot — fill #81edb9, INNER_SHADOW(2,2,2px white 40%) + INNER_SHADOW(-4,-4,5px rgba(59,58,118,0.2)) */
.dot-active {
  background: #81edb9;
  box-shadow:
    inset 2px 2px 2px rgba(255, 255, 255, 0.4),
    inset -4px -4px 5px rgba(59, 58, 118, 0.2);
}

/* Figma API: inactive dot — fill #aeaeb2, INNER_SHADOW(0,2.3px,2.3px black 10%) */
.dot-inactive {
  background: #aeaeb2;
  box-shadow: inset 0 2.3px 2.3px rgba(0, 0, 0, 0.1);
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
