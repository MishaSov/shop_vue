<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <BaseSection id="about">
    <SectionTitle
      title="Почему выбирают нас"
      subtitle="С 2021 года помогаем покупать любимые бренды из США без переплат и сложностей"
    />
    <div class="about">
      <p>
        Мы подбираем, оформляем, отслеживаем и доставляем — вам остаётся
        только наслаждаться покупкой. Только оригинальные товары,
        проверенные сайты и скидки до&nbsp;−90%.
      </p>
      <p>
        Поможем с выбором по фото или запросу, подскажем актуальный курс
        и рассчитаем итоговую стоимость до оплаты.
      </p>
    </div>
  </BaseSection>
</template>

<style scoped>
.about {
  max-width: 780px;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.7;
  color: #444;
}
.about p + p { margin-top: 16px; }
</style>