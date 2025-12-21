<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <aside class="sidebar-left">
    <div class="sidebar-top">
      <h1>Your Library</h1>
      <div class="button-container">
        <button id="create-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
            />
          </svg>
          Create
        </button>
        <button id="expand-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10 21v-2H6.41l4.5-4.5l-1.41-1.41l-4.5 4.5V14H3v7zm4.5-10.09l4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="sidebar-filters">
      <button class="library-filter-button">Playlists</button>
      <button class="library-filter-button">Artists</button>
      <button class="library-filter-button">Albums</button>
      <button class="library-filter-button">Podcasts & Shows</button>
    </div>

    <div class="sidebar-list">
      <ul>
        <li>Playlist 1</li>
        <li>Playlist 2</li>
        <li>Playlist 3</li>
        <li>Playlist 4</li>
        <li>Playlist 5</li>
        <li>Playlist 6</li>
        <li>Playlist 7</li>
        <li>Playlist 8</li>
        <li>Playlist 9</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
        <li>Playlist 10</li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-left {
  width: 350px;
  height: 100vh;
  background-color: rgb(38, 35, 35);
  display: flex;
  flex-direction: column;
}
.sidebar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 20px;
}

.sidebar-top h1 {
  font-size: 14px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

#create-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: white;
  background: rgb(90, 90, 90);
  border-radius: 50px;
  padding: 5px 12px;
  border: none;
}

#create-button:hover {
  cursor: pointer;
}

#create-button svg {
  width: 15px;
  height: 15px;
}

#expand-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  color: white;
  border-radius: 50px;
  background: transparent;
  line-height: 0;
}

#expand-button svg {
  width: 15px;
  height: 15px;
  display: block;
  flex-shrink: 0;
}

.sidebar-filters button {
  border-radius: 50px;
  padding: 9px 9px;
  background: var(--spotify-gray);
  color: rgb(255, 255, 255);
  border-style: none;
  margin: 5px;
  font-size: 12px;
}

.sidebar-list {
  overflow-y: auto;
  margin: 15px;
  flex-grow: 1;
}
</style>
