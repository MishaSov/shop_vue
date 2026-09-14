<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import BrandsSection from '@/components/sections/BrandsSection.vue'
import CategoriesSection from '@/components/sections/CategoriesSection.vue'
import HowItWorksSection from '@/components/sections/HowItWorksSection.vue'
import DeliverySection from '@/components/sections/DeliverySection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import ContactsSection from '@/components/sections/ContactsSection.vue'
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <BenefitsSection />
    <BrandsSection />
    <CategoriesSection />
    <HowItWorksSection />
    <DeliverySection />
    <FaqSection />
    <ContactsSection />
  </main>
  <TheFooter />
</template>