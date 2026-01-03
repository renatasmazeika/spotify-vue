<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <aside class="sidebar-right-container"></aside>
</template>
<style scoped>
.sidebar-right-container {
  width: 25vw;
  height: 100%;
  flex-shrink: 0;
}
</style>
