<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

useHead({
  htmlAttrs: {
    class: "h-full bg-white",
  },
  bodyAttrs: {
    class: "h-full scrollbar-light",
  },
});
</script>

<style lang="css">
body {
  font-family: Nunito Sans, sans-serif;
}
</style>
