<script setup lang="ts">
import Header from "./components/Header.vue";
import SidebarLeft from "./components/SidebarLeft.vue";
import MainContent from "./components/MainContent.vue";
import SidebarRight from "./components/SidebarRight.vue";
</script>

<template>
  <div class="app">
    <!-- HEADER -->
    <Header />

    <!-- BODY -->
    <div class="body">
      <SidebarLeft />
      <MainContent />
      <SidebarRight />
    </div>
  </div>
</template>

<style>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* everything below the header */
.body {
  flex: 1;
  display: flex;
  overflow: hidden;
}
</style>
