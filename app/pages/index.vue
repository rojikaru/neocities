<script setup lang="ts">
import { banners } from "~/constants/banners";

useHead({
  title: "Home",
});
</script>

<template>
  <article>
    <h1>Rojikaru's crib</h1>
    <p>
      Hello, world! I am under heavy construction rn, and this page is an
      experiment.
    </p>
    <p class="mb-4">My banners:</p>
    <BannerList :banners="banners" :width-pixels="88" :height-pixels="31" />
  </article>
</template>
