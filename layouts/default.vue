<script lang="ts" setup></script>

<template>
  <main class="relative h-screen w-full">
    <!-- navigation menu -->
    <Navigation/>
    <!-- page content start -->
    <slot />
    <!-- page content end -->
  </main>
  <UNotifications />
</template>
