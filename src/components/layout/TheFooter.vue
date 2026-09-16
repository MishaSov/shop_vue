<script setup>
import { contacts } from '@/data/contacts'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <span class="logo">
        <em>M.K</em> <span>select</span>
      </span>
      <p>© {{ year }} {{ contacts.owner }}. Все права защищены.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--c-line);
  padding: 32px 24px;
  background: #fff;
}

.footer__inner {
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.logo {
  font-weight: 500;
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
}

.logo em {
  font-family: var(--f-serif);
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: var(--c-ink);
}

.logo span {
  background: var(--g-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
}

.footer p {
  color: var(--c-ink-3);
  font-size: 14px;
}

@media (max-width: 640px) {
  .footer__inner {
    justify-content: center;
    text-align: center;
  }
}
</style>