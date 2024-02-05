<script setup lang="ts">
const pageData = {
  title: 'PageViews',
  heading: 'Send page views and virtual page views',
  description:
    'Page views are tracked automatically but method can be invoked manually with specified parameters.',
  methods: [
    {
      method: 'trackEvent',
      usage:
        'PageViews.trackEvent(category: string, action: string, name?: string | undefined, value?: number | undefined): void',
      desc: 'Tracks manual content impression event.',
    },
  ],
}
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
        <code>onMounted()</code>
        (methods are invoked when the page starts) or as on example below on the
        button click using <code>@click</code>
        prop.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
