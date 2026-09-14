<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const benefits = [
  { icon: '✅', title: 'Только оригинал', text: 'Работаем с официальными сайтами и магазинами' },
  { icon: '💸', title: 'Экономия до 90%', text: 'Цены в США в разы ниже, чем в РФ' },
  { icon: '🔍', title: 'Подбор по фото', text: 'Найдём вещь по картинке, ссылке или названию' },
  { icon: '📦', title: 'Полное сопровождение', text: 'От заявки до получения посылки' },
]
</script>

<template>
  <BaseSection id="benefits">
    <SectionTitle title="Наши преимущества" />
    <div class="benefits">
      <article v-for="b in benefits" :key="b.title" class="benefits__card">
        <div class="benefits__icon">{{ b.icon }}</div>
        <h3>{{ b.title }}</h3>
        <p>{{ b.text }}</p>
      </article>
    </div>
  </BaseSection>
</template>

<style scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.benefits__card {
  padding: 28px 24px;
  background: #f7f9fc;
  border-radius: 16px;
  transition: transform .2s, box-shadow .2s;
}
.benefits__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,.06);
}
.benefits__icon { font-size: 32px; margin-bottom: 12px; }
.benefits__card h3 { font-size: 18px; margin: 0 0 8px; }
.benefits__card p { color: #666; font-size: 15px; line-height: 1.5; margin: 0; }
</style>