import './style.css'

import App from './App.vue'
import VuePiwikPro from '@piwikpro/vue-piwik-pro'
import { createApp } from 'vue'

VuePiwikPro.initialize(
  import.meta.env.VITE_PIWIK_PRO_CONTAINER_ID as string,
  import.meta.env.VITE_PIWIK_PRO_CONTAINER_URL as string
)

createApp(App).mount('#app')
