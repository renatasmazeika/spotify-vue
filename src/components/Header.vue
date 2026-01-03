<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <header class="header-container">
    <div class="left-side-header">
      <button class="spotify-button"></button>
    </div>
    <div class="center-side-header"></div>
    <div class="right-side-header"></div>
  </header>
</template>

<style scoped>
.header-container {
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  background: #121212;
  z-index: 10;
  flex-shrink: 0;
}
</style>
