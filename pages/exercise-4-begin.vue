<script setup lang="ts">
const selected = ref<{ label: string; value: string }>();
const cons = console;
</script>
<template>
  <AppImage
    width="500"
    size="auto"
    src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww"
    @load-failed="cons.log($event)"
    @load-suceeded="cons.log($event)"
  />

  <!-- This code below is only for the bonus -->
  <!-- Uncomment if you'd like to give it a try :)  -->

  <!-- Selected: {{ selected }}
  <SelectBox
    labelProperty="label"
    v-model="selected"
    :options="[
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
      { label: 'Three', value: '3' },
    ]"
  /> -->
</template>
