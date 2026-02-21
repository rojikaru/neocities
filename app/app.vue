<script setup lang="ts">
const title = "Rojikaru's Crib";

useHead({
  titleTemplate: (chunk) => (chunk ? `${chunk} - ${title}` : title),
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content:
        "Rojikaru's personal website, where I share some of my projects and thoughts.",
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
