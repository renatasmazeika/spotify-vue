<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <main class="main-section">
    <section class="main-top">
      <div class="main-top-filters">
        <button class="main-filter-buttons">All</button>
        <button class="main-filter-buttons">Music</button>
        <button class="main-filter-buttons">Podcasts</button>
      </div>

      <div class="quick-access-card-grid">
        <ul>
          <li>Playlist name</li>
          <li>Playlist name</li>
          <li>Playlist name</li>
          <li>Playlist name</li>
          <li>Playlist name</li>
          <li>Playlist name</li>
          <li>Playlist name</li>
          <li>Playlist name</li>
        </ul>
      </div>
    </section>

    <section class="made-for"></section>
    <section class="jump-back-in"></section>
  </main>
</template>

<style scoped>
.main-section {
  background: linear-gradient(
    to bottom,
    #3b3b3b 0%,
    #2e2e2e 30%,
    #1c1c1c 60%,
    #121212 100%
  );
  height: 100vh;
  width: 50vw;
  border-radius: 10px;
  margin: 0px 7px;
}

.main-top {
  display: block;
}

.quick-access-card-grid ul {
  list-style: none;
}
</style>
