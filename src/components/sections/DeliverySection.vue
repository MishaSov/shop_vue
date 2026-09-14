<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const info = [
  { label: 'Стоимость', value: '2,5–3,5 ₽ за грамм' },
  { label: 'Срок', value: 'В среднем 4–6 недель' },
  { label: 'Ускоренная', value: '10–14 дней' },
  { label: 'Курс', value: '1$ = 135–145 ₽' },
]
</script>

<template>
  <BaseSection id="delivery">
    <SectionTitle title="Оплата и доставка" />
    <div class="delivery">
      <div v-for="item in info" :key="item.label" class="delivery__item">
        <span class="delivery__label">{{ item.label }}</span>
        <span class="delivery__value">{{ item.value }}</span>
      </div>
    </div>
    <p class="delivery__note">
      Оплата 100% перед выкупом. Возврат исключён, но поможем «пристроить»
      вещь, если не подошла. Все подтверждающие документы предоставляем.
    </p>
  </BaseSection>
</template>

<style scoped>
.delivery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}
.delivery__item {
  padding: 24px;
  background: #f7f9fc;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.delivery__label { color: #888; font-size: 14px; }
.delivery__value { font-size: 18px; font-weight: 600; }
.delivery__note {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  color: #666;
  line-height: 1.6;
}
</style>