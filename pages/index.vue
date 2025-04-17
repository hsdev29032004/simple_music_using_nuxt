<!---------------------- TEMPLATE ---------------------->
<template>
  <template v-if="music && music.length > 0">
    <template v-for="song in music" :key="song._id">
      <Music :music="song" />
    </template>
  </template>
  <p v-else>Không có bài hát nào để hiển thị.</p>
</template>

<!---------------------- SCRIPT ---------------------->
<script setup lang="ts">
import type { TListMusic } from "@/types/music/index";
import type { TResponse } from "@/types/response";

useHead({
  title: "Meelow - Dashboard",
});

const { data, refresh } = await useFetch(
  "https://music-backend-q8q6.onrender.com/api/music"
);

// @ts-ignore
const response: TResponse<TListMusic> = data._rawValue;
const music: TListMusic = response.data;
</script>
