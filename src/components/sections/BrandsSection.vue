<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { brands } from '@/data/brands'
</script>

<template>
  <BaseSection id="brands">
    <SectionTitle
      title="С какими брендами работаем"
      subtitle="И сотни других — просто напишите, что ищете"
    />
    <ul class="brands">
      <li v-for="brand in brands" :key="brand">{{ brand }}</li>
    </ul>
  </BaseSection>
</template>

<style scoped>
.brands {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.brands li {
  padding: 10px 20px;
  background: #f5f5f7;
  border-radius: 999px;
  font-weight: 500;
}
</style>