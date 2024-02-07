<script lang="ts" setup>
import { SiteSearch } from '@piwikpro/vue-piwik-pro'
import Toast from '../components/Toast.vue'
import { ref } from 'vue'

const pageData = {
  title: 'SiteSearch',
  heading: 'Site Search Service',
  description:
    'Site search tracking gives you insights into how visitors interact with the search engine on your website - what they search for and how many results they get back.',
  methods: [
    {
      method: 'trackSiteSearch',
      usage:
        'SiteSearch.trackSiteSearch(keyword: string, category?: string, searchCount?: number, dimensions?: Object)',
      desc: 'Tracks search requests on a website.',
    },
  ],
}

const toastMessage = ref('')
const isToastVisible = ref(false)

const showToast = (message: string) => {
  toastMessage.value = message
  isToastVisible.value = true
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
            code="import { SiteSearch } from '@piwikpro/vue-piwik-pro'"
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
      <article>
        <h2>Sample usage</h2>
        <p>
          To see tracking methods usage please turn developers tools in your
          browser and track results on the console.
        </p>
        <p>
          You can use methods from that collection in page props for example
          <code>onMounted</code> (methods are invoked when the page starts) or
          as on example below on the button click using
          <code>@click</code>event.
        </p>
        <div>
          <button
            class="btn"
            @click="
              () => {
                SiteSearch.trackSiteSearch('keyword', 'button', 4)
                showToast(
                  'SiteSearch.trackSiteSearch(\'keyword\', \'button\', 4)'
                )
              }
            "
          >
            SiteSearch.trackSiteSearch
          </button>
        </div>
      </article>
    </div>
  </div>
  <Toast v-model="isToastVisible" :message="toastMessage" />
</template>
