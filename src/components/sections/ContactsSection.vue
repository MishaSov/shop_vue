<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { useTelegram } from '@/composables/useTelegram'

const { openChannel, contacts } = useTelegram()
</script>

<template>
  <BaseSection id="contacts" tone="mute">
    <SectionTitle
      eyebrow="Контакты"
      title="Готовы к шопингу мечты?"
      subtitle="Напишите нам — подберём, рассчитаем и привезём"
    />
    <div class="cta">
      <BaseButton size="lg" @click="openChannel">
        Перейти в Telegram-канал
      </BaseButton>
      <!-- <a :href="contacts.whatsapp" target="_blank" rel="noopener" class="cta__link">
        WhatsApp · {{ contacts.phone }}
      </a> -->
    </div>
    <!-- <div class="legal">
      <p>{{ contacts.owner }}</p>
      <p>ИНН {{ contacts.inn }} · ОГРНИП {{ contacts.ogrnip }}</p>
      <p>{{ contacts.legalAddress }}</p>
    </div> -->
  </BaseSection>
</template>

<style scoped>
.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 56px;
}
.cta__link {
  color: var(--c-ink-2);
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px dashed var(--c-line);
  padding-bottom: 2px;
  transition: color .18s ease, border-color .18s ease;
}
.cta__link:hover { color: var(--c-accent); border-color: var(--c-accent); }

.legal {
  text-align: center;
  color: var(--c-ink-3);
  font-size: 13px;
  line-height: 1.8;
  opacity: .8;
}
.legal p + p { margin-top: 2px; }
</style>