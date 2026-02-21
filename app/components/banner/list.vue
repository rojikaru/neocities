<script setup lang="ts">
import type { Banner } from "~/types/banner";
import type { Neighbor } from "~/types/neighbor";
import type { SingleBannerProps } from "./single.vue";

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
  <ul class="flex flex-row flex-wrap justify-evenly content-start gap-3 leading-none">
    <li v-for="banner in banners" :key="banner.id">
      <BannerSingle
        :content="banner"
        :width-pixels="widthPixels"
        :height-pixels="heightPixels"
      />
    </li>
  </ul>
</template>
