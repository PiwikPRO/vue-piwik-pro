import './style.css'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import VuePiwikPro from '@piwikpro/vue-piwik-pro'
import { createApp } from 'vue'
import { routes } from './routes'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/dark.min.css'

VuePiwikPro.initialize(
  import.meta.env.VITE_PIWIK_PRO_CONTAINER_ID as string,
  import.meta.env.VITE_PIWIK_PRO_CONTAINER_URL as string
)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

import { RouteLocationNormalized } from 'vue-router'

router.beforeEach((to: RouteLocationNormalized) => {
  // @ts-expect-error-next-line
  window.document.title = to.meta?.title ?? 'Vue Piwik PRO Example'
})

const app = createApp(App)

hljs.registerLanguage('javascript', typescript)
app.use(hljsVuePlugin)

app.use(router).mount('#app')
