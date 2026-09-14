<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { steps } from '@/data/steps'
</script>

<template>
  <BaseSection id="how">
    <SectionTitle
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: step;
}
.steps__item {
  position: relative;
  padding: 28px 24px;
  background: #f7f9fc;
  border-radius: 16px;
}
.steps__num {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #229ED9;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
  margin-bottom: 16px;
}
.steps__item h3 { font-size: 17px; margin: 0 0 8px; }
.steps__item p { color: #666; font-size: 15px; line-height: 1.5; margin: 0; }
</style>