<script lang="ts" setup>
const props = defineProps<{
  thumbnail: string;
  title: string;
  description: string;
}>();
</script>
<template>
  <UCard>
    <template #header>
      <div class="aspect-video bg-slate-950 rounded mb-2 overflow-hidden">
        <img
          class="object-cover aspect-video block"
          :src="thumbnail"
          :alt="title"
        />
      </div>
      <h3 class="text-2xl">{{ title }}</h3>
    </template>

    {{ description }}
  </UCard>
</template>

<style scoped>
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
