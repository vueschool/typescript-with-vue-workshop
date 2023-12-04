<script lang="ts" setup>
const number = ref(1);

const isDivisibleBy3 = computed((): boolean => {
  return number.value % 3 === 0;
});

const isDivisibleBy5 = computed((): boolean => {
  return number.value % 5 === 0;
});

const fizzBuzz = computed((): string => {
  if (isDivisibleBy5.value && isDivisibleBy3.value) {
    return "fizz buzz";
  }
  if (isDivisibleBy3.value) return "fizz";
  if (isDivisibleBy5.value) return "buzz";

  return number.value.toString();
});
</script>
<template>
  <div class="wrapper">
    <div>
      <h1 class="text-3xl mb-10 text-center">FizzBuzz! 🎉</h1>
      <UInput size="xl" type="number" v-model="number" min="1" />
      <UBadge size="lg" class="block text-center" :label="fizzBuzz"></UBadge>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply h-[100vh] flex justify-center items-center;
}
</style>
