import { createApp } from 'vue'
import App from './App.vue'

import * as PiwikPro from '../core'
export * as PageViews from '../services/pageViews/pageViews.service'

createApp(App).mount('#app')
export default {
  initialize: PiwikPro.default.init,
}
