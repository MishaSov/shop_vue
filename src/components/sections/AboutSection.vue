<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <BaseSection id="about">
    <div class="about">
      <div class="about__media reveal">
        <img
          src="@/assets/maria.jpg"
          alt="Мария — основатель байер-сервиса"
          loading="lazy"
        />
      </div>

      <div class="about__copy reveal reveal--d2">
        <SectionTitle
          align="left"
          eyebrow="О нас"
          title="Почему выбирают нас"
        />
        <p class="about__text">
          Я Мария, основатель байер-сервиса персонального шопинга в США и Европе.
        </p>
        <p class="about__text">
          Мы помогаем находить и приобретать желанные вещи напрямую из лучших
          магазинов и бутиков Америки и Европы — с персональным подбором,
          вниманием к деталям и заботой на каждом этапе покупки.
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
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  .about__media {
    max-width: 460px;
    margin: 0 auto;
    aspect-ratio: 4 / 4;
  }
}
</style>