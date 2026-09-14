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
      <article
        v-for="(cat, i) in categories"
        :key="cat.title"
        class="cats__card reveal"
        :class="`reveal--d${(i % 3) + 1}`"
      >
        <div class="cats__media">
          <img :src="cat.image" :alt="cat.title" loading="lazy" />
        </div>
        <div class="cats__body">
          <span class="cats__icon">{{ cat.icon }}</span>
          <h3>{{ cat.title }}</h3>
          <p>{{ cat.text }}</p>
        </div>
      </article>
    </div>
  </BaseSection>
</template>

<style scoped>
.cats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
.cats__card {
  background: #fff;
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--sh-sm);
  border: 1px solid var(--c-line);
  transition: transform .35s cubic-bezier(.22,1,.36,1),
              box-shadow .35s ease, border-color .35s ease;
}
.cats__card:hover {
  transform: translateY(-8px);
  box-shadow: var(--sh-xl);
  border-color: transparent;
}
.cats__media {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}
.cats__media img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(.22,1,.36,1);
}
.cats__card:hover .cats__media img { transform: scale(1.08); }

.cats__body {
  padding: 24px 24px 28px;
}
.cats__icon {
  display: inline-block;
  font-size: 22px;
  margin-bottom: 12px;
}
.cats__body h3 { font-size: 18px; margin-bottom: 6px; }
.cats__body p  { color: var(--c-ink-3); font-size: 14px; line-height: 1.5; }
</style>