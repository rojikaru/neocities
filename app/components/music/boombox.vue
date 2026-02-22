<script setup lang="ts">
import BoomboxIcon from "~/assets/icons/boombox.svg";
import BoomboxIconAnimated from "~/assets/icons/boombox-animated.svg";
import type { MaybeArray } from "~/types/utils";

const { src } = defineProps<{
  src: MaybeArray<string>;
}>();

const isMultipleTracks = computed(() => Array.isArray(src) && src.length > 1);
const volume = ref(0.5);

const { isPlaying, toggle, nextTrack, prevTrack, setVolume } = useAudio(
  src,
  { volume: toValue(volume.value), loop: true },
);

watch(volume, setVolume);
</script>

<template>
  <section class="boombox inline-block">
    <button @click="toggle()">
      <BoomboxIcon v-if="!isPlaying" class="w-32! h-32! hover:text-lime-400" />
      <BoomboxIconAnimated v-else class="w-32! h-32! hover:text-red-400" />
    </button>
    <div
      v-if="isMultipleTracks"
      class="controls flex flex-row justify-evenly items-center overflow-clip"
    >
      <button
        aria-label="Previous track"
        class="text-xl hover:not-disabled:text-blue-400 scale-x-150 -translate-x-2"
        @click="prevTrack"
      >
        ⏮
      </button>
      <USlider v-model="volume" :step="0.01" :min="0" :max="1" class="w-1/2" />
      <button
        aria-label="Next track"
        class="text-xl hover:not-disabled:text-blue-400 scale-x-150 translate-x-2"
        @click="nextTrack"
      >
        ⏭
      </button>
    </div>
  </section>
</template>
