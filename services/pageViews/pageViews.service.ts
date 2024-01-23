import { TRACK_EVENT } from '../../constants/track-event.constant'
import { push } from '../paqService/paq.service'

export function trackPageView(customPageTitle?: string) {
  push([TRACK_EVENT.PAGE_VIEW, ...(customPageTitle ? [customPageTitle] : [])])
}
