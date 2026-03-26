<template>
  <!-- Brand decorative geometric lines for Hero section — per Figma -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <svg
      class="absolute top-0 right-0 h-full"
      :style="{ width: '75%' }"
      viewBox="850 -100 900 1300"
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
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-3" dy="-3" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
          <feBlend mode="normal" in2="shape" result="innerHighlight" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
          <feOffset dx="3" dy="3" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="innerHighlight" result="finalShape" />
        </filter>

        <!-- Ghost shape filter -->
        <filter id="hero-ghost-shadow" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="shadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="shadow" result="shape" />
        </filter>
      </defs>

      <!-- Ghost/echo diamond shape (behind, offset down-left) — larger and more visible per Figma -->
      <g filter="url(#hero-ghost-shadow)">
        <path
          d="M1120 250L1290 520L1120 790L950 520Z"
          stroke="#e2e2e2"
          stroke-width="28"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          opacity="0.6"
        />
      </g>

      <!-- Ghost/echo U-curve (behind, faint) -->
      <g filter="url(#hero-ghost-shadow)">
        <path
          d="M1320 1100L1320 650C1320 480 1480 340 1650 340C1820 340 1980 480 1980 650L1980 850"
          stroke="#e2e2e2"
          stroke-width="28"
          stroke-linecap="round"
          fill="none"
          opacity="0.45"
        />
      </g>

      <!-- Main chevron/diamond shape — green 3D tube (Line 10 per Figma), thicker stroke -->
      <g filter="url(#hero-line-shadow)">
        <path
          d="M1140 170L1310 460L1140 750"
          stroke="#8FD4B4"
          stroke-width="38"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </g>
      <!-- Highlight edge -->
      <path
        d="M1137 167L1307 457L1137 747"
        stroke="#ffffff"
        stroke-opacity="0.35"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />

      <!-- U-curve (Vector 7 per Figma) — wider arch, taller, overlapping with chevron -->
      <g filter="url(#hero-curve-shadow)">
        <path
          d="M1340 1050L1340 560C1340 380 1510 230 1700 230C1890 230 2060 380 2060 560L2060 780"
          stroke="#8FD4B4"
          stroke-width="38"
          stroke-linecap="round"
          fill="none"
        />
      </g>
      <!-- Highlight edge for U-curve -->
      <path
        d="M1337 1047L1337 557C1337 377 1507 227 1697 227C1887 227 2057 377 2057 557L2057 777"
        stroke="#ffffff"
        stroke-opacity="0.30"
        stroke-width="10"
        stroke-linecap="round"
        fill="none"
      />

      <!-- Endpoint dots — larger with glow -->
      <!-- Top of chevron -->
      <g filter="url(#hero-dot-filter)">
        <circle cx="1140" cy="170" r="18" fill="#9DD5BE" />
        <circle cx="1136" cy="166" r="6" fill="white" fill-opacity="0.55" />
      </g>

      <!-- Bottom of chevron -->
      <g filter="url(#hero-dot-filter)">
        <circle cx="1140" cy="750" r="18" fill="#9DD5BE" />
        <circle cx="1136" cy="746" r="6" fill="white" fill-opacity="0.55" />
      </g>

      <!-- Bottom of U-curve left leg -->
      <g filter="url(#hero-dot-filter)">
        <circle cx="1340" cy="1050" r="18" fill="#9DD5BE" />
        <circle cx="1336" cy="1046" r="6" fill="white" fill-opacity="0.55" />
      </g>

      <!-- Bottom of U-curve right leg -->
      <g filter="url(#hero-dot-filter)">
        <circle cx="2060" cy="780" r="18" fill="#9DD5BE" />
        <circle cx="2056" cy="776" r="6" fill="white" fill-opacity="0.55" />
      </g>
    </svg>

    <!-- Diagonal neumorphic groove lines per Figma -->
    <svg
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1440"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="hero-diagonal-groove" filterUnits="userSpaceOnUse" x="-50" y="-50" width="2020" height="1540" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="shadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="shadow" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="shape" result="highlight" />
        </filter>
      </defs>
      <!-- Diagonal groove 1: upper-right → lower-left -->
      <line
        x1="1550" y1="-50"
        x2="550" y2="1500"
        stroke="#e8e8e8"
        stroke-width="3"
        stroke-linecap="round"
        filter="url(#hero-diagonal-groove)"
      />
      <line
        x1="1549" y1="-51"
        x2="549" y2="1499"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <!-- Diagonal groove 2: parallel, offset -->
      <line
        x1="1650" y1="-100"
        x2="650" y2="1450"
        stroke="#e8e8e8"
        stroke-width="2.5"
        stroke-linecap="round"
        filter="url(#hero-diagonal-groove)"
      />
      <line
        x1="1649" y1="-101"
        x2="649" y2="1449"
        stroke="white"
        stroke-opacity="0.4"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>
