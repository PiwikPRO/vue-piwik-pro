<script setup lang="ts">
import { PageViews } from '@piwikpro/vue-piwik-pro'
import { useToast } from '../composables/useToast'

const pageData = {
  title: 'PageViews',
  heading: 'Send page views and virtual page views',
  description:
    'Page views are tracked automatically but method can be invoked manually with specified parameters.',
  methods: [
    {
      method: 'trackEvent',
      usage: 'PageViews.trackPageView(customPageTitle?: string): void',
      desc: 'Tracks page view of the page that the function was run on.',
    },
  ],
}

const { add: showToast } = useToast()
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body prose max-w-full">
      <h2 class="card-title">{{ pageData.title }}</h2>
      <p>{{ pageData.description }}</p>
      <h3>Methods:</h3>
      <ul>
        <li v-for="method in pageData.methods" :key="method.method">
          <h4>{{ method.method }}</h4>
          <p>{{ method.desc }}</p>
          <code class="language-ts">{{ method.usage }}</code>
        </li>
      </ul>
      <h2>Sample usage</h2>
      <p>
        To see tracking methods usage please turn developers tools in your
        browser and track results on the console.
      </p>
      <p>
        You can use methods from that collection in page props for example
        <code>onMounted()</code>
        (methods are invoked when the page starts) or as on example below on the
        button click using <code>@click</code>
        prop.
      </p>
      <button
        class="btn"
        @click="
          () => {
            PageViews.trackPageView('optional title from button')
            showToast('PageViews.trackPageView(\'optional title from button\')')
          }
        "
      >
        PageViews.trackPageView
      </button>
    </div>
  </div>
</template>

<style scoped></style>
