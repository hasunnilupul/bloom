<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="flex flex-col space-y-3">
    <!-- header section -->
    <div class="flex flex-row justify-between items-center mx-2 mt-3">
      <h4 class="text-center text-xl font-semibold tracking-wide">Bloom</h4>
      <UIcon name="i-heroicons-magnifying-glass" class="text-xl" />
    </div>

    <!-- story section -->
    <StorySection />

    <!-- chat section -->
    <ChatSection />
  </div>
</template>
