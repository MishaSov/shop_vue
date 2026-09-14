<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { brands } from '@/data/brands'
</script>

<template>
  <BaseSection id="brands">
    <SectionTitle
      eyebrow="Бренды"
      title="С какими брендами работаем"
      subtitle="И сотни других — просто напишите, что ищете"
    />
    <ul class="brands">
      <li v-for="brand in brands" :key="brand" class="brands__item">{{ brand }}</li>
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
.brands__item {
  padding: 12px 22px;
  background: #fff;
  border: 1px solid var(--c-line);
  border-radius: 999px;
  font-weight: 500;
  font-size: 15px;
  color: var(--c-ink-2);
  box-shadow: var(--sh-sm);
  transition: transform .18s ease, border-color .18s ease,
              color .18s ease, box-shadow .18s ease;
  cursor: default;
}
.brands__item:hover {
  transform: translateY(-3px);
  border-color: var(--c-accent);
  color: var(--c-accent);
  box-shadow: var(--sh-md);
}
</style>