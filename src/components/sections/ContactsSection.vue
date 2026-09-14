<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { useTelegram } from '@/composables/useTelegram'

const { openChannel, contacts } = useTelegram()
</script>

<template>
  <BaseSection id="contacts">
    <SectionTitle
      title="Готовы к шопингу мечты?"
      subtitle="Напишите нам — подберём, рассчитаем и привезём"
    />
    <div class="contacts">
      <BaseButton @click="openChannel">Telegram-канал</BaseButton>
      <a :href="contacts.whatsapp" target="_blank" rel="noopener" class="contacts__link">
        WhatsApp: {{ contacts.phone }}
      </a>
    </div>
    <div class="legal">
      <p>{{ contacts.owner }}</p>
      <p>ИНН {{ contacts.inn }} · ОГРНИП {{ contacts.ogrnip }}</p>
      <p>{{ contacts.legalAddress }}</p>
    </div>
  </BaseSection>
</template>

<style scoped>
.contacts { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 48px; }
.contacts__link { color: #229ED9; text-decoration: none; font-weight: 500; }
.legal { text-align: center; color: #999; font-size: 13px; line-height: 1.7; }
</style>