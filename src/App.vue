<script setup lang="ts">
import SidebarLeft from "./components/SidebarLeft.vue";
import MainContent from "./components/MainContent.vue";
import SidebarRight from "./components/SidebarRight.vue";
</script>

<template>
  <div class="main-container">
    <SidebarLeft />
    <MainContent />
    <SidebarRight />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-container {
  display: flex;
}
</style>
