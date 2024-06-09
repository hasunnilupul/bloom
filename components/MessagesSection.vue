<template>
  <div class="grow-0 h-full w-full overflow-y-auto">
    <div class="mx-3 my-2">
      <ul class="space-y-1.5">
        <li
          v-for="i in 35"
          :key="i"
          class="flex flex-row"
          :class="{ 'flex-row-reverse': i % 3 === 0 }"
        >
          <div
            class="flex flex-row px-2 py-1.5 w-4/6 rounded-xl bg-gray-100 bg-opacity-70"
            :class="{ 'bg-primary-400 bg-opacity-100': i % 3 === 0 }"
          >
            <span class="text-xs font-semibold text-gray-700">Hi {{ i }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
