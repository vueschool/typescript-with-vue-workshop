<script setup lang="ts">
import { inject } from "vue";
import { AccoridanKey } from "./AccordianEnd.vue";

const active = inject(AccoridanKey);

defineProps<{
  title: string;
}>();
</script>
<template>
  <li class="border-b border-gray-200">
    <h3 class="text-2xl p-3" @click="active = title">
      <button class="block">{{ title }}</button>
    </h3>
    <div class="p-3 pt-0" v-if="active === title">
      <slot></slot>
    </div>
  </li>
</template>
