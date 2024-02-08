import { TRACK_EVENT } from '../../constants/track-event.constant'
import { push } from '../paqService/paq.service'

export function getUserId(): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      push([
        function (this: any): void {
          resolve(this.getUserId())
        },
      ])
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e)
      }
    }
  })
}

export function setUserId(userId: string): void {
  push([TRACK_EVENT.SET_USER_ID, userId])
}

export function resetUserId(): void {
  push([TRACK_EVENT.RESET_USER_ID])
}

export function getVisitorId(): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      push([
        function (this: any): void {
          resolve(this.getVisitorId())
        },
      ])
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e)
      }
    }
  })
}

export function getVisitorInfo(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    try {
      push([
        function (this: any): void {
          resolve(this.getVisitorInfo())
        },
      ])
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e)
      }
    }
  })
}
