<script lang="ts" setup></script>
<template>
  <div class="wrapper">
    <div>
      <h1 class="text-3xl mb-10 text-center">FizzBuzz! 🎉</h1>
      <UInput size="xl" type="number" min="1" />
      <UBadge
        size="lg"
        class="block text-center"
        label="Result: Number, fizz, buzz, or fizbuzz"
      ></UBadge>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply h-[100vh] flex justify-center items-center;
}
</style>
