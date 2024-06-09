<template>
  <section
    id="chat-section"
    class="flex flex-col items-center justify-start mx-2 space-y-3"
  >
    <div class="flex flex-row justify-between items-center w-full">
      <h6 class="text-center text-base font-semibold tracking-wide">Chats</h6>
      <UButton
        icon="i-heroicons-ellipsis-horizontal"
        size="md"
        color="gray"
        variant="link"
        class="!text-gray-700"
        title="Chat options"
        :padded="false"
      />
    </div>

    <!-- chat history -->
    <div
      id="chat-history"
      class="flex flex-col items-center justify-start space-y-3 w-full overflow-y-auto pb-14"
    >
      <ChatItem v-for="i in 15" :key="i" />
    </div>
  </section>
</template>
