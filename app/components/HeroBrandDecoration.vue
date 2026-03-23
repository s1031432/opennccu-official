<template>
  <!-- Brand decorative geometric lines for Hero section — extracted from Figma -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <svg
      class="absolute top-0 right-0 h-full"
      :style="{ width: '60%' }"
      viewBox="880 -40 820 1100"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Drop shadow + inner shadow for embossed/3D line effect -->
        <filter id="hero-line-shadow" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>

        <!-- Lighter inner shadow for the curve -->
        <filter id="hero-curve-shadow" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>

        <!-- Glossy sphere filter for endpoint dots -->
        <filter id="hero-dot-filter" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <!-- Inner highlight for 3D sphere look -->
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-3" dy="-3" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
          <feBlend mode="normal" in2="shape" result="innerHighlight" />
          <!-- Inner shadow for depth -->
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
          <feOffset dx="3" dy="3" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="innerHighlight" result="finalShape" />
        </filter>
      </defs>

      <!-- Line 9: Diagonal embossed gray line (background crease) -->
      <g filter="url(#hero-line-shadow)">
        <path
          d="M1291.5 -14.9999L907.389 740.131C900.401 753.867 901.927 770.395 911.31 782.62L1060.5 977"
          stroke="#F0F0F0"
          stroke-width="32"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>

      <!-- Line 11: Mint green overlay on Line 9 -->
      <g filter="url(#hero-line-shadow)">
        <path
          d="M1171 222.5L907.404 740.124C900.408 753.863 901.93 770.4 911.317 782.63L1060.5 977"
          stroke="#77E6B0"
          stroke-opacity="0.35"
          stroke-width="32"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>

      <!-- Line 10: Second embossed gray line -->
      <g filter="url(#hero-line-shadow)">
        <path
          d="M1171 328L1318.6 519.579C1328.1 531.909 1329.58 548.63 1322.4 562.441L1090 1009.5"
          stroke="#F0F0F0"
          stroke-width="32"
          stroke-linecap="round"
        />
      </g>

      <!-- Line 12: Mint green overlay on Line 10 -->
      <g filter="url(#hero-line-shadow)">
        <path
          d="M1171 328L1318.6 519.579C1328.1 531.909 1329.58 548.63 1322.4 562.441L1090 1009.5"
          stroke="#77E6B0"
          stroke-opacity="0.35"
          stroke-width="32"
          stroke-linecap="round"
        />
      </g>

      <!-- Vector 7: Complex brand curve (embossed gray) -->
      <g filter="url(#hero-curve-shadow)">
        <path
          d="M1419.5 1100L1267.33 899.224C1257.97 886.879 1256.58 870.241 1263.77 856.516L1375.5 643C1393.17 617.333 1442.63 571.5 1500 571.5C1549 571.5 1583.5 590.5 1599 602.5C1612.17 612.694 1635 633 1651 673.5C1667 714 1661.5 761 1643.5 796C1629.1 824 1315.5 1436.33 1160.5 1739"
          stroke="#F0F0F0"
          stroke-width="32"
          stroke-linecap="round"
        />
      </g>

      <!-- Vector 8: Mint green overlay on Vector 7 (partial — only the upper curve) -->
      <g filter="url(#hero-curve-shadow)">
        <path
          d="M1419.5 1100L1267.33 899.224C1257.97 886.879 1256.58 870.241 1263.77 856.516L1375.5 643C1393.17 617.333 1442.63 571.5 1500 571.5C1549 571.5 1583.5 590.5 1599 602.5C1612.17 612.694 1635 633 1651 673.5C1667 714 1661.5 761 1643.5 796"
          stroke="#77E6B0"
          stroke-opacity="0.35"
          stroke-width="32"
          stroke-linecap="round"
        />
      </g>

      <!-- Endpoint dot: top of chevron (1171, 222) -->
      <g filter="url(#hero-dot-filter)">
        <circle cx="1171" cy="222" r="13" fill="#F7F7F7" />
      </g>

      <!-- Endpoint dot: bottom of second line (1090, 1009) -->
      <g filter="url(#hero-dot-filter)">
        <circle cx="1090" cy="1009" r="13" fill="white" />
      </g>

      <!-- Endpoint dot: curve apex (1644, 795) -->
      <g filter="url(#hero-dot-filter)">
        <circle cx="1644" cy="795" r="13" fill="white" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>
