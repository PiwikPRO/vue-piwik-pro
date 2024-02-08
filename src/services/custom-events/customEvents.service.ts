import { TRACK_EVENT } from '../../constants/track-event.constant'
import { push } from '../paqService/paq.service'

export function trackEvent(
  category: string,
  action: string,
  name?: string,
  value?: number
) {
  const eventArguments: any[] = [
    category,
    action,
    ...(name ? [name] : []),
    ...(name ? [value] : []),
  ]
  push([TRACK_EVENT.CUSTOM_EVENT, ...eventArguments])
}
