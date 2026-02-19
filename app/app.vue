<script setup lang="ts">
useHead({
  titleTemplate: (chunk) => (chunk ? `${chunk} - rojikaru` : "Rojikaru's Crib"),
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content: `Rojikaru's personal website, a cool crib 
      where I will have some fun with web development and 
      share some of my projects and thoughts. 
      I'll also have a blog where I'll write about 
      my experiences and thoughts on various topics.`,
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
