<template>
  <section id="products" class="py-24 relative overflow-hidden" style="background: radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.35) 0%, rgba(240,240,240,0) 55%);">
    <!-- Figma Vector 9 (44537:23083): 32px neumorphic mint-green stroke curve + Ellipse 185 endpoint orb -->
    <!-- Vector 9: x=501,y=1918 → relative to section y=1913 → top=5px, left=501/1920=~26% -->
    <!-- Ellipse 185: x=489,y=2497 → relative to section → top=584px, left=489/1920=~25.5%, 26×26px -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <img
        src="/assets/product-curve-v9.svg"
        alt=""
        class="absolute"
        style="left: 26%; top: 0; width: 33.4%; opacity: 1;"
      />
      <!-- Ellipse 185: white neumorphic orb at curve endpoint (26×26px) per Figma -->
      <div
        class="absolute product-endpoint-orb"
        style="left: 25.5%; top: 37%; width: 26px; height: 26px; border-radius: 50%; background: white;"
      ></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <!-- Title -->
      <h2
        class="text-center mb-4"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: clamp(36px, 6vw, 80px); font-weight: 300; color: #606060; letter-spacing: clamp(3px, 0.5vw, 9.6px);"
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
            <div class="w-36 md:w-48 h-[320px] md:h-[400px] bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden relative">
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

          <!-- CTA Circle per Figma: 260×260px GLASS circle, curved text "點擊了解更多" 24px/ls4.32 #81EDB9, large arrow inside -->
          <div class="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-30">
            <div class="cta-circle w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform relative">
              <!-- Curved text path around circle -->
              <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <defs>
                  <path id="cta-text-path" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" fill="none" />
                </defs>
                <text fill="#81EDB9" font-family="'Noto Sans TC', sans-serif" font-size="18" font-weight="400" letter-spacing="3.5">
                  <textPath href="#cta-text-path" startOffset="15%">點擊了解更多</textPath>
                </text>
              </svg>
              <!-- Large arrow icon per Figma API: fa6-solid:arrow-up (44537:23113) — exported as right-pointing arrow, #81EDB9 at 71% opacity -->
              <svg width="64" height="55" viewBox="0 0 112 97" fill="none" class="mt-2">
                <path d="M109.656 53.6717C112.781 50.5466 112.781 45.4713 109.656 42.3461L69.6539 2.34388C66.5287 -0.781295 61.4534 -0.781296 58.3283 2.34388C55.2031 5.46905 55.2031 10.5443 58.3283 13.6695L84.7047 40.021L8.00047 40.021C3.57522 40.021 2.09838e-05 43.5962 2.07904e-05 48.0214C2.05969e-05 52.4467 3.57522 56.0219 8.00047 56.0219L84.6797 56.0219L58.3533 82.3733C55.2281 85.4985 55.2281 90.5738 58.3533 93.699C61.4784 96.8241 66.5537 96.8241 69.6789 93.699L109.681 53.6967L109.656 53.6717Z" fill="#81EDB9" opacity="0.71"/>
              </svg>
            </div>
          </div>

          <!-- Phone 2 (front, tilted CCW ~-10deg per Figma — DO NOT change to clockwise) — Home/Dashboard page per Figma -->
          <div class="relative z-20 -ml-12" :style="{ transform: `translateY(${scrollY * 0.015}px) rotate(-10deg)` }">
            <div class="w-40 md:w-56 h-[360px] md:h-[460px] bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden relative">
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

        <!-- Glass orbs per Figma API: 3 transparent spheres with GLASS effect + INNER_SHADOWs -->
        <div class="hidden md:block">
          <!-- Glass ball 1: Card ball (346px in Figma, scaled ~180px) — top-left at 8.3%, 12% per Figma -->
          <div class="glass-ball glass-ball--green absolute left-[2%] top-[10%] w-[180px] h-[180px] z-20">
            <!-- Vector 252: white feathered highlight arc per Figma (44537:23105) — white 36% fill with foreground blur -->
            <svg class="absolute -top-[12%] -left-[12%] w-[130%] h-[130%] pointer-events-none z-30" viewBox="0 0 264 237" fill="none">
              <g filter="url(#v252blur1)"><path d="M216.314 41.9463C78.7162 26.4315 41.6988 123.83 40.3898 174.469C38.368 193.863 68.0448 212.745 83.5856 174.469C92.4843 152.552 110.763 128.932 130.184 112.55C156.128 90.6669 181.758 78.7939 203.748 69.7436C221.341 62.5033 231.478 48.9288 216.314 41.9463Z" fill="white" fill-opacity="0.36"/></g>
              <defs><filter id="v252blur1" x="0" y="0" width="264" height="237" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape"/><feGaussianBlur stdDeviation="20" result="blur"/></filter></defs>
            </svg>
            <div class="glass-ball-inner glass-ball-inner--green rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <!-- Simplified card content inside sphere per Figma Frame 48095644 (cr=333, clips to circle) -->
              <div class="rotate-[8deg] scale-[0.6]">
                <div class="w-[160px] bg-white/80 rounded-[16px] p-3 shadow-lg">
                  <div class="flex items-center gap-1.5 mb-2">
                    <div class="w-5 h-5 rounded-md bg-[#4ECBA5]/30 flex items-center justify-center">
                      <div class="w-3 h-3 rounded-sm bg-[#4ECBA5]/50"></div>
                    </div>
                    <span class="text-[9px] text-[#4ECBA5] font-bold tracking-wide">Open NCCU</span>
                  </div>
                  <div class="text-[11px] text-[#606060] font-bold mb-0.5">我是政大人</div>
                  <div class="text-[9px] text-[#888]">XXX 系</div>
                  <div class="text-[8px] text-[#999] mb-1">@iamfrom_nccu</div>
                  <div class="w-[32px] h-[32px] bg-gray-200/40 rounded-sm grid grid-cols-4 gap-px p-0.5">
                    <div v-for="i in 16" :key="'qr1-'+i" class="rounded-[1px]" :class="[2,3,5,8,9,12,14,15].includes(i) ? 'bg-gray-500/40' : 'bg-transparent'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Glass ball 2: Weather ball (294px in Figma, scaled ~150px) — right at 75.8%, 38.8% per Figma -->
          <div class="glass-ball glass-ball--blue absolute right-[5%] top-[36%] w-[150px] h-[150px]">
            <!-- Vector 252: white feathered highlight arc per Figma (44537:23100) -->
            <svg class="absolute -top-[15%] -left-[15%] w-[130%] h-[130%] pointer-events-none z-30" viewBox="0 0 236 213" fill="none">
              <g filter="url(#v252blur2)"><path d="M189.433 41.703C72.8567 28.5715 41.4947 111.008 40.3857 153.868C38.6728 170.282 63.8156 186.264 76.9821 153.868C84.5214 135.318 100.008 115.326 116.462 101.461C138.442 82.9393 160.156 72.8902 178.787 65.2302C193.692 59.1021 202.28 47.6129 189.433 41.703Z" fill="white" fill-opacity="0.36"/></g>
              <defs><filter id="v252blur2" x="0" y="0" width="236" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape"/><feGaussianBlur stdDeviation="20" result="blur"/></filter></defs>
            </svg>
            <div class="glass-ball-inner glass-ball-inner--blue rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <div class="rotate-[11deg]">
                <svg width="100" height="88" viewBox="0 0 80 70" fill="none">
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

          <!-- Glass ball 3: Mahjong ball (294px in Figma, scaled ~150px) — right-bottom at 65.7%, 67.9% per Figma -->
          <div class="glass-ball glass-ball--green absolute right-[18%] bottom-[15%] w-[150px] h-[150px]">
            <!-- Vector 252: white feathered highlight arc per Figma (44537:23109) -->
            <svg class="absolute -top-[15%] -left-[15%] w-[130%] h-[130%] pointer-events-none z-30" viewBox="0 0 236 213" fill="none">
              <g filter="url(#v252blur3)"><path d="M189.433 41.703C72.8567 28.5715 41.4947 111.008 40.3857 153.868C38.6728 170.282 63.8156 186.264 76.9821 153.868C84.5214 135.318 100.008 115.326 116.462 101.461C138.442 82.9393 160.156 72.8902 178.787 65.2302C193.692 59.1021 202.28 47.6129 189.433 41.703Z" fill="white" fill-opacity="0.36"/></g>
              <defs><filter id="v252blur3" x="0" y="0" width="236" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="bg"/><feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape"/><feGaussianBlur stdDeviation="20" result="blur"/></filter></defs>
            </svg>
            <div class="glass-ball-inner glass-ball-inner--green rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <div class="rotate-[-14deg]">
                <!-- Mahjong tile representation -->
                <div class="w-[60px] h-[72px] bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
                  <div class="text-center">
                    <div class="text-[24px] leading-none">🀄</div>
                    <div class="text-[8px] text-[#666] mt-1 font-medium">麻將</div>
                  </div>
                </div>
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

      <!-- Bottom slide indicators per Figma Frame 48095645: 3 rectangles (497×97px total, cr=20, clipsContent) with glass overlay -->
      <div class="relative flex justify-center mt-4">
        <div class="slide-indicators-container flex overflow-hidden rounded-[20px]" style="width: min(497px, 90vw); height: min(97px, 18vw);">
          <!-- Rect 1: image fill with green stroke (active indicator) -->
          <div class="flex-1 bg-[#d9d9d9] border-l border-[#81edb9]" style="border-radius: 20px 0 0 20px;"></div>
          <!-- Rect 2: #d9d9d9 fill -->
          <div class="flex-1 bg-[#d9d9d9]"></div>
          <!-- Rect 3: #c9c9c9 fill (slightly darker) -->
          <div class="flex-1 bg-[#c9c9c9]" style="border-radius: 0 20px 20px 0;"></div>
        </div>
        <!-- Glass overlay rectangle per Figma: 188×119px, cr=25, GLASS effect, positioned over left indicator -->
        <div class="absolute left-1/2 -translate-x-[248px] -top-[11px] slide-glass-overlay" style="width: min(188px, 36vw); height: min(119px, 22vw); border-radius: 25px;"></div>
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
/* Figma: watermark text is italic/oblique with 3D embossed effect */
.watermark-text {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(48px, 8vw, 108px);
  font-weight: 700;
  font-style: italic;
  /* Figma: fill #f0f0f0 (same as bg), DROP_SHADOW(4,4,8px, black 16%) + DROP_SHADOW(-5,-5,8px, white 100%) = neumorphic emboss */
  color: #f0f0f0;
  text-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.16),
    -5px -5px 8px rgba(255, 255, 255, 1);
  letter-spacing: 9.72px;
}

