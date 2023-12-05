<script setup lang="ts">
import AppModal from "@/components/AppModal.vue";

const modal = ref<InstanceType<typeof AppModal>>();

onMounted(() => {
  if (!modal.value) return;
  modal.value.open();
});
</script>

<template>
  <AppModal ref="modal" />
</template>
