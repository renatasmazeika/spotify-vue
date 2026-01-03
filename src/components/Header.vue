<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <header class="header-container">
    <div class="left-side-header">
      <!-- <button class="spotify-button"></button> -->
    </div>
    <div class="center-side-header"></div>
    <div class="right-side-header"></div>
  </header>
</template>

<style scoped>
.header-container {
  width: 100%;
  display: flex;
  height: 64px;
}
</style>
