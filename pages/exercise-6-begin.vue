<script setup lang="ts">
const activeBox = ref<"box1" | "box2">("box1");

// Type these 2 template refs correctly
const box1 = ref();
const box2 = ref();

const elementToMouseOver = computed(() => {
  return activeBox.value === "box1" ? box1.value : box2.value;
});

// @ts-ignore -- remove this to start seeing the TS errors
useMouseOver<HTMLDivElement>(elementToMouseOver, (e) => {
  console.log(e.target);
});
</script>

<template>
  <label> <input v-model="activeBox" type="radio" value="box1" /> Box 1 </label>
  <label> <input v-model="activeBox" type="radio" value="box2" /> Box 2 </label>
  <div ref="box1" class="h-64 w-64 bg-blue-500"></div>
  <div ref="box2" class="h-64 w-64 bg-green-500"></div>
</template>
