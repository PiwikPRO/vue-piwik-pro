<script lang="ts" setup>
const pageData = {
  title: 'CustomEvent',
  heading: 'Send Custom Events',
  description:
    'Content Tracking lets you track custom events not defined in rest of methods.',
  methods: [
    {
      method: 'trackEvent',
      usage:
        'CustomEvent.trackEvent(category: string, action: string, name?: string | undefined, value?: number | undefined): void',
      desc: 'Tracks manual content impression event.',
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
            code="import { CustomEvent } from '@piwikpro/vue-piwik-pro'"
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
          <code>onMounted</code> (methods are invoked when the page starts) or
          on the button click using <code>@click</code> prop.
        </p>
      </article>
    </div>
  </div>
</template>
