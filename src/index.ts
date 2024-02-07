import * as VuePiwikPro from './core'
export * as PageViews from './services/pageViews/pageViews.service'
export * as eCommerce from './services/e-commerce/e-commerce.service'
export * from './interfaces'

export default {
  initialize: VuePiwikPro.default.init,
}
