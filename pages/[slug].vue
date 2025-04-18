<!---------------------- STYLE ---------------------->
<style scoped lang="scss">
@use "@/assets/styles/mixins" as *;

.detail-page {
  position: relative;
  padding: 40px;
  color: white;
  min-height: 100vh;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: auto;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    padding: 24px;
    text-align: center;

    img.avatar {
      width: 150px;
      height: 150px;
      border-radius: 16px;
      object-fit: cover;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    .singer {
      font-style: italic;
      margin-bottom: 20px;
    }

    audio {
      margin-top: 20px;
      width: 100%;
    }

    .lyrics {
      text-align: left;
      margin-top: 30px;
      white-space: pre-wrap;
      line-height: 1.6;
      font-size: 15px;
    }
  }
}
</style>

<!---------------------- TEMPLATE ---------------------->
<template>
  <div class="detail-page">
    <div class="content" v-if="music">
      <img :src="music.avatar" :alt="music.name" class="avatar" />
      <h1>{{ music.name }}</h1>
      <div class="singer">Ca sĩ: {{ music.singerId.fullName }}</div>
      <audio :src="music.urlMp3" controls></audio>
      <div class="lyrics">
        <h2>Lời bài hát</h2>
        <p>{{ cleanLyrics(music.lyrics) }}</p>
      </div>
    </div>
  </div>
</template>

<!---------------------- SCRIPT ---------------------->
<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useHead } from "#imports";
import type { TDetailMusic } from "@/types/music/index";
import type { TResponse } from "@/types/response";

const route = useRoute();
const music = ref<TDetailMusic | null>(null);

const { data } = await useFetch(
  `https://music-backend-q8q6.onrender.com/api/music/${route.params.slug}`
);

// @ts-ignore
const response: TResponse<TDetailMusic> = data._rawValue;
music.value = response.data;

useHead({
  title: music.value.name,
});

function cleanLyrics(raw: string): string {
  return raw.replace(/\[\d{2}:\d{2}\.\d{2}\]/g, "").trim();
}
</script>
