<script setup lang="ts">
import { profileLink, email, sourceCode } from "~/constants/contacts";

useHead({
  title: "Credits",
});
</script>

<template>
  <article class="space-y-4">
    <section>
      <h1>Credits</h1>
      <p>
        This site was made by me, <a :href="profileLink">rojikaru</a>.<br>
        The source code is available on
        <a :href="sourceCode">GitHub</a>.
        <br>
        If you want to contact me, you can email me at {{ email }}.
      </p>
    </section>
    <section>
      <h2>Acknowledgements</h2>
      <ul>
        <li>
          Thanks to the Neocities community for their support and feedback.
        </li>
      </ul>
    </section>
    <section>
      <h2>Resources</h2>
      <ul>
        <li>
          <a href="https://nuxt.com/">Nuxt</a> - The Vue framework used to build
          this site.
        </li>
        <li>
          <a href="https://streamlinehq.com/" title="Pixel icons"
            >Streamline Icons</a
          >
          - The source of some of the icons here
        </li>
      </ul>
    </section>
  </article>
</template>
