<script setup lang="ts">
import { ref } from "vue";
import Header from "./Header.vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <main class="main-section">
    <section class="main-top">
      <div class="main-top-filters">
        <button class="main-filters-btn">All</button>
        <button class="main-filters-btn">Music</button>
        <button class="main-filters-btn">Podcasts</button>
      </div>

      <div class="quick-access-card-grid">
        <div class="quick-access-card">
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/download (1).jpeg"
            alt=""
          />
          <span>Deep Focus</span>
        </div>
        <div class="quick-access-card">
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/download (2).jpeg"
            alt=""
          />
          <span>Coding beats</span>
        </div>
        <div class="quick-access-card">
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/download (3).jpeg"
            alt=""
          />
          <span>Imagine Dragons</span>
        </div>
        <div class="quick-access-card">
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/download.jpeg"
            alt=""
          />
          <span>99</span>
        </div>
        <div class="quick-access-card">
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/images.jpeg"
            alt=""
          />
          <span>sportas</span>
        </div>
        <div class="quick-access-card">
          <img src="" alt="" />
          <span>Coding music</span>
        </div>
        <div class="quick-access-card">
          <img src="" alt="" />
          <span>random s'22</span>
        </div>
        <div class="quick-access-card">
          <img src="" alt="" />
          <span>Deep House</span>
        </div>
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
    #363535 0%,
    #2e2e2e 30%,
    #1c1c1c 60%,
    #121212 100%
  );
  width: 50vw;
  border-radius: 10px;
  margin: 0px 7px;
  padding: 10px 30px 0 30px;
  overflow-y: auto;
  height: 100%;
}

.main-top {
}

.main-top-filters {
  margin-top: 10px;
  display: flex;
  gap: 6px;
}

.main-filters-btn {
  border-radius: 30px;
  padding: 8px 11px;
  border: none;
  background: rgb(74, 73, 73);
  color: rgb(239, 239, 239);
  font-size: 12px;
  transition: background 0.2s ease, color 0.2s ease;
}

.main-filters-btn:hover {
  cursor: pointer;
  background-color: var(--spotify-gray-hover);
}

.quick-access-card-grid {
  display: grid;
  grid-template-rows: 40px 40px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 15px;
  gap: 10px;
}

.quick-access-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.866);
  display: flex;
  align-items: center;
  font-size: 13px;
}

.quick-access-card img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 10px;
  object-fit: cover;
}

.quick-access-card:hover {
  cursor: pointer;
  background-color: var(--spotify-gray-hover);
  border-radius: 5px;
}
</style>
