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
      root: '[--gap:--spacing(3)] mb-4',
    }"
  >
    <div v-for="banner in banners" :key="banner.id" class="shrink-0">
      <BannerSingle
        :content="banner"
        :width-pixels="widthPixels"
        :height-pixels="heightPixels"
      />
    </div>
  </UMarquee>
</template>
