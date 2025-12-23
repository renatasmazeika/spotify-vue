<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <aside>
    <h1>Hello</h1>
  </aside>
</template>
<style scoped></style>
