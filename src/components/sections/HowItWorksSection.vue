<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { steps } from '@/data/steps'
</script>

<template>
  <BaseSection id="how">
    <SectionTitle
      eyebrow="Процесс"
      title="Как сделать заказ"
      subtitle="Всего четыре шага — от заявки до получения посылки"
    />
    <ol class="steps">
      <li v-for="step in steps" :key="step.num" class="steps__item">
        <div class="steps__num">{{ step.num }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </BaseSection>
</template>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.steps__item {
  position: relative;
  padding: 32px 28px;
  background: #fff;
  border-radius: var(--r-lg);
  border: 1px solid var(--c-line);
  box-shadow: var(--sh-sm);
  transition: transform .22s ease, box-shadow .22s ease;
}
.steps__item:hover {
  transform: translateY(-6px);
  box-shadow: var(--sh-lg);
}
.steps__num {
  width: 46px; height: 46px;
  border-radius: 14px;
  background: var(--g-accent);
  color: #fff;
  display: grid; place-items: center;
  font-weight: 700;
  font-size: 18px;
  box-shadow: var(--sh-accent);
  margin-bottom: 20px;
}
.steps__item h3 { font-size: 18px; margin-bottom: 8px; }
.steps__item p  { color: var(--c-ink-3); font-size: 15px; line-height: 1.55; }
</style>