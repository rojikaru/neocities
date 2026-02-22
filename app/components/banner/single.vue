<script setup lang="ts">
import type { Banner } from "~/types/banner";
import { type Neighbor, isNeighbor } from "~/types/neighbor";

export interface SingleBannerProps {
  content: Banner | Neighbor;
  heightPixels: number;
  widthPixels?: number | null;
}

const {
  content,
  heightPixels,
  widthPixels = null,
} = defineProps<SingleBannerProps>();

const elementType = computed(() => (isNeighbor(content) ? "a" : "div"));
const elementProps = computed(() => {
  if (!isNeighbor(content)) {
    return {};
  }
  return {
    href: content.link,
    target: "_blank",
    rel: "noopener noreferrer",
  };
});
</script>

<template>
  <component
    :is="elementType"
    :aria-label="content.name"
    v-bind="elementProps"
    class="block"
  >
    <NuxtImg
      :src="content.img"
      :alt="content.name"
      :width="widthPixels ?? undefined"
      :height="heightPixels"
    />
  </component>
</template>
