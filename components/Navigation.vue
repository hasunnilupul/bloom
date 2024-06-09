<template>
  <nav
    class="fixed bottom-0 left-0 right-0 h-14 bg-white shadow border-t border-gray-100 z-10"
  >
    <div class="flex flex-row items-center justify-around my-2">
      <NuxtLink id="home-nav" to="/" exact-active-class="nav-active-link">
        <UIcon name="i-heroicons-home" class="nav-link" />
      </NuxtLink>

      <UButton
        id="new-chat"
        icon="i-heroicons-plus"
        color="black"
        variant="solid"
        label="New Chat"
        class="text-sm !bg-black hover:!bg-gray-950 px-4"
        :ui="{ rounded: 'rounded-full' }"
      />

      <NuxtLink
        id="profile-nav"
        to="/profile"
        exact-active-class="nav-active-link"
      >
        <UIcon
          name="i-heroicons-user"
          class="nav-link"
          exact-active-class="!text-black"
        />
      </NuxtLink>
    </div>
  </nav>
</template>

<style lang="css" scoped>
.nav-link {
  @apply text-xl font-bold !text-gray-500 hover:!text-gray-700;
}
.nav-active-link > .nav-link {
  @apply !text-black;
}
</style>
