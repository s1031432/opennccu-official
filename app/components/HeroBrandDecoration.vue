<template>
  <!-- Brand decorative geometric lines for Hero section — per Figma -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <svg
      class="absolute top-0 right-0 h-full"
      :style="{ width: '75%' }"
      viewBox="800 -100 1000 1350"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- 3D tube emboss filter -->
        <filter id="hero-tube" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="bg" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend in2="bg" result="shadow" />
          <feBlend in="SourceGraphic" in2="shadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="ha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend in2="shape" result="final" />
        </filter>

        <!-- Endpoint dot filter -->
        <filter id="hero-dot" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="bg" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="ha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="bg" result="shadow" />
          <feBlend in="SourceGraphic" in2="shadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2" />
          <feOffset dx="-3" dy="-3" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="ha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
          <feBlend in2="shape" />
        </filter>

        <!-- Ghost filter -->
        <filter id="hero-ghost" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="bg" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="ha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
          <feBlend in2="bg" result="shadow" />
          <feBlend in="SourceGraphic" in2="shadow" />
        </filter>

        <!-- Diagonal groove filter -->
        <filter id="hero-groove" filterUnits="userSpaceOnUse" x="-50" y="-50" width="2020" height="1540" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="bg" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="ha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend in2="bg" result="shadow" />
          <feBlend in="SourceGraphic" in2="shadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2" />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="ha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend in2="shape" />
        </filter>

        <!-- The closed diamond path (reusable) -->
        <!-- Diamond: 4 vertices, tilted ~45°, rounded corners via stroke-linejoin -->
        <!-- Center ~(1200, 500), size ~600x750 -->
      </defs>

      <!-- ═══ Layer 1: Ghost/echo shapes (furthest back) ═══ -->

      <!-- Ghost diamond (larger, pale, offset up-right) -->
      <g filter="url(#hero-ghost)">
        <path
          d="M1200 80L1480 500L1200 920L920 500Z"
          stroke="#e0e0e0"
          stroke-width="32"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          opacity="0.55"
        />
      </g>

      <!-- Ghost U-curve (pale, offset) -->
      <g filter="url(#hero-ghost)">
        <path
          d="M1370 1100L1370 560C1370 350 1560 200 1750 200C1940 200 2130 350 2130 560L2130 800"
          stroke="#e0e0e0"
          stroke-width="32"
          stroke-linecap="round"
          fill="none"
          opacity="0.4"
        />
      </g>

      <!-- ═══ Layer 2: Diagonal groove lines ═══ -->
      <!-- (rendered in separate full-viewport SVG below) -->

      <!-- ═══ Layer 3: Main diamond — CLOSED rhombus ═══ -->
      <g filter="url(#hero-tube)">
        <path
          d="M1200 100L1470 500L1200 900L930 500Z"
          stroke="#8FD4B4"
          stroke-width="38"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </g>
      <!-- Diamond highlight edge -->
      <path
        d="M1197 97L1467 497L1197 897L927 497Z"
        stroke="#ffffff"
        stroke-opacity="0.32"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />

      <!-- ═══ Layer 4: U-curve (IN FRONT of diamond) ═══ -->
      <g filter="url(#hero-tube)">
        <path
          d="M1360 1080L1360 550C1360 340 1550 190 1740 190C1930 190 2120 340 2120 550L2120 790"
          stroke="#8FD4B4"
          stroke-width="38"
          stroke-linecap="round"
          fill="none"
        />
      </g>
      <!-- U-curve highlight edge -->
      <path
        d="M1357 1077L1357 547C1357 337 1547 187 1737 187C1927 187 2117 337 2117 547L2117 787"
        stroke="#ffffff"
        stroke-opacity="0.28"
        stroke-width="10"
        stroke-linecap="round"
        fill="none"
      />

      <!-- ═══ Endpoint dots ═══ -->
      <!-- Diamond bottom vertex -->
      <g filter="url(#hero-dot)">
        <circle cx="1200" cy="900" r="18" fill="#9DD5BE" />
        <circle cx="1196" cy="896" r="6" fill="white" fill-opacity="0.55" />
      </g>

      <!-- U-curve left leg bottom -->
      <g filter="url(#hero-dot)">
        <circle cx="1360" cy="1080" r="18" fill="#9DD5BE" />
        <circle cx="1356" cy="1076" r="6" fill="white" fill-opacity="0.55" />
      </g>

      <!-- U-curve right leg bottom -->
      <g filter="url(#hero-dot)">
        <circle cx="2120" cy="790" r="18" fill="#9DD5BE" />
        <circle cx="2116" cy="786" r="6" fill="white" fill-opacity="0.55" />
      </g>
    </svg>

    <!-- Diagonal neumorphic groove lines (full viewport) -->
    <svg
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1440"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Line 1 -->
      <line x1="1550" y1="-50" x2="550" y2="1500" stroke="#e8e8e8" stroke-width="3" stroke-linecap="round" filter="url(#hero-groove)" />
      <line x1="1549" y1="-51" x2="549" y2="1499" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />
      <!-- Line 2 (parallel, offset) -->
      <line x1="1650" y1="-100" x2="650" y2="1450" stroke="#e8e8e8" stroke-width="2.5" stroke-linecap="round" filter="url(#hero-groove)" />
      <line x1="1649" y1="-101" x2="649" y2="1449" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" />
      <!-- Line 3 (thinner, further offset) -->
      <line x1="1450" y1="0" x2="450" y2="1550" stroke="#ebebeb" stroke-width="2" stroke-linecap="round" filter="url(#hero-groove)" />
      <line x1="1449" y1="-1" x2="449" y2="1549" stroke="white" stroke-opacity="0.35" stroke-width="1" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>
