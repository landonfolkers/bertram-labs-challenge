<script setup lang="ts">
import HistoryPage from '../components/HistoryPage.vue'
</script>

<template>
  <div class="about" style="display:flex; flex-direction: column; justify-content: center;">
    <h1>Transaction History</h1>
    <HistoryPage />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
