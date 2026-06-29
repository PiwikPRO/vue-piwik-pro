import './style.css'
import 'prismjs/themes/prism-okaidia.min.css'

import { createApp, nextTick } from 'vue'
import {
  RouteLocationNormalized,
  createRouter,
  createWebHistory,
} from 'vue-router'

import App from './App.vue'
import * as Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import VuePiwikPro from '@piwikpro/vue-piwik-pro'
import { routes } from './routes'

VuePiwikPro.initialize(
  import.meta.env.VITE_PIWIK_PRO_CONTAINER_ID as string,
  import.meta.env.VITE_PIWIK_PRO_CONTAINER_URL as string
)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to: RouteLocationNormalized) => {
  // @ts-expect-error-next-line
  window.document.title = to.meta?.title ?? 'Vue Piwik PRO Example'
})

router.afterEach(() => {
  nextTick(() => Prism.highlightAll())
})

createApp(App).use(router).mount('#app')
