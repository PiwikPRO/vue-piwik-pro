<script setup lang="ts">
import { computed, watch } from 'vue'

const props = defineProps({
  message: String,
  timeout: Number,
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const show = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      setTimeout(() => {
        show.value = false
      }, props.timeout || 3000)
    }
  }
)
</script>

<template>
  <div v-if="modelValue" class="toast">
    <div class="alert alert-info">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<style scoped></style>
