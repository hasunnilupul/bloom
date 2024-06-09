<script setup>
const router = useRouter();

const handleOnClick = async (userId) => {
  await router.push(`/u/${userId}`);
}
</script>

<template>
  <div
    id="chat-item"
    class="flex flex-row items-center grow-0 shrink-0 space-x-2 w-full h-12 rounded"
    @click="() => handleOnClick('1452')"
  >
    <!-- user avatar -->
    <UAvatar
      size="md"
      :src="`https://avatars.githubusercontent.com/u/739984?v=4`"
      :alt="'Avatar'"
      class="grow-0 shrink-0 bg-white"
    />

    <!-- content -->
    <div class="flex flex-col items-start grow">
      <p class="text-sm font-bold text-gray-800">{{ "John Doe" }}</p>
      <!-- not seen - 'font-bold text-gray-700'-->
      <span class="text-[0.73rem] font-medium text-gray-500 line-clamp-1">
        {{ "Please help me find a good monitor for my computer" }}
      </span>
    </div>

    <div class="flex flex-col items-end grow-0 shrink-0">
      <p class="text-[0.73rem] font-medium text-gray-500">{{ "02:11" }}</p>
      <span
        class="text-[0.73rem] leading-3 font-semibold px-1 py-0.5 rounded-full bg-primary-400"
      >
        {{ 5 }}
      </span>
    </div>
  </div>
</template>
