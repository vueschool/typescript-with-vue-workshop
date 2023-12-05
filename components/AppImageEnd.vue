<script setup lang="ts">
const error = ref();
const props = withDefaults(
  defineProps<{
    /** The image src */
    src: string;
    /** The image to show if provided src is broken */
    placeholder?: string;
    /** 16x9, 1x1, or auto */
    size: "16x9" | "1x1" | "auto";
  }>(),
  {
    placeholder: "/no-image.jpg",
  }
);

const loadError = {
  src: props.src,
  message: "Image failed to load",
};

const loadSuccess = {
  src: props.src,
  message: "Image loaded successfully",
};

const emit = defineEmits<{
  loadFailed: [payload: typeof loadError];
  loadSuceeded: [payload: typeof loadSuccess];
}>();

const _src = computed(() => (error.value ? props.placeholder : props.src));
</script>
<template>
  <img
    class="object-cover"
    :class="{
      'aspect-video': size === '16x9',
      'aspect-square': size === '1x1',
    }"
    :src="_src"
    @error="
      error = true;
      $emit('loadFailed', loadError);
    "
    @load="!error && emit('loadSuceeded', loadSuccess)"
  />
</template>
<style scoped>
img.aspect-video {
  aspect-ratio: 16/9;
}

img.aspect-square {
  aspect-ratio: 1/1;
}
</style>
