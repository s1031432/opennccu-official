<template>
  <!-- Brand decorative geometric lines for Hero section — per Figma -->
  <!-- Only U-curve + diagonal grooves. NO chevron per designer feedback. -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <!-- Main brand shapes SVG — positioned in the RIGHT portion of viewport -->
    <svg
      class="absolute top-0 right-0 h-full"
      :style="{ width: '65%' }"
      viewBox="1200 -200 1200 1600"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- 3D tube emboss filter -->
        <filter id="hero-tube" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="bg" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="ha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend in2="bg" result="shadow" />
          <feBlend in="SourceGraphic" in2="shadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha2" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="ha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend in2="shape" />
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
      </defs>

      <!-- ═══ Ghost U-curve (behind, pale echo) ═══ -->
      <g filter="url(#hero-ghost)">
        <path
          d="M1540 1200L1540 560C1540 310 1750 130 1960 130C2170 130 2380 310 2380 560L2380 850"
          stroke="#e0e0e0"
          stroke-width="36"
          stroke-linecap="round"
          fill="none"
          opacity="0.45"
        />
      </g>

      <!-- ═══ Main U-curve ═══ -->
      <g filter="url(#hero-tube)">
        <path
          d="M1520 1180L1520 550C1520 300 1740 120 1950 120C2160 120 2380 300 2380 550L2380 840"
          stroke="#8FD4B4"
          stroke-width="40"
          stroke-linecap="round"
          fill="none"
        />
      </g>
      <!-- U-curve highlight edge -->
      <path
        d="M1517 1177L1517 547C1517 297 1737 117 1947 117C2157 117 2377 297 2377 547L2377 837"
        stroke="#ffffff"
        stroke-opacity="0.28"
        stroke-width="11"
        stroke-linecap="round"
        fill="none"
      />

      <!-- ═══ Endpoint dots ═══ -->
      <!-- U-curve left leg bottom -->
      <g filter="url(#hero-dot)">
        <circle cx="1520" cy="1180" r="20" fill="#9DD5BE" />
        <circle cx="1516" cy="1176" r="7" fill="white" fill-opacity="0.55" />
      </g>
      <!-- U-curve right leg bottom -->
      <g filter="url(#hero-dot)">
        <circle cx="2380" cy="840" r="20" fill="#9DD5BE" />
        <circle cx="2376" cy="836" r="7" fill="white" fill-opacity="0.55" />
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
      <defs>
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
      </defs>
      <line x1="1550" y1="-50" x2="550" y2="1500" stroke="#e8e8e8" stroke-width="3" stroke-linecap="round" filter="url(#hero-groove)" />
      <line x1="1549" y1="-51" x2="549" y2="1499" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />
      <line x1="1650" y1="-100" x2="650" y2="1450" stroke="#e8e8e8" stroke-width="2.5" stroke-linecap="round" filter="url(#hero-groove)" />
      <line x1="1649" y1="-101" x2="649" y2="1449" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" />
      <line x1="1450" y1="0" x2="450" y2="1550" stroke="#ebebeb" stroke-width="2" stroke-linecap="round" filter="url(#hero-groove)" />
      <line x1="1449" y1="-1" x2="449" y2="1549" stroke="white" stroke-opacity="0.35" stroke-width="1" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>
