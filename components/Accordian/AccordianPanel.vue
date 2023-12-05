<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <li class="border-b border-gray-200">
    <h3 class="text-2xl p-3">
      <button class="block">{{ title }}</button>
    </h3>
    <!-- Only display this when panel is active -->
    <div class="p-3 pt-0">
      <slot></slot>
    </div>
  </li>
</template>
