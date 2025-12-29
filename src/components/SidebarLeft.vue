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

    <div class="sidebar-left-search-bar">
      <button class="sidebar-left-search-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6"
          />
          <path
            fill="currentColor"
            d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"
          />
        </svg>
      </button>
      <button class="sidebar-left-recents-btn">
        Recents
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.616 18.5v-1H20v1zm0-6v-1H20v1zm0-6v-1H20v1zM5.327 19.327q-.547 0-.937-.39T4 18t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39m0-6q-.547 0-.937-.39T4 12t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39m0-6q-.547 0-.937-.39T4 6t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39"
          />
        </svg>
      </button>
    </div>

    <div class="sidebar-playlist">
      <ul>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/download (2).jpeg"
            alt=""
          />
          <div>Revoliucijos Garso Takelis</div>
        </li>
        <li>
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/download (1).jpeg"
            alt=""
          />
          <div>99</div>
        </li>
        <li>
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/download (3).jpeg"
            alt=""
          />
          <div>sportas</div>
        </li>
        <li>
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/download.jpeg"
            alt=""
          />
          <div>Imagine Dragons</div>
        </li>
        <li>
          <img
            src="/Users/renatas.mazeika/spotify-vue/src/assets/images.jpeg"
            alt=""
          />
          <div>C.C Catch</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
        <li>
          <img src="" alt="" />
          <div>Your Episodes</div>
        </li>
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
  color: rgb(169, 169, 169);
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
  flex-shrink: 0;
  color: rgb(169, 169, 169);
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
  margin-left: 5px;
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
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
}

.sidebar-playlist li img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 10px;
  object-fit: cover;
}

.sidebar-playlist li:hover {
  cursor: pointer;
  background-color: var(--spotify-gray-hover);
  border-radius: 5px;
}

.sidebar-left-search-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0%;
  margin-top: 10px;
}

.sidebar-left-search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-left: 10px;
  border: none;
  color: rgb(169, 169, 169);
  border-radius: 50px;
  background: transparent;
  line-height: 0;
}

.sidebar-left-search-btn svg {
  width: 20px;
  height: 20px;
}

.sidebar-left-recents-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  gap: 6px;
  margin-right: 15px;
  border: none;
  color: rgb(169, 169, 169);
  border-radius: 50px;
  background: transparent;
  line-height: 0;
}

.sidebar-left-recents-btn svg {
  width: 20px;
  height: 20px;
}
</style>
