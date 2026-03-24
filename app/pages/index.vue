<template>
  <div>
    <NavBar />
    <HeroSection :scroll-y="scrollY" />
    <NewsSection />
    <ProductSection :scroll-y="scrollY" />
    <!-- ProductServiceSection removed — not in Figma single-page layout; it was creating duplicate product content -->
    <CollaborateSection />
    <AboutSection />
    <CrewSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
const { scrollY } = useScrollY()
</script>
