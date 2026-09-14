<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const benefits = [
  { icon: '✦', title: 'Только оригинал',      text: 'Работаем с официальными сайтами и магазинами' },
  { icon: '✧', title: 'Экономия до 90%',      text: 'Цены в США в разы ниже, чем в России' },
  { icon: '✺', title: 'Подбор по фото',       text: 'Найдём вещь по картинке, ссылке или названию' },
  { icon: '❋', title: 'Полное сопровождение', text: 'От заявки до получения посылки' },
]
</script>

<template>
  <BaseSection id="benefits">
    <SectionTitle eyebrow="Преимущества" title="Что вы получаете" />
    <div class="grid">
      <article
        v-for="(b, i) in benefits"
        :key="b.title"
        class="card reveal"
        :class="`reveal--d${i + 1}`"
      >
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
  padding: 36px 30px;
  background: #fff;
  border-radius: var(--r-lg);
  border: 1px solid var(--c-line);
  box-shadow: var(--sh-sm);
  transition: transform .35s cubic-bezier(.22,1,.36,1),
              box-shadow .35s ease, border-color .35s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--sh-lg);
  border-color: transparent;
}
.card__icon {
  font-size: 26px;
  width: 56px; height: 56px;
  display: grid; place-items: center;
  border-radius: 50%;
  background: var(--g-warm);
  color: var(--c-accent);
  margin-bottom: 22px;
  transition: transform .4s cubic-bezier(.22,1,.36,1);
}
.card:hover .card__icon { transform: rotate(-8deg) scale(1.08); }
.card__title { margin-bottom: 8px; font-size: 18px; font-weight: 600; }
.card__text  { color: var(--c-ink-3); font-size: 15px; line-height: 1.6; }
</style>