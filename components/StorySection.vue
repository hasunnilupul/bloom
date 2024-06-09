<template>
  <section
    id="story-section"
    class="flex flex-row items-center justify-start space-x-2 ms-2 overflow-x-auto"
  >
    <!-- add story -->
    <StoryItem label="Add" alt="+" :border="true" />
    <!-- other stories -->
    <StoryItem
      v-for="i in 10"
      :key="i"
      :image="`https://avatars.githubusercontent.com/u/73998${i}?v=4`"
      :label="'John Doe ' + i"
    />
  </section>
</template>
