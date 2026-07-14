import { describe, it, expect, vi, beforeEach, afterEach, type Mock } from 'vitest'

vi.mock('@piwikpro/tracking-base-library', () => ({
  __esModule: true,
  default: { initialize: vi.fn(), getInitScript: vi.fn() },
  Miscellaneous: { setTrackingSourceProvider: vi.fn() },
}))

import PiwikProVue from '../index'
import PiwikProCore, { Miscellaneous } from '@piwikpro/tracking-base-library'
import { VERSION } from '../version'

beforeEach(() => vi.clearAllMocks())
afterEach(() => vi.unstubAllGlobals())

describe('initialize()', () => {
  it('sets the source provider before delegating to core', () => {
    PiwikProVue.initialize('id', 'https://example.piwik.pro')

    expect(Miscellaneous.setTrackingSourceProvider).toHaveBeenCalledWith('vue', VERSION)
    expect(
      (Miscellaneous.setTrackingSourceProvider as Mock).mock.invocationCallOrder[0]
    ).toBeLessThan((PiwikProCore.initialize as Mock).mock.invocationCallOrder[0])
  })

  it('forwards all arguments to core initialize', () => {
    PiwikProVue.initialize('id', 'https://example.piwik.pro', { nonce: 'abc' })

    expect(PiwikProCore.initialize).toHaveBeenCalledWith('id', 'https://example.piwik.pro', {
      nonce: 'abc',
    })
  })

  it('skips setting source provider during SSR (no window)', () => {
    vi.stubGlobal('window', undefined)

    PiwikProVue.initialize('id', 'https://example.piwik.pro')

    expect(Miscellaneous.setTrackingSourceProvider).not.toHaveBeenCalled()
    expect(PiwikProCore.initialize).toHaveBeenCalledWith('id', 'https://example.piwik.pro')
  })
})
