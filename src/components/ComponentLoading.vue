<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <v-overlay
    :model-value="modelValue"
    class="justify-center align-center"
    persistent
  >
    <v-progress-circular
      indeterminate
      color="primary"
      :size="100"
      :width="12"
    />
  </v-overlay>
</template>
