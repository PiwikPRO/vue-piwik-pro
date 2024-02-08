import { TRACK_EVENT } from '../../constants/track-event.constant'
import { push } from '../paqService/paq.service'

export function trackGoal(
  goalId: number | string,
  conversionValue: number,
  dimensions?: object
) {
  push([
    TRACK_EVENT.GOAL,
    goalId,
    conversionValue,
    ...(dimensions ? [{ ...dimensions }] : []),
  ])
}
