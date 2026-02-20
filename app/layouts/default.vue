<template>
  <div
    class="mx-4 my-2 min-h-[calc(100svh-2rem)] flex flex-col justify-between"
  >
    <main class="mx-auto max-w-7xl p-4 text-pretty">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
