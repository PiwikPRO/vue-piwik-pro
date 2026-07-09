import PiwikPro from '@piwikpro/tracking-base-library'
export * from '@piwikpro/tracking-base-library'
import { VERSION } from './version'
import { Initialize, Miscellaneous } from '@piwikpro/tracking-base-library'

const initialize: Initialize = (...args) => {
  if (typeof window !== 'undefined') {
    Miscellaneous.setTrackingSourceProvider('vue', VERSION)
  }

  PiwikPro.initialize(...args)
}

export default {
  initialize,
  getInitScript: PiwikPro.getInitScript,
}
