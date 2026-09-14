<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const benefits = [
  { icon: '✅', title: 'Только оригинал',      text: 'Работаем с официальными сайтами и магазинами' },
  { icon: '💸', title: 'Экономия до 90%',      text: 'Цены в США в разы ниже, чем в России' },
  { icon: '🔍', title: 'Подбор по фото',       text: 'Найдём вещь по картинке, ссылке или названию' },
  { icon: '📦', title: 'Полное сопровождение', text: 'От заявки до получения посылки' },
]
</script>

<template>
  <BaseSection id="benefits" tone="soft">
    <SectionTitle eyebrow="Преимущества" title="Что вы получаете" />
    <div class="grid">
      <article v-for="b in benefits" :key="b.title" class="card">
        <div class="card__icon">{{ b.icon }}</div>
        <h3 class="card__title">{{ b.title }}</h3>
        <p class="card__text">{{ b.text }}</p>
      </article>
    </div>
  </BaseSection>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
}
.card {
  padding: 32px 28px;
  background: #fff;
  border-radius: var(--r-lg);
  border: 1px solid var(--c-line);
  box-shadow: var(--sh-sm);
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--sh-lg);
  border-color: transparent;
}
.card__icon {
  font-size: 30px;
  width: 56px; height: 56px;
  display: grid; place-items: center;
  border-radius: 16px;
  background: var(--c-accent-soft);
  margin-bottom: 20px;
}
.card__title { margin-bottom: 8px; font-size: 18px; }
.card__text  { color: var(--c-ink-3); font-size: 15px; line-height: 1.55; }
</style>