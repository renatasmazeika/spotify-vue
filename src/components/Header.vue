<script setup lang="ts">
import { ref } from "vue";
import SpotifyLogo from "../assets/Primary_Logo_White_CMYK.svg";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <header class="header-container">
    <div class="left-side-header">
      <img :src="SpotifyLogo" alt="Spotify" />
    </div>
    <div class="center-side-header">
      <button class="header-home-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
        </svg>
      </button>
      <div class="search-wrapper">
        <span class="header-search-icon"></span>
        <input type="text" placeholder="What do you want to play?" />
      </div>
    </div>
    <div class="right-side-header"></div>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  height: 54px;
  align-items: center;
  padding: 0 16px;
}

.left-side-header {
}

.left-side-header img {
  height: 32px;
  fill: black;
  cursor: pointer;
}

.center-side-header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.header-home-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #2a2a2a;
  border: none;
  cursor: pointer;
}

.header-home-button svg {
  width: 28px;
  height: 28px;
  fill: white;
}

.search-wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  background: #3a3a3a78;
  border-radius: 50px;
  padding: 0 12px;
  flex: 1;
  min-width: 0;
}

.search-wrapper input {
  flex: 1;
  background: transparent;
  line-height: 40px;
  height: 100%;
  border: none;
  color: white;
  outline: none;
  font-size: 14px;
}
</style>
