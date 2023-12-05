<script setup lang="ts" generic="T">
const props = defineProps<{
  modelValue?: T;
  options?: T[];
  label: keyof T;
}>();

const emit = defineEmits<{
  "update:modelValue": [payload: T];
}>();

function getLabel(option: T) {
  return option[props.label] || option;
}
</script>
<template>
  <ul>
    <li
      v-for="option in options"
      :key="(getLabel(option) as string)"
      @click="emit('update:modelValue', option)"
    >
      <button>
        {{ getLabel(option) }}
      </button>
    </li>
  </ul>
</template>
