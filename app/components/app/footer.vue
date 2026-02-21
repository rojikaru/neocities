<script setup lang="ts">
import { neocities } from "~/constants/neighbors/neocities";

const creationYear = 2025;
const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>

<template>
  <footer
    class="text-sm text-center text-annotation flex flex-col gap-4 items-center"
  >
    <ClientOnly>
      <span>
        Copyright &copy; {{ creationYear }}
        <template v-if="currentYear !== creationYear">
          - {{ currentYear }}
        </template>
        rojikaru
      </span>
      <template #fallback>
        <span> Copyright &copy; {{ creationYear }} rojikaru </span>
      </template>
    </ClientOnly>
    <BannerSingle :content="neocities" :height-pixels="48" />
  </footer>
</template>
