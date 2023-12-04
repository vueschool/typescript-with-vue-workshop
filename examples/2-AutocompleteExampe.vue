<script setup lang="ts">
import type { ExampleNote } from "@/types";
const notes = ref<ExampleNote[]>([
  { title: "", text: "", createdAt: new Date() },
]);
const createNote = () => {
  notes.value.push(); // 👈 will have properties autocomplete here
};
</script>

<template>
  <!-- 👇 autocompletes here too -->
  {{ notes }}
  <button @click="createNote">Create Note</button>
</template>
