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
  <UMarquee
    :ui="{
      root: '[--gap:--spacing(3)] ',
    }"
  >
    <ul class="flex flex-row flex-nowrap gap-3">
      <li v-for="banner in banners" :key="banner.id" class="shrink-0">
      <BannerSingle
        :content="banner"
        :width-pixels="widthPixels"
        :height-pixels="heightPixels"
      />
      </li>
    </ul>
  </UMarquee>
</template>