/* Figma CTA: 260×260 circle, fill white 32% opacity, GLASS effect, cornerRadius=200 */
.cta-circle {
  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow:
    0 4px 40px rgba(200, 230, 215, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Figma glass orb frame: DROP_SHADOW(31,30,200px teal40%) + DROP_SHADOW(0,4,250px teal30%) */
.glass-ball--green {
  filter:
    drop-shadow(31px 30px 200px rgba(112, 176, 144, 0.4))
    drop-shadow(0px 4px 250px rgba(169, 255, 214, 0.3));
}
.glass-ball--blue {
  filter:
    drop-shadow(31px 30px 200px rgba(119, 166, 209, 0.4))
    drop-shadow(0px 4px 250px rgba(188, 223, 255, 0.3));
}

/* Figma glass orb ellipse: fill black 0.4% + GLASS effect + 3× INNER_SHADOW */
.glass-ball-inner {
  /* Near-transparent fill per Figma (black at 0.4% opacity) */
  background: rgba(0, 0, 0, 0.004);
  /* GLASS effect = backdrop-blur + saturation boost */
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
/* Green-tint orbs (Card ball + Mahjong ball) per Figma API */
.glass-ball-inner--green {
  box-shadow:
    inset -8px -8px 19.3px rgba(0, 0, 0, 0.1),
    inset -27px -24px 61.5px rgba(129, 237, 185, 0.25),
    inset 0px -15px 63px rgba(133, 210, 173, 0.25);
}
/* Blue-tint orb (Weather ball) per Figma API — INNER_SHADOW uses blue-teal tints */
.glass-ball-inner--blue {
  box-shadow:
    inset -8px -8px 19.3px rgba(0, 0, 0, 0.1),
    inset -27px -24px 61.5px rgba(188, 223, 255, 0.27),
    inset 0px -15px 63px rgba(148, 210, 240, 0.25);
}

.glass-arc-svg {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(200, 230, 215, 0.15));
}

/* Figma: slide indicators container + glass overlay */
.slide-indicators-container {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.slide-glass-overlay {
  background: rgba(0, 0, 0, 0.004);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  pointer-events: none;
}

/* Figma Ellipse 185 (44537:23084): white 26×26 orb with neumorphic inner shadows + drop shadow + layer blur */
.product-endpoint-orb {
  box-shadow:
    inset -5px -5px 10px rgba(89, 204, 149, 1),
    inset 3px 3px 10px rgba(255, 255, 255, 0.7),
    1px 1px 5px 1px rgba(124, 228, 178, 0.5);
  filter: blur(1.5px);
}

@media (max-width: 768px) {
  .watermark-text {
    font-size: 56px;
  }
  .glass-arc-svg {
    display: none;
  }
  .slide-indicators-container {
    width: 300px !important;
    height: 60px !important;
  }
  .slide-glass-overlay {
    display: none;
  }
}
</style>
