<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <BaseSection id="about">
    <SectionTitle
      eyebrow="О нас"
      title="Почему выбирают нас"
      subtitle="С 2021 года помогаем покупать любимые бренды из США без переплат и сложностей"
    />
    <div class="about">
      <p>
        Мы подбираем, оформляем, отслеживаем и доставляем — вам остаётся
        только наслаждаться покупкой.
      </p>
      <p>
        Только оригинальные товары, проверенные сайты, скидки до&nbsp;−90%,
        подбор по фото и полное сопровождение на всех этапах.
      </p>
    </div>
  </BaseSection>
</template>

<style scoped>
.about {
  max-width: 780px;
  margin: 0 auto;
  font-size: clamp(16px, 1.3vw, 18px);
  line-height: 1.75;
  color: var(--c-ink-2);
  text-align: center;
}
.about p + p { margin-top: 16px; }
</style>