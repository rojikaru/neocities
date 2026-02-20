<script setup lang="ts">
import type { Banner } from "~/types/banner";
import type { Neighbor } from "~/types/neighbor";
import { defaultHeightPixels } from "~/constants/banners";

const { banners, heightPixels = defaultHeightPixels } = defineProps<{
  banners: (Banner | Neighbor)[];
  heightPixels?: number;
}>();
</script>

<template>
  <ul class="list-none flex flex-row flex-wrap justify-between gap-4">
    <li v-for="banner in banners" :key="banner.id">
      <BannerSingle :content="banner" :height-pixels="heightPixels" />
    </li>
  </ul>
</template>
