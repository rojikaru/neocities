<script setup lang="ts">
useHead({
  titleTemplate: (chunk) => (chunk ? `${chunk} - rojikaru` : "Rojikaru's Crib"),
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content:
        "Rojikaru's personal website, a cool crib where I share some of my projects and thoughts.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
