<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <BaseSection id="about">
    <div class="about">
      <div class="about__media reveal">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80&auto=format&fit=crop"
          alt="Шопинг"
          loading="lazy"
        />
        <div class="about__badge">
          <strong>2021</strong>
          <span>работаем с</span>
        </div>
      </div>

      <div class="about__copy reveal reveal--d2">
        <SectionTitle
          align="left"
          eyebrow="О нас"
          title="Почему выбирают нас"
          subtitle="С 2021 года помогаем покупать любимые бренды из США без переплат и сложностей"
        />
        <p class="about__text">
          Мы подбираем, оформляем, отслеживаем и доставляем — вам остаётся
          только наслаждаться покупкой.
        </p>
        <p class="about__text">
          Только оригинальные товары, проверенные сайты, скидки до&nbsp;−90%,
          подбор по фото и полное сопровождение на всех этапах.
        </p>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: clamp(32px, 6vw, 88px);
  align-items: center;
}

.about__media {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--r-xl);
  overflow: hidden;
  box-shadow: var(--sh-xl);
}
.about__media img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.about__badge {
  position: absolute;
  bottom: 24px; left: 24px;
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,.95);
  border-radius: 16px;
  padding: 14px 20px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  box-shadow: var(--sh-md);
}
.about__badge strong {
  font-family: var(--f-serif);
  font-size: 26px;
  font-weight: 500;
  color: var(--c-accent);
  letter-spacing: -0.02em;
}
.about__badge span {
  font-size: 13px;
  color: var(--c-ink-3);
}

.about__copy :deep(.st) { margin-bottom: 28px; }

.about__text {
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.75;
  color: var(--c-ink-2);
}
.about__text + .about__text { margin-top: 14px; }

@media (max-width: 880px) {
  .about { grid-template-columns: 1fr; }
  .about__media { max-width: 460px; margin: 0 auto; aspect-ratio: 4 / 4; }
}
</style>