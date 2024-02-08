<script setup lang="ts">
import { ContentTracking } from '@piwikpro/vue-piwik-pro'
import { onMounted } from 'vue'

const pageData = {
  title: 'ContentTracking',
  heading: 'Content Tracking Service',
  description:
    'Content Tracking lets you track what content is visible on your site and how users interact with it.',
  methods: [
    {
      method: 'trackContentImpression',
      usage:
        'ContentTracking.trackContentImpression(contentName: string, contentPiece: string, contentTarget: string)',
      desc: 'Tracks manual content impression event.',
    },
    {
      method: 'trackContentInteraction',
      usage:
        'ContentTracking.trackContentInteraction(contentInteraction: string, contentName: string, contentPiece: string, contentTarget: string)',
      desc: 'Tracks manual content interaction event.',
    },
  ],
}

onMounted(() => {
  ContentTracking.trackContentImpression(
    'contentName',
    'contentPiece',
    'contentTarget'
  )

  ContentTracking.trackContentInteraction(
    'contentInteraction',
    'contentName',
    'contentPiece',
    'contentTarget'
  )
})
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body prose max-w-full">
      <h1>{{ pageData.heading }}</h1>
      <div>
        <p>{{ pageData.description }}</p>
      </div>
      <h2>Import</h2>
      <div>
        <highlightjs
          language="typescript"
          code="import { ContentTracking } from '@piwikpro/vue-piwik-pro'"
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
      <h2>Sample usage</h2>
      <p>
        To see tracking methods usage please turn developers tools in your
        browser and track results on the console.
      </p>
      <p>
        You can use methods from that collection in page props for example
        <code>onMounted</code> (methods are invoked when the page starts) or on
        the button click using <code>@click</code> prop.
      </p>
    </div>
  </div>
</template>
