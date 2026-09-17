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
        <SectionTitle eyebrow="FAQ" title="Частые вопросы" />
        <div class="faq">
            <div v-for="(item, i) in faq" :key="i" class="faq__item" :class="{ 'faq__item--open': opened === i }">
                <button class="faq__q" @click="toggle(i)">
                    <span>{{ item.q }}</span>
                    <span class="faq__icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7h12M7 1v12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                                class="faq__icon-line faq__icon-line--v" />
                        </svg>
                    </span>
                </button>
                <div v-show="opened === i" class="faq__a">{{ item.a }}</div>
            </div>
        </div>
    </BaseSection>
</template>

<style scoped>
.faq {
    max-width: 820px;
    margin: 0 auto;
}

.faq__item {
    border-bottom: 1px solid var(--c-line);
    transition: border-color .2s ease;
}

.faq__item--open {
    border-color: transparent;
}

.faq__q {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 22px 4px;
    background: none;
    border: none;
    font-size: 17px;
    font-weight: 600;
    text-align: left;
    color: var(--c-ink);
    cursor: pointer;
    transition: color .18s ease;
}

.faq__q:hover {
    color: var(--c-accent);
}

.faq__icon {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--c-accent-soft);
  color: var(--c-accent);
  flex: 0 0 auto;
  transition: background .25s ease, color .25s ease;
}

.faq__item--open .faq__icon {
    background: var(--g-accent);
    color: #fff;
}

.faq__icon-line--v {
    transform-origin: center;
    transition: transform .2s ease, opacity .2s ease;
}

.faq__item--open .faq__icon-line--v {
    transform: scaleY(0);
    opacity: 0;
}

.faq__a {
    padding: 0 4px 24px;
    color: var(--c-ink-3);
    line-height: 1.7;
    font-size: 15px;
}
</style>