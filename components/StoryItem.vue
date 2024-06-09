<script setup>
const props = defineProps({
  image: String,
  label: { type: String, required: true },
  alt: String,
  border: { type: Boolean, default: false },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-1">
    <UAvatar
      size="md"
      :src="props.image"
      :alt="props.alt ? props.alt : props.label"
      class="bg-white"
      :class="{ 'border-dashed border-2 border-gray-200': border }"
    />
    <p
      class="w-10 text-center text-[0.6rem] font-medium tracking-tight text-gray text-nowrap line-clamp-1"
    >
      {{ props.label }}
    </p>
  </div>
</template>
