<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { categories } from '@/data/categories'
</script>

<template>
  <BaseSection id="categories">
    <SectionTitle
      title="Что можно заказать"
      subtitle="Выкупаем практически всё — от одежды до электроники"
    />
    <div class="cats">
      <article v-for="cat in categories" :key="cat.title" class="cats__card">
        <div class="cats__icon">{{ cat.icon }}</div>
        <h3>{{ cat.title }}</h3>
        <p>{{ cat.text }}</p>
      </article>
    </div>
  </BaseSection>
</template>

<style scoped>
.cats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
.cats__card {
  padding: 28px 24px;
  border: 1px solid #eee;
  border-radius: 16px;
  transition: border-color .2s, transform .2s;
}
.cats__card:hover {
  border-color: #229ED9;
  transform: translateY(-4px);
}
.cats__icon { font-size: 32px; margin-bottom: 12px; }
.cats__card h3 { font-size: 17px; margin: 0 0 6px; }
.cats__card p { color: #666; font-size: 14px; margin: 0; }
</style>