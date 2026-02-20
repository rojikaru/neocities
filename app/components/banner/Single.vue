<script setup lang="ts">
import { defaultHeightPixels } from "~/constants/banners";
import type { Banner } from "~/types/banner";
import type { Neighbor } from "~/types/neighbor";

const { content, heightPixels = defaultHeightPixels } = defineProps<{
  content: Banner | Neighbor;
  heightPixels?: number;
}>();

const isNeighbor = (content: Banner): content is Neighbor => {
  return "link" in content && "name" in content;
};

const elementType = computed(() => (isNeighbor(content) ? "a" : "div"));
const elementProps = computed(() => {
  if (!isNeighbor(content)) {
    return {};
  }
  return {
    href: content.link,
    target: "_blank",
    rel: "noopener noreferrer"
  };
});
</script>

<template>
  <component
    :is="elementType"
    :aria-label="content.name"
    v-bind="elementProps"
    class="inline-block"
  >
    <img
      :src="content.img"
      :alt="content.name"
      :height="heightPixels"
      :style="{ height: `${heightPixels}px` }"
    >
  </component>
</template>
