<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      // @ts-expect-error-next-line
      document.getElementById(props.name)?.showModal()
      emit('update:modelValue', false)
    }
  }
)
</script>

<template>
  <dialog :id="name" class="modal">
    <div class="modal-box">
      <slot />
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>
