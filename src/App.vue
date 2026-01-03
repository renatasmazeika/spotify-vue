<script setup lang="ts">
import Header from "./components/Header.vue";
import SidebarLeft from "./components/SidebarLeft.vue";
import MainContent from "./components/MainContent.vue";
import SidebarRight from "./components/SidebarRight.vue";
</script>

<template>
  <div class="app-layout">
    <Header />

    <div class="content-layout">
      <SidebarLeft />
      <MainContent />
      <SidebarRight />
    </div>
  </div>
</template>

<style>
.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-layout {
  flex: 1;
  display: flex;
  min-height: 0;
}
</style>
