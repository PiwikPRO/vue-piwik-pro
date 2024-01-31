<script setup lang="ts">
import { Product } from '../../../dist/interfaces/product'

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>property</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, property) in product" :key="property">
          <th>{{ property }}</th>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
