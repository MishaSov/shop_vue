<script setup>
import { ref } from 'vue'
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { faq } from '@/data/faq'

const opened = ref(null)
const toggle = (i) => (opened.value = opened.value === i ? null : i)
</script>

<template>
  <BaseSection id="faq">
    <SectionTitle title="Частые вопросы" />
    <div class="faq">
      <div
        v-for="(item, i) in faq"
        :key="i"
        class="faq__item"
        :class="{ 'faq__item--open': opened === i }"
      >
        <button class="faq__q" @click="toggle(i)">
          {{ item.q }}
          <span class="faq__icon">{{ opened === i ? '−' : '+' }}</span>
        </button>
        <div v-show="opened === i" class="faq__a">{{ item.a }}</div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.faq { max-width: 820px; margin: 0 auto; }
.faq__item { border-bottom: 1px solid #eee; }
.faq__q {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: none;
  border: none;
  font-size: 17px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}
.faq__a { padding: 0 0 20px; color: #555; line-height: 1.6; }
.faq__icon { font-size: 22px; color: #229ED9; }
</style>