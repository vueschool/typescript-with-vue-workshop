<script setup lang="ts">
const cons = console;
</script>
<template>
  <AppImageEnd
    width="500"
    size="auto"
    src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww"
    @load-failed="cons.log($event)"
    @load-suceeded="cons.log($event)"
  />
</template>
