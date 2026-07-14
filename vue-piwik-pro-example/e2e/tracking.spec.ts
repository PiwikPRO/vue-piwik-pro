import { test, expect, type Page } from '@playwright/test'

declare global {
  interface Window {
    _paq?: unknown[][]
  }
}

const getPaq = (page: Page) => page.evaluate(() => window._paq ?? [])

const waitForTracking = (page: Page) =>
  page.waitForFunction(() => (window._paq?.length ?? 0) > 0)

test('on app load, the built plugin initializes tracking and tags _paq with the "vue" source provider', async ({
  page,
}) => {
  await page.goto('/')
  await waitForTracking(page)

  expect(await getPaq(page)).toContainEqual(
    expect.arrayContaining(['setTrackingSourceProvider', 'vue'])
  )
})

test('clicking the PageViews.trackPageView button pushes a "trackPageView" command to _paq', async ({
  page,
}) => {
  await page.goto('/page-views')
  await waitForTracking(page)
  const before = await getPaq(page)
  expect(before).not.toContainEqual(expect.arrayContaining(['trackPageView']))

  await page.getByRole('button', { name: 'PageViews.trackPageView' }).click()

  expect(await getPaq(page)).toContainEqual(
    expect.arrayContaining(['trackPageView'])
  )
})
