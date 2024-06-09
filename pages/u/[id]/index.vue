<script setup>
definePageMeta({
  layout: "chat",
  middleware: ["auth"],
});
</script>

<template>
  <div id="personal-chat" class="flex flex-col justify-between h-full">
    <!-- header section -->
    <div
      class="flex flex-row justify-between items-center p-3 space-x-3 border-b border-gray-200"
    >
      <!-- back button -->
      <NuxtLink id="back-home-nav" to="/" class="grow-0 shrink-0">
        <UIcon name="i-heroicons-chevron-left" class="text-xl !text-gray-900" />
      </NuxtLink>

      <!-- username and status -->
      <div class="grow flex flex-row space-x-2">
        <!-- user avatar -->
        <UAvatar
          size="md"
          :src="`https://avatars.githubusercontent.com/u/739985?v=4`"
          :alt="'Avatar'"
          class="grow-0 shrink-0 bg-white"
        />

        <!-- content -->
        <div class="flex flex-col items-start grow">
          <p class="text-sm font-bold text-gray-800">{{ "John Doe" }}</p>
          <span class="text-[0.73rem] font-medium text-gray-500 line-clamp-1">
            {{ "Online" }}
          </span>
        </div>
      </div>

      <!-- action buttons -->
      <div class="grow-0 shrink-0 flex space-x-3">
        <UIcon name="i-heroicons-video-camera" class="text-xl !text-black" />
        <UIcon name="i-heroicons-phone" class="text-xl !text-black" />
      </div>
    </div>

    <MessagesSection/>

    <!-- new message and attach media -->
    <div
      class="h-14 px-3 bg-white shadow border-t border-gray-100 z-10"
    >
      <div class="flex flex-row items-center justify-between my-2 space-x-3">
        <!-- attach media -->
        <UButton
          icon="i-heroicons-plus"
          class="text-xl !text-black !px-1.5"
          color="gray"
          variant="soft"
          :trailing="false"
          :ui="{ rounded: 'rounded-full' }"
        />

        <UInput type="text" size="sm" variant="none" class="w-full !ps-1.5 !bg-gray-100 !rounded-full !text-gray-700" placeholder="Start a new chat"/>

        <!-- send button -->
        <UButton
          icon="i-heroicons-paper-airplane"
          class="text-xl !bg-opacity-85 !px-1.5"
          color="primary"
          variant="solid"
          :trailing="false"
          :ui="{ rounded: 'rounded-full' }"
        />
      </div>
    </div>
  </div>
</template>