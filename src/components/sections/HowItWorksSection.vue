<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { steps } from '@/data/steps'
</script>

<template>
    <BaseSection id="how">
        <SectionTitle eyebrow="Процесс" title="Как сделать заказ"
            subtitle="Всего четыре шага — от заявки до получения посылки" />
        <ol class="steps">
            <li v-for="(step, i) in steps" :key="step.num" class="steps__item reveal" :class="`reveal--d${i + 1}`">
                <div class="steps__num">{{ step.num }}</div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.text }}</p>
            </li>
        </ol>
    </BaseSection>
</template>

<style scoped>
.steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.steps__item {
    position: relative;
    padding: 36px 30px;
    background: #fff;
    border-radius: var(--r-lg);
    border: 1px solid var(--c-line);
    box-shadow: var(--sh-sm);
    transition: transform .35s cubic-bezier(.22, 1, .36, 1),
        box-shadow .35s ease;
}

.steps__item:hover {
    transform: translateY(-6px);
    box-shadow: var(--sh-lg);
}

.steps__num {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--g-accent);
    color: #fff;
    display: grid;
    place-items: center;
    font-family: var(--f-serif);
    font-weight: 500;
    font-size: 20px;
    box-shadow: var(--sh-accent);
    margin-bottom: 22px;
}

.steps__item h3 {
    font-size: 18px;
    margin-bottom: 8px;
}

.steps__item p {
    color: var(--c-ink-3);
    font-size: 15px;
    line-height: 1.6;
}
</style>