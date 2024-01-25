import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import VuePiwikPro from '@piwikpro/vue-piwik-pro'

VuePiwikPro.initialize(
  '0c0a8661-8c10-4f59-b8fc-1c926cbac184',
  'https://astralprojection.promilci.com',
)

createApp(App).mount('#app')
