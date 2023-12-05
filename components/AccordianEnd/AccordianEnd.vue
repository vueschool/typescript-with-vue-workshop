<script lang="ts">
import type { InjectionKey } from "vue";
export const AccoridanKey = Symbol() as InjectionKey<Ref<string>>;
</script>
<script setup lang="ts">
const activePanel = ref("");
provide(AccoridanKey, activePanel);
</script>
<template>
  <ul class="border-gray-200 border rounded">
    <slot></slot>
  </ul>
</template>
