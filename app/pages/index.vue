<template>
  <div>
    <NavBar />
    <HeroSection :scroll-y="scrollY" />
    <NewsSection />
    <ProductSection :scroll-y="scrollY" />
    <CollaborateSection />
    <AboutSection />
    <CrewSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
const { scrollY } = useScrollY()
</script>
