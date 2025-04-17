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
  <div class="music-item">
    <div style="display: flex">
      <img :src="music.avatar" :alt="music.name" class="music-avatar" />
      <div class="music-info">
        <h2>{{ music.name }}</h2>
        <p>Ca sĩ: {{ music.singerId.fullName }}</p>
        <p>
          <strong>{{ music.premium ? "Premium" : "Free" }}</strong>
        </p>
      </div>
    </div>
    <nuxt-link :to="`/${music.slug}`">Xem ngay</nuxt-link>
  </div>
</template>

<!---------------------- SCRIPT ---------------------->
<script setup lang="ts">
import type { TMusic } from "@/types/music";

defineProps<{
  music: TMusic;
}>();
</script>
