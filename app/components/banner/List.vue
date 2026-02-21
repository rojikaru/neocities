<script setup lang="ts">
import type { Banner } from "~/types/banner";
import type { Neighbor } from "~/types/neighbor";
import type { SingleBannerProps } from "./Single.vue";

type BannerListProps = Omit<SingleBannerProps, "content"> & {
  banners: Array<Banner | Neighbor>;
};

const {
  banners,
  heightPixels,
  widthPixels = null,
} = defineProps<BannerListProps>();
</script>

<template>
  <ul class="list-none flex flex-row flex-wrap justify-between gap-4">
    <li v-for="banner in banners" :key="banner.id">
      <BannerSingle
        :content="banner"
        :width-pixels="widthPixels"
        :height-pixels="heightPixels"
      />
    </li>
  </ul>
</template>
