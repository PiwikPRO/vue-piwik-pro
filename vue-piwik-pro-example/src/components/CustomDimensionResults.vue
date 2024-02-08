<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { CustomDimensions } from '@piwikpro/vue-piwik-pro'
import Toast from './Toast.vue'

const customDimValue = ref<string>('')

const toastMessage = ref('')
const isToastVisible = ref(false)

const showToast = (message: string) => {
  toastMessage.value = message
  isToastVisible.value = true
}

const callAsyncMethods = async () => {
  // function setCustomDimensionValue(customDimensionId: string | number, customDimensionValue: string): void
  CustomDimensions.setCustomDimensionValue(12, 'value')

  // function getCustomDimensionValue(customDimensionId: string | number): Promise<string>
  const cDimValue = await CustomDimensions.getCustomDimensionValue(12)
  customDimValue.value = cDimValue

  // function deleteCustomDimension(customDimensionId: string): void
  CustomDimensions.deleteCustomDimension('12')
}

onMounted(() => {
  callAsyncMethods()
})
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body prose max-w-full">
      <h2>Examples results</h2>
      <div>
        <p>
          <code>CustomDimensions.getCustomDimensionValue()</code> -
          {{ customDimValue }}
        </p>
      </div>
      <h2>Sample usage</h2>
      <p>
        To see tracking methods usage please turn developers tools in your
        browser and track results on the console.
      </p>
      <p>
        You can use methods from that collection in page props for example{' '}
        <code>onMounted</code> (methods are invoked when the page starts) or as
        on example below on the button click using <code>@click</code> event.
      </p>
      <button
        class="btn"
        @click="
          () => {
            CustomDimensions.setCustomDimensionValue(12, 'value')
            showToast('CustomDimensions.setCustomDimensionValue(12, \'value\')')
          }
        "
      >
        CustomDimensions.setCustomDimensionValue
      </button>
      <button
        class="btn"
        @click="
          async () => {
            CustomDimensions.getCustomDimensionValue(12)
            customDimValue = await CustomDimensions.getCustomDimensionValue(12)
            showToast('CustomDimensions.getCustomDimensionValue(12)')
          }
        "
      >
        CustomDimensions.getCustomDimensionValue
      </button>
      <button
        class="btn"
        @click="
          () => {
            CustomDimensions.deleteCustomDimension('12')
            showToast('CustomDimensions.deleteCustomDimension(\'12\')')
          }
        "
      >
        CustomDimensions.deleteCustomDimension
      </button>
    </div>
  </div>
  <Toast :message="toastMessage" v-model="isToastVisible" />
</template>
