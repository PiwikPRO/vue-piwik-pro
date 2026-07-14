import { describe, it, expect } from 'vitest'
import * as VuePiwikPro from '../index'

const EXPECTED_SERVICES = [
  'PageViews',
  'CustomEvent',
  'ContentTracking',
  'CookieManagement',
  'CustomDimensions',
  'DownloadAndOutlink',
  'eCommerce',
  'GoalConversions',
  'SiteSearch',
  'UserManagement',
  'DataLayer',
  'ErrorTracking',
  'CrossDomainTracking',
  'ClientConfiguration',
  'Heartbeat',
  'Miscellaneous',
] as const

describe('public surface of @piwikpro/vue-piwik-pro', () => {
  it.each(EXPECTED_SERVICES)('re-exports the "%s" service', (name) => {
    expect(VuePiwikPro[name]).toBeDefined()
  })

  it('default export exposes initialize() and getInitScript()', () => {
    expect(typeof VuePiwikPro.default.initialize).toBe('function')
    expect(typeof VuePiwikPro.default.getInitScript).toBe('function')
  })
})
