<!---------------------- STYLE ---------------------->
<style scoped lang="scss"></style>

<!---------------------- TEMPLATE ---------------------->
<template>
  <div>{{ $route.params.slug }}</div>
</template>

<!---------------------- SCRIPT ---------------------->
<script setup lang="ts">
import type { TMusic } from "@/types/music/index";
import type { TResponse } from "@/types/response";


const route = useRoute()
const { data, refresh } = await useFetch(
  `https://music-backend-q8q6.onrender.com/api/music/${route.params.slug}`
);

// @ts-ignore
const response: TResponse<TMusic> = data._rawValue;
const music: TMusic = response.data;
useHead({
  title: music.name,
});
</script>
