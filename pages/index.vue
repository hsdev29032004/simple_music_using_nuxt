<!---------------------- STYLE ---------------------->
<style scoped lang="scss">
@use "@/assets/styles/mixins" as *;

.music {
  &-item {
    @include align-center();
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    justify-content: space-between;
  }
  &-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
  }
  &-info h2 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  &-info p {
    margin: 5px 0;
    font-size: 14px;
  }
  &-info strong {
    color: #ff5733;
  }
}
</style>

<!---------------------- TEMPLATE ---------------------->
<template>
  <template v-if="music && music.length > 0">
    <div v-for="song in music" :key="song._id" class="music-item">
      <div style="display: flex;">
        <img :src="song.avatar" :alt="song.name" class="music-avatar" />
        <div class="music-info">
          <h2>{{ song.name }}</h2>
          <p>Ca sĩ: {{ song.singerId.fullName }}</p>
          <p>
            <strong>{{ song.premium ? "Premium" : "Free" }}</strong>
          </p>
        </div>
      </div>
      <nuxt-link :to="`${song.slug}`">Xem ngay</nuxt-link>
    </div>
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
