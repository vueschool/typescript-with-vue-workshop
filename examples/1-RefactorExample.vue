<script setup lang="ts">
import type { ExampleNote } from "@/types";
const notes = ref<ExampleNote[]>([
  { title: "", text: "", createdAt: new Date() },
]);
const createNote = () => {
  notes.value.push({
    title: "My new note",
    text: "hello world",
    createdAt: new Date(),
  });
};

// to catch errors project wide
// npx nuxi typecheck
// npx vue-tsc --noEmit
</script>

<template>
  {{ notes }}
  <button @click="createNote">Create Note</button>
</template>
