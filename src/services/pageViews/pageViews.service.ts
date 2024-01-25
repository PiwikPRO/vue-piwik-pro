import { TRACK_EVENT } from '../../constants/track-event.constant.ts'
import { push } from '../paqService/paq.service.ts'

export function trackPageView(customPageTitle?: string) {
  push([TRACK_EVENT.PAGE_VIEW, ...(customPageTitle ? [customPageTitle] : [])])
}
