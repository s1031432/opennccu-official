<template>
  <!-- Hero brand decoration — exact Figma elements from node 44537:23063 (Home frame) -->
  <!-- Logo vectors + Lines 9-12 + Vectors 7-8 + Ellipses 183-185 -->
  <!-- All coordinates relative to 1920×1440 viewBox (Home frame at y=19 in canvas) -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <svg
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1440"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Neumorphic groove filter for #F0F0F0 strokes (Lines 9/10, Vector 7) -->
        <!-- Figma: DROP_SHADOW(8,8,15px white 40%) + INNER_SHADOW(8,8,15px black 5-7%) -->
        <filter id="hero-groove-gray" filterUnits="userSpaceOnUse" x="-50" y="-50" width="2020" height="1540" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>

        <!-- Same neumorphic filter for green strokes (Lines 11/12, Vector 8) -->
        <filter id="hero-groove-green" filterUnits="userSpaceOnUse" x="-50" y="-50" width="2020" height="1540" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>

        <!-- Ellipse neumorphic filter -->
        <filter id="hero-ellipse" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="bg" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="ha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.35 0 0 0 0 0.8 0 0 0 0 0.58 0 0 0 0.5 0" />
          <feBlend in2="bg" result="shadow" />
          <feBlend in="SourceGraphic" in2="shadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2" />
          <feOffset dx="-5" dy="-5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="ha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.35 0 0 0 0 0.8 0 0 0 0 0.58 0 0 0 1 0" />
          <feBlend in2="shape" />
        </filter>
      </defs>

      <!-- ═══ LAYER 1: Neumorphic groove lines (behind logo) ═══ -->

      <!-- Line 9 (gray) — Figma: x=843, y=4→y_rel=-15, w=666, h=992 -->
      <g filter="url(#hero-groove-gray)" transform="translate(843, -15)">
        <path d="M411.848 23.0252L27.3736 778.869C20.3799 792.618 21.9068 809.162 31.2988 821.399L180.63 1015.96" stroke="#F0F0F0" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- Line 10 (gray) — Figma: x=791, y=347→y_rel=328, w=680, h=682 -->
      <g filter="url(#hero-groove-gray)" transform="translate(791, 328)">
        <path d="M104.033 23.0074L251.673 214.641C261.175 226.975 262.659 243.701 255.478 257.516L23.0099 704.703" stroke="#F0F0F0" stroke-width="32" stroke-linecap="round" />
      </g>

      <!-- Line 11 (green 35%) — Figma: x=843, y=241→y_rel=222, w=545, h=755 -->
      <g filter="url(#hero-groove-green)" transform="translate(843, 222)">
        <path d="M290.991 23.0065L27.3597 540.702C20.3625 554.442 21.8851 570.981 31.2734 583.213L180.476 777.609" stroke="#77E6B0" stroke-opacity="0.35" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- Line 12 (green 35%) — Figma: x=791, y=347→y_rel=328, w=680, h=682 -->
      <g filter="url(#hero-groove-green)" transform="translate(791, 328)">
        <path d="M104.033 23.0074L251.673 214.641C261.175 226.975 262.659 243.701 255.478 257.516L23.0099 704.703" stroke="#77E6B0" stroke-opacity="0.35" stroke-width="32" stroke-linecap="round" />
      </g>

      <!-- Vector 7 (gray) — Figma: x=1161, y=591→y_rel=572, w=500, h=1168 -->
      <g filter="url(#hero-groove-gray)" transform="translate(1161, 572)">
        <path d="M282.021 551.535L129.84 350.746C120.482 338.4 119.095 321.762 126.277 308.036L238.019 94.506C255.686 68.8377 305.154 23.0018 362.527 23.0015C411.53 23.0012 446.032 42.0027 461.533 54.0037C474.7 64.1976 497.535 84.5057 513.536 125.008C529.537 165.511 524.037 212.514 506.036 247.516C491.635 275.518 178.015 887.89 23.0049 1190.58" stroke="#F0F0F0" stroke-width="32" stroke-linecap="round" />
      </g>

      <!-- Vector 8 (green 35%) — Figma: x=1252, y=591→y_rel=572, w=408, h=529 -->
      <g filter="url(#hero-groove-green)" transform="translate(1252, 572)">
        <path d="M183.449 551.966L31.1481 351.02C21.7836 338.665 20.3947 322.013 27.5829 308.277L139.412 94.5799C157.093 68.8915 206.599 23.0198 264.017 23.0194C313.058 23.0191 347.587 42.0355 363.1 54.0459C376.278 64.2478 399.131 84.5717 415.144 125.106C431.158 165.64 425.653 212.68 407.638 247.71" stroke="#77E6B0" stroke-opacity="0.35" stroke-width="32" stroke-linecap="round" />
      </g>

      <!-- ═══ LAYER 2: Logo (two filled mint green shapes) ═══ -->

      <!-- Logo Vector 1 (left diamond) — Figma: x=856, y=337→y_rel=318, w=528, h=675 -->
      <!-- Fill: #7CE4B2 (r=0.486 g=0.894 b=0.698) -->
      <!-- Path local coords max ~274.5×617.6, needs scale to fit 528×675 bounding box -->
      <g transform="translate(856, 318) scale(1.922, 1.092)">
        <path d="M252.762 616.231L9.07716 502.315C6.36143 501.045 4.0657 499.033 2.4583 496.515C0.850902 493.997 -0.00176251 491.077 2.73535e-06 488.095L2.73535e-06 15.1537C-0.00135404 12.6011 0.646823 10.0895 1.8843 7.85226C3.12179 5.61505 4.90842 3.72483 7.07825 2.35719C9.24808 0.989559 11.7307 0.18887 14.2955 0.0295359C16.8602 -0.129799 19.4239 0.357395 21.7484 1.44582L265.433 115.362C268.149 116.629 270.446 118.638 272.055 121.154C273.665 123.669 274.521 126.588 274.522 129.569L274.522 602.523C274.521 605.076 273.871 607.587 272.632 609.824C271.393 612.061 269.606 613.951 267.435 615.318C265.264 616.685 262.781 617.486 260.216 617.646C257.651 617.805 255.087 617.318 252.762 616.231Z" fill="#7CE4B2" />
      </g>

      <!-- Logo Vector 2 (right diamond) — Figma: x=1214, y=558→y_rel=539, w=477, h=577 -->
      <!-- Path local coords max ~274.5×507, needs scale to fit 477×577 bounding box -->
      <g transform="translate(1214, 539) scale(1.738, 1.140)">
        <path d="M252.774 506.401L9.08942 390.96C6.37232 389.674 4.07487 387.636 2.46538 385.084C0.855897 382.532 0.000816066 379.572 8.36072e-06 376.55L8.36072e-06 138.234C-0.00637629 119.818 3.64403 101.587 10.7367 84.6114C17.8294 67.6359 28.2213 52.2587 41.3016 39.3836C54.3819 26.5085 69.8868 16.3953 86.9051 9.63811C103.923 2.88096 122.112 -0.383748 140.401 0.0358809C176.252 0.861723 210.358 15.778 235.423 41.5936C260.488 67.4092 274.522 102.074 274.522 138.173L274.522 492.559C274.515 495.142 273.861 497.681 272.62 499.941C271.379 502.202 269.592 504.11 267.423 505.491C265.255 506.871 262.775 507.678 260.215 507.837C257.654 507.996 255.095 507.502 252.774 506.401Z" fill="#7CE4B2" />
      </g>

      <!-- ═══ LAYER 3: Endpoint ellipses ═══ -->

      <!-- Ellipse 183 — Figma: x=1158, y=228→y_rel=209, 26×26 fill #F7F7F7 -->
      <g filter="url(#hero-ellipse)">
        <circle cx="1171" cy="222" r="13" fill="#F7F7F7" />
      </g>

      <!-- Ellipse 184 — Figma: x=1077, y=1015→y_rel=996, 26×26 fill white -->
      <g filter="url(#hero-ellipse)">
        <circle cx="1090" cy="1009" r="13" fill="white" />
      </g>

      <!-- Ellipse 185 — Figma: x=1631, y=801→y_rel=782, 26×26 fill white -->
      <g filter="url(#hero-ellipse)">
        <circle cx="1644" cy="795" r="13" fill="white" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>
