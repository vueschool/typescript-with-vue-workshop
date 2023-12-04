<template>
  <div class="h-[100vh] flex justify-center items-center">
    <div>
      <div class="flex items-center justify-center mb-10">
        <img
          width="150"
          height="150"
          class="object-fit"
          src="/typescript-logo.png"
          alt="TypeScript"
        />
        <span class="text-[100px] inline-block ml-5">+</span
        ><img
          width="150"
          height="150"
          class="object-fit"
          src="/vue-logo.png"
          alt="Vue.js"
        />
      </div>

      <h1 class="text-6xl">TypeScript + Vue.js Workshop</h1>
      <UButtonGroup class="mt-10 [&>*:nth-of-type(even)]:opacity-70">
        <UButton to="https://github.com/vueschool/typescript-with-vue-workshop">
          Exercise 1
        </UButton>
        <UButton to="/exercise-2-begin"> Exercise 2: Start </UButton>
        <UButton to="/exercise-2-end"> Exercise 2: End </UButton>
        <UButton to="/exercise-3-begin"> Exercise 3: Start </UButton>
        <UButton to="/exercise-3-end"> Exercise 3: End </UButton>
      </UButtonGroup>
    </div>
  </div>
</template>
