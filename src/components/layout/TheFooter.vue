<script setup>
import { contacts } from '@/data/contacts'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>© {{ year }} {{ contacts.owner }}. Все права защищены.</p>
  </footer>
</template>

<style scoped>
.footer { padding: 32px 20px; text-align: center; color: #999; font-size: 14px; border-top: 1px solid #eee; }
</style>