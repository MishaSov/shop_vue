<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { categories } from '@/data/categories'
</script>

<template>
  <BaseSection id="categories" tone="soft">
    <SectionTitle
      eyebrow="Категории"
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
  padding: 32px 28px;
  background: #fff;
  border-radius: var(--r-lg);
  border: 1px solid var(--c-line);
  box-shadow: var(--sh-sm);
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}
.cats__card:hover {
  transform: translateY(-6px);
  box-shadow: var(--sh-lg);
  border-color: transparent;
}
.cats__icon {
  font-size: 30px;
  width: 56px; height: 56px;
  display: grid; place-items: center;
  border-radius: 16px;
  background: var(--c-accent-soft);
  margin-bottom: 20px;
}
.cats__card h3 { font-size: 18px; margin-bottom: 8px; }
.cats__card p  { color: var(--c-ink-3); font-size: 15px; line-height: 1.55; }
</style>