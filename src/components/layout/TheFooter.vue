<script setup>
import { contacts } from '@/data/contacts'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <span class="logo">Shop<span>US</span></span>
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
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 18px;
}
.logo span {
  background: var(--g-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.footer p {
  color: var(--c-ink-3);
  font-size: 14px;
}
@media (max-width: 640px) {
  .footer__inner { justify-content: center; text-align: center; }
}
</style>