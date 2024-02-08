<script lang="ts" setup>
import CustomDimensionResults from '../components/CustomDimensionResults.vue'
const pageData = {
  title: 'CustomDimensions',
  heading: 'Custom Dimensions',
  description:
    'Collection of methods to manage custom dimensions through the Piwik PRO API.',
  methods: [
    {
      method: 'setCustomDimensionValue',
      usage:
        'CustomDimensions.setCustomDimensionValue(customDimensionId: string | number, customDimensionValue: string)',
      desc: 'Sets a custom dimension value to be used later.',
    },
    {
      method: 'deleteCustomDimension',
      usage:
        'CustomDimensions.deleteCustomDimension(customDimensionId: string)',
      desc: 'Removes a custom dimension with the specified ID.',
    },
    {
      method: 'getCustomDimensionValue',
      usage:
        'CustomDimensions.getCustomDimensionValue(customDimensionId: string | number)',
      desc: 'Returns the value of a custom dimension with the specified ID.',
    },
  ],
}
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body prose max-w-full">
      <article>
        <h1>{{ pageData.heading }}</h1>
        <div>
          <p>{{ pageData.description }}</p>
        </div>
        <h2>Import</h2>
        <div>
          <highlightjs
            language="typescript"
            code="import { CustomDimensions } from '@piwikpro/vue-piwik-pro'"
          />
        </div>
        <h2>Methods</h2>
        <ul>
          <li v-for="method in pageData.methods" :key="method.method">
            <h4>{{ method.method }}</h4>
            <p>{{ method.desc }}</p>
            <highlightjs language="typescript" :code="method.usage" />
          </li>
        </ul>
      </article>
    </div>
  </div>

  <div class="card w-full bg-base-100 shadow-xl mt-5">
    <div class="card-body prose max-w-full">
      <CustomDimensionResults />
    </div>
  </div>
</template>
