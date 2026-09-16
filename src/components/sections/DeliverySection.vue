<script setup>
import BaseSection from '@/components/ui/BaseSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const info = [
    // { label: 'Стоимость', value: '2,5–3,5 ₽ / грамм' },
    { label: 'Срок', value: '4–6 недель' },
    { label: 'Ускоренная', value: '10–14 дней' },
    { label: 'Курс', value: '1$ = 130 ₽' },
]
</script>

<template>
    <BaseSection id="delivery" tone="soft">
        <SectionTitle eyebrow="Оплата и доставка" title="Прозрачные условия" />
        <div class="grid">
            <div v-for="item in info" :key="item.label" class="card">
                <span class="card__label">{{ item.label }}</span>
                <span class="card__value">{{ item.value }}</span>
            </div>
        </div>
        <p class="note">
            Оплата 100% перед выкупом. Возврат исключён, но поможем «пристроить»
            вещь, если не подошла. Все подтверждающие документы предоставляем.
        </p>
    </BaseSection>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.card {
    padding: 28px 24px;
    background: #fff;
    border-radius: var(--r-lg);
    border: 1px solid var(--c-line);
    box-shadow: var(--sh-sm);
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card__label {
    color: var(--c-ink-3);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: .08em;
    font-weight: 600;
}

.card__value {
    font-family: var(--f-serif);
    font-size: clamp(20px, 1.8vw, 26px);
    font-weight: 500;
    color: var(--c-ink);
    letter-spacing: -0.02em;
}

.note {
    max-width: 780px;
    margin: 0 auto;
    text-align: center;
    color: var(--c-ink-3);
    line-height: 1.65;
}
</style>