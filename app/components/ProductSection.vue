<template>
  <section id="products" class="py-24 relative overflow-hidden">
    <!-- Decorative flowing mint-green tubular curve per Figma -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <svg class="absolute left-0 top-0 w-full h-full" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="product-tube-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#a8e6cf" stop-opacity="0.7" />
            <stop offset="50%" stop-color="#77e5b0" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#4ECBA5" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient id="product-tube-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
          <filter id="tube-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <!-- Main thick curve -->
        <path
          d="M-50 180 C150 120, 300 350, 500 280 S800 100, 950 320 C1050 440, 1100 600, 1250 550"
          stroke="url(#product-tube-grad)"
          stroke-width="8"
          stroke-linecap="round"
          fill="none"
          filter="url(#tube-glow)"
        />
        <!-- Thinner highlight line (3D depth) -->
        <path
          d="M-50 177 C150 117, 300 347, 500 277 S800 97, 950 317 C1050 437, 1100 597, 1250 547"
          stroke="url(#product-tube-highlight)"
          stroke-width="2.5"
          stroke-linecap="round"
          fill="none"
        />
        <!-- Glossy endpoint dots -->
        <circle cx="500" cy="280" r="6" fill="#77e5b0" opacity="0.6" />
        <circle cx="950" cy="320" r="5" fill="#4ECBA5" opacity="0.5" />
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <!-- Title -->
      <h2
        class="text-center mb-4"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060; letter-spacing: 9.6px;"
      >
        我們打造了⋯
      </h2>

      <!-- Watermark text + phone mockups -->
      <div class="relative mt-16">
        <!-- OPEN NCCU watermark (top right) - neumorphic emboss -->
        <div class="absolute right-0 -top-4 leading-none select-none tracking-wide text-right">
          <span class="watermark-text">OPEN</span>
          <br />
          <span class="watermark-text">NCCU</span>
        </div>
        <!-- WEB APP watermark (bottom left) - neumorphic emboss -->
        <div class="absolute left-0 bottom-16 leading-none select-none tracking-wide">
          <span class="watermark-text">WEB</span>
          <br />
          <span class="watermark-text">APP</span>
        </div>

        <!-- Phone mockups center — Figma: BOTH phones tilt counter-clockwise, overlap ~20-25% -->
        <!-- DO NOT make right phone clockwise. Both are CCW per Figma. -->
        <div class="flex justify-center items-end h-[520px] relative z-10">
          <!-- Phone 1 (back, tilted more CCW ~-15deg per Figma) — Profile page per Figma -->
          <div class="relative z-10 -mr-12" :style="{ transform: `translateY(${-scrollY * 0.02}px) rotate(-15deg)` }">
            <div class="w-48 h-[400px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden relative">
              <!-- Dynamic Island notch -->
              <div class="absolute top-0 left-0 right-0 z-10">
                <div class="mx-auto w-20 h-5 bg-black rounded-b-2xl"></div>
              </div>
              <div class="h-full bg-gradient-to-b from-[#5CB8A5] via-[#8DD5C4] to-white pt-7 flex flex-col">
                <!-- Header: Open NCCU branding -->
                <div class="flex items-center gap-1.5 px-3 mb-3">
                  <div class="w-4 h-4 rounded-md bg-white/30 flex items-center justify-center">
                    <span class="text-[6px] text-white font-bold">N</span>
                  </div>
                  <span class="text-[8px] text-white font-semibold tracking-wide">Open NCCU</span>
                </div>
                <!-- User avatar area -->
                <div class="flex flex-col items-center mb-2">
                  <div class="w-12 h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center mb-1">
                    <span class="text-[16px] text-[#3d3d3d] font-bold" style="font-family: 'Noto Sans TC', sans-serif;">趙</span>
                  </div>
                  <span class="text-[7px] text-[#888]">@chaoyun</span>
                </div>
                <!-- Profile menu items -->
                <div class="flex-1 bg-white rounded-t-2xl px-2 py-2 space-y-1.5 overflow-hidden">
                  <div class="flex items-center gap-1.5 px-2 py-1.5 bg-[#F0FAF6] rounded-lg">
                    <div class="w-3.5 h-3.5 rounded bg-[#4ECBA5]/20 flex items-center justify-center">
                      <span class="text-[6px]">📋</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-[7px] text-[#2D2D2D] font-medium truncate">個人資料編定</div>
                      <div class="text-[5px] text-[#999] truncate">109405044@s.nccu.edu.tw</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-1.5 px-2 py-1.5 bg-[#F0FAF6] rounded-lg">
                    <div class="w-3.5 h-3.5 rounded bg-[#4ECBA5]/20 flex items-center justify-center">
                      <span class="text-[6px]">🏷</span>
                    </div>
                    <div class="text-[7px] text-[#2D2D2D] font-medium">Opentag・新增個人標籤</div>
                  </div>
                  <div class="flex items-center gap-1.5 px-2 py-1.5 bg-[#F0FAF6] rounded-lg">
                    <div class="w-3.5 h-3.5 rounded bg-[#4ECBA5]/20 flex items-center justify-center">
                      <span class="text-[6px]">📅</span>
                    </div>
                    <div class="text-[7px] text-[#2D2D2D] font-medium">編輯固有時間組</div>
                  </div>
                  <div class="flex items-center gap-1.5 px-2 py-1.5 bg-[#F0FAF6] rounded-lg">
                    <div class="w-3.5 h-3.5 rounded bg-[#4ECBA5]/20 flex items-center justify-center">
                      <span class="text-[6px]">🎓</span>
                    </div>
                    <div class="text-[7px] text-[#2D2D2D] font-medium">學生共編行事曆</div>
                  </div>
                  <!-- QR code area -->
                  <div class="flex justify-center pt-1">
                    <div class="w-[32px] h-[32px] bg-[#E8F5F0] rounded grid grid-cols-5 gap-px p-1">
                      <div v-for="i in 25" :key="i" class="rounded-[0.5px]" :class="[1,2,3,5,6,10,11,13,15,16,20,21,23,24,25].includes(i) ? 'bg-[#3d3d3d]/50' : 'bg-transparent'"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Circle Button (between phones) per Figma — ~80-100px glassmorphic circle with green arrow + 點擊 label at 2 o'clock -->
          <div class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-2">
            <div class="cta-circle w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" class="opacity-80">
                <path d="M8 14H20M20 14L15 9M20 14L15 19" stroke="#4ECBA5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span style="font-family: 'Noto Sans TC', sans-serif; font-size: 12px; font-weight: 400; color: #4ECBA5; letter-spacing: 1.5px;">點擊</span>
          </div>

          <!-- Phone 2 (front, tilted CCW ~-10deg per Figma — DO NOT change to clockwise) — Home/Dashboard page per Figma -->
          <div class="relative z-20 -ml-12" :style="{ transform: `translateY(${scrollY * 0.015}px) rotate(-10deg)` }">
            <div class="w-56 h-[460px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden relative">
              <!-- Dynamic Island notch -->
              <div class="absolute top-0 left-0 right-0 z-10">
                <div class="mx-auto w-24 h-5 bg-black rounded-b-2xl"></div>
              </div>
              <div class="h-full bg-gradient-to-b from-[#6DC5A8] via-[#A8E0CC] to-white pt-7 px-3 pb-2 flex flex-col">
                <!-- Header -->
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-1">
                    <div class="w-4 h-4 rounded-md bg-white/30 flex items-center justify-center">
                      <span class="text-[6px] text-white font-bold">N</span>
                    </div>
                  </div>
                  <span class="text-[7px] text-[#4ECBA5] font-medium bg-white/60 px-2 py-0.5 rounded-full">點擊 ↓</span>
                </div>
                <!-- Weather widget (white card) -->
                <div class="bg-white rounded-xl p-3 mb-3 shadow-sm">
                  <div class="flex items-start justify-between mb-1">
                    <div>
                      <div class="text-[24px] font-bold text-[#2D2D2D] leading-none">20°</div>
                      <div class="flex items-center gap-1 mt-0.5">
                        <span class="text-[7px] text-red-400">▲ 22°</span>
                        <span class="text-[7px] text-blue-400">▼ 18°</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <span class="text-xl">☁️</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-1 mt-1">
                    <span class="text-[7px] text-[#7A7A7A] bg-[#F0FAF6] px-1.5 py-0.5 rounded-full">政大今天還涼下雨</span>
                  </div>
                </div>
                <!-- 政大生存秘笈 section -->
                <div class="flex items-center gap-1 mb-2">
                  <span class="text-[8px]">📋</span>
                  <span class="text-[9px] text-[#2D2D2D] font-bold" style="font-family: 'Noto Sans TC', sans-serif;">政大生存秘笈</span>
                </div>
                <!-- List items -->
                <div class="space-y-1.5 flex-1 overflow-hidden">
                  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-2.5 flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0">
                      <span class="text-[10px]">🏫</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-[8px] text-[#2D2D2D] font-semibold">探索新生村</div>
                      <div class="text-[6px] text-[#7A7A7A] truncate">大學生活知識庫，新手攻略帶你走</div>
                    </div>
                    <span class="text-[8px] text-[#ccc]">›</span>
                  </div>
                  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-2.5 flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0">
                      <span class="text-[10px]">🏠</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-[8px] text-[#2D2D2D] font-semibold">外地生存</div>
                      <div class="text-[6px] text-[#7A7A7A] truncate">食衣住行都搞定，異地生活好安心</div>
                    </div>
                    <span class="text-[8px] text-[#ccc]">›</span>
                  </div>
                  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-2.5 flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0">
                      <span class="text-[10px]">🎓</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-[8px] text-[#2D2D2D] font-semibold">畢業規劃</div>
                      <div class="text-[6px] text-[#7A7A7A] truncate">大學規劃不用怕，雙輔交換都搞定</div>
                    </div>
                    <span class="text-[8px] text-[#ccc]">›</span>
                  </div>
                </div>
                <!-- Bottom bar hint -->
                <div class="mt-1 bg-[#F5F5F5] rounded-lg px-2 py-1 flex items-center gap-1">
                  <span class="text-[7px]">🎄</span>
                  <span class="text-[7px] text-[#2D2D2D] font-medium">聖誕市集集點卡</span>
                  <span class="text-[7px] text-[#ccc] ml-auto">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating ID card (upper-left, per Figma — standalone card with green glow, NOT inside glass orb) -->
        <div class="hidden md:block">
          <div class="absolute -left-4 top-4 z-20">
            <!-- Green ambient glow behind card -->
            <div class="absolute -inset-6 rounded-2xl" style="background: radial-gradient(ellipse at center, rgba(129, 237, 185, 0.25) 0%, rgba(78, 203, 165, 0.08) 50%, transparent 70%); filter: blur(12px);"></div>
            <!-- Glassmorphic floating card -->
            <div class="floating-id-card w-[140px] p-3 rotate-[8deg]">
              <div class="flex items-center gap-1.5 mb-2">
                <div class="w-4 h-4 rounded-md bg-[#4ECBA5]/30 flex items-center justify-center">
                  <div class="w-2.5 h-2.5 rounded-sm bg-[#4ECBA5]/50"></div>
                </div>
                <span class="text-[8px] text-[#4ECBA5] font-bold tracking-wide">Open NCCU</span>
              </div>
              <div class="text-[10px] text-[#606060] font-bold mb-0.5">我是政大人</div>
              <div class="text-[8px] text-[#888888] mb-0.5">XXX 系</div>
              <div class="text-[7px] text-[#999999]">@iamfrom_nccu</div>
              <!-- Mini QR code placeholder -->
              <div class="mt-2 w-[36px] h-[36px] bg-gray-200/40 rounded-sm grid grid-cols-4 gap-px p-0.5">
                <div v-for="i in 16" :key="i" class="rounded-[1px]" :class="[2,3,5,8,9,12,14,15].includes(i) ? 'bg-gray-500/40' : 'bg-transparent'"></div>
              </div>
            </div>
          </div>

          <!-- Top right glass ball (weather — 3D cloud with sun & rain per Figma) — ~100-120px diameter -->
          <div class="glass-ball absolute -right-4 top-[40%] w-[120px] h-[120px]">
            <div class="glass-ball-inner rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <div class="rotate-[11deg]">
                <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
                  <!-- Sun peeking -->
                  <circle cx="58" cy="20" r="12" fill="#FFD93D" opacity="0.8" />
                  <circle cx="58" cy="20" r="8" fill="#FFE066" />
                  <!-- Cloud body -->
                  <ellipse cx="38" cy="32" rx="24" ry="14" fill="white" opacity="0.9" />
                  <ellipse cx="30" cy="34" rx="16" ry="12" fill="#e8e8e8" opacity="0.6" />
                  <ellipse cx="46" cy="30" rx="14" ry="10" fill="white" opacity="0.95" />
                  <!-- Rain drops -->
                  <line x1="28" y1="48" x2="25" y2="58" stroke="#7EC8E3" stroke-width="2" stroke-linecap="round" opacity="0.7" />
                  <line x1="36" y1="48" x2="33" y2="60" stroke="#7EC8E3" stroke-width="2" stroke-linecap="round" opacity="0.6" />
                  <line x1="44" y1="47" x2="41" y2="56" stroke="#7EC8E3" stroke-width="2" stroke-linecap="round" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Bottom right glass ball (directional signpost with 北/南 per Figma) — ~100-120px diameter -->
          <div class="glass-ball absolute right-[15%] -bottom-4 w-[120px] h-[120px]">
            <div class="glass-ball-inner rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <div class="rotate-[-14deg]">
                <svg width="70" height="90" viewBox="0 0 70 90" fill="none">
                  <!-- Pole -->
                  <rect x="33" y="10" width="4" height="70" rx="2" fill="#b0b0b0" />
                  <!-- Top sign (北) pointing right -->
                  <g>
                    <path d="M37 18 L60 18 L65 25 L60 32 L37 32 Z" fill="#4ECBA5" rx="3" />
                    <text x="48" y="28" text-anchor="middle" fill="white" font-family="'Noto Sans TC', sans-serif" font-size="11" font-weight="500">北</text>
                  </g>
                  <!-- Bottom sign (南) pointing left -->
                  <g>
                    <path d="M33 40 L10 40 L5 47 L10 54 L33 54 Z" fill="#77e5b0" rx="3" />
                    <text x="20" y="50" text-anchor="middle" fill="white" font-family="'Noto Sans TC', sans-serif" font-size="11" font-weight="500">南</text>
                  </g>
                  <!-- Base -->
                  <ellipse cx="35" cy="82" rx="12" ry="4" fill="#d0d0d0" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Large transparent glass arc/shelf under phones per Figma -->
      <div class="relative mt-[-40px] flex justify-center pointer-events-none">
        <svg class="glass-arc-svg" width="900" height="180" viewBox="0 0 900 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="arc-edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(255,255,255,0)" />
              <stop offset="20%" stop-color="rgba(255,255,255,0.6)" />
              <stop offset="50%" stop-color="rgba(255,255,255,0.8)" />
              <stop offset="80%" stop-color="rgba(255,255,255,0.6)" />
              <stop offset="100%" stop-color="rgba(255,255,255,0)" />
            </linearGradient>
            <radialGradient id="arc-fill-grad" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stop-color="rgba(255,255,255,0.08)" />
              <stop offset="60%" stop-color="rgba(255,255,255,0.03)" />
              <stop offset="100%" stop-color="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <!-- Glass body (very subtle fill) -->
          <path d="M50 160 Q450 -20 850 160" stroke="url(#arc-edge-grad)" stroke-width="2.5" fill="url(#arc-fill-grad)" />
          <!-- Inner highlight edge -->
          <path d="M80 150 Q450 0 820 150" stroke="rgba(255,255,255,0.3)" stroke-width="1" fill="none" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  scrollY: number
}>()
</script>

<style scoped>
.watermark-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 108px;
  font-weight: 700;
  color: #f0f0f0;
  text-shadow:
    1px 1px 0 rgba(255, 255, 255, 0.9),
    2px 2px 0 rgba(0, 0, 0, 0.03),
    3px 3px 0 rgba(0, 0, 0, 0.04),
    4px 4px 0 rgba(0, 0, 0, 0.05),
    5px 5px 0 rgba(0, 0, 0, 0.05),
    6px 6px 2px rgba(0, 0, 0, 0.04),
    8px 8px 6px rgba(0, 0, 0, 0.06),
    -2px -2px 4px rgba(255, 255, 255, 0.95);
  letter-spacing: 9.72px;
}

.cta-circle {
  background: radial-gradient(circle at 40% 40%, rgba(129, 237, 185, 0.25) 0%, rgba(78, 203, 165, 0.12) 60%, rgba(78, 203, 165, 0.05) 100%);
  border: 1.5px solid rgba(129, 237, 185, 0.4);
  backdrop-filter: blur(8px);
  box-shadow:
    0 4px 30px rgba(78, 203, 165, 0.15),
    inset 0 0 20px rgba(255, 255, 255, 0.2);
}

.glass-ball {
  filter: drop-shadow(0px 4px 60px rgba(169, 255, 214, 0.3));
}

.glass-ball-inner {
  background: radial-gradient(
    ellipse at 30% 30%,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(200, 237, 224, 0.3) 40%,
    rgba(169, 255, 214, 0.15) 70%,
    rgba(200, 237, 224, 0.05) 100%
  );
  box-shadow:
    0px 4px 250px 0px rgba(169, 255, 214, 0.3),
    31px 30px 200px 0px rgba(112, 175, 144, 0.4),
    inset -10px -10px 30px rgba(255, 255, 255, 0.3),
    inset 5px 5px 20px rgba(200, 237, 224, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.floating-id-card {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.glass-arc-svg {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(200, 230, 215, 0.15));
}

@media (max-width: 768px) {
  .watermark-text {
    font-size: 56px;
  }
  .glass-arc-svg {
    display: none;
  }
}
</style>
