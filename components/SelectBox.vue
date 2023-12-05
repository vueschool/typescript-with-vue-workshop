<script setup>
const props = defineProps({
  modelValue: Object,
  options: Array,
  label: String,
});

const emit = defineEmits(["update:modelValue"]);

function getLabel(option) {
  return option[props.label] || option;
}
</script>
<template>
  <ul>
    <li
      v-for="option in options"
      :key="getLabel(option)"
      @click="emit('update:modelValue', option)"
    >
      <button>
        {{ getLabel(option) }}
      </button>
    </li>
  </ul>
</template>
