<template>
  <footer class="bg-[#3d3d3d] py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Column 1: Logo & Copyright -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Open NCCU Logo" class="w-10 h-10 object-contain" />
            <span
              class="text-xl font-semibold text-[#4ECBA5]"
              style="font-family: 'Montserrat', sans-serif;"
            >
              Open NCCU
            </span>
          </div>
          <p
            class="text-sm text-[#f0f0f0] mt-2"
            style="font-family: 'Outfit', sans-serif;"
          >
            &copy; 2026 Copyright. All Right Reserved.
          </p>
        </div>

        <!-- Column 2: Community -->
        <div>
          <h4
            class="text-lg font-medium text-white mb-5 tracking-wide"
            style="font-family: 'Outfit', sans-serif;"
          >
            COMMUNITY
          </h4>
          <div class="flex items-center gap-4 flex-wrap">
            <!-- Instagram -->
            <a href="#" class="text-white hover:text-[#4ECBA5] transition-colors" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <!-- Threads -->
            <a href="#" class="text-white hover:text-[#4ECBA5] transition-colors" aria-label="Threads">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.1 0 2.1-.45 2.83-1.17" />
                <path d="M14.83 10.83C14.1 10.1 13.1 9.65 12 9.65" />
              </svg>
            </a>
            <!-- Facebook -->
            <a href="#" class="text-white hover:text-[#4ECBA5] transition-colors" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <!-- LinkedIn -->
            <a href="#" class="text-white hover:text-[#4ECBA5] transition-colors" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <!-- Discord -->
            <a href="#" class="text-white hover:text-[#4ECBA5] transition-colors" aria-label="Discord">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                <circle cx="9" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="15" cy="13.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <!-- Email -->
            <a href="#" class="text-white hover:text-[#4ECBA5] transition-colors" aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 3: Resource -->
        <div>
          <h4
            class="text-lg font-medium text-white mb-5 tracking-wide"
            style="font-family: 'Outfit', sans-serif;"
          >
            RESOURCE
          </h4>
          <div class="flex items-center gap-4">
            <!-- GitHub -->
            <a href="#" class="text-white hover:text-[#4ECBA5] transition-colors" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <!-- External link -->
            <a href="#" class="text-white hover:text-[#4ECBA5] transition-colors" aria-label="Documentation">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 4: Report -->
        <div>
          <h4
            class="text-lg font-medium text-white mb-5 tracking-wide"
            style="font-family: 'Outfit', sans-serif;"
          >
            REPORT
          </h4>
          <a
            href="#"
            class="inline-flex items-center gap-2 border border-white/60 text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
            style="font-family: 'Noto Sans TC', sans-serif;"
          >
            問題回報表單
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
