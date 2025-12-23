<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <aside class="sidebar-left">
    <div class="sidebar-top">
      <h4>Your Library</h4>
      <div class="left-side-button-container">
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

    <div class="sidebar-playlist">
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
  width: 25vw;
  height: 100vh;
  background-color: var(--spotify-sidebar-bg);
  display: flex;
  flex-direction: column;
}
.sidebar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 20px;
}

.sidebar-top h4 {
  font-size: 14px;
}

.sidebar-top h4:hover {
  cursor: pointer;
}

.left-side-button-container {
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
  background: var(--spotify-gray);
  border-radius: 50px;
  padding: 5px 12px;
  border: none;
}

#create-button:hover {
  cursor: pointer;
  background-color: var(--spotify-gray-hover);
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

#expand-button:hover {
  cursor: pointer;
  background-color: var(--spotify-gray-hover);
}

#expand-button svg {
  width: 15px;
  height: 15px;
  display: block;
  flex-shrink: 0;
}

.sidebar-filters {
  padding: 0px 12px 0px 12px;
  display: flex;
  align-items: center;
}

.sidebar-filters button {
  border-radius: 50px;
  padding: 9px 9px;
  margin: 0px 5px;
  background: var(--spotify-gray);
  color: rgb(255, 255, 255);
  border-style: none;
  font-size: 12px;
}

.library-filter-button:hover {
  cursor: pointer;
  background-color: var(--spotify-gray-hover);
}

.sidebar-playlist {
  margin: 10px 0px 0px 5px;
  flex-grow: 1;
  overflow-y: auto;
}

.sidebar-playlist::-webkit-scrollbar {
  width: 10px; /* controls thickness */
}

.sidebar-playlist::-webkit-scrollbar-track {
  background: #1f1f1f; /* scrollbar background */
}

.sidebar-playlist::-webkit-scrollbar-thumb {
  background: #5a5a5a; /* scrollbar color */
  border-radius: 10px; /* round edges */
}

/* Thumb hover effect */
.sidebar-playlist::-webkit-scrollbar-thumb:hover {
  background: #7a7a7a;
}

.sidebar-playlist ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-playlist li {
  padding: 20px;
}

.sidebar-playlist li:hover {
  cursor: pointer;
  background-color: var(--spotify-gray-hover);
  border-radius: 5px;
}
</style>
