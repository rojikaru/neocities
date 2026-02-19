<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="text-sm text-center text-annotation flex flex-col items-center">
    &copy; {{ year }} rojikaru. All rights reserved.
    <a href="https://neocities.org/" class="inline-block mt-4">
      <NuxtImg src="/neocities.png" alt="Neocities Logo" height="48" class="h-12" />
    </a>
  </footer>
</template>
