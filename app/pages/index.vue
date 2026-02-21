<script setup lang="ts">
import { banners } from "~/constants/banners";
import { musicPaths } from "~/constants/music";

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

      <h2 class="mt-2 mb-1">My banners</h2>
      <BannerList :banners="banners" :width-pixels="88" :height-pixels="31" />

      <h2 class="mt-1">Music</h2>
      <MusicBoombox :src="musicPaths" />
  </article>
</template>
