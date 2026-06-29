import { ref } from 'vue'

export type ToastItem = { id: number; message: string }

const toasts = ref<ToastItem[]>([])
let counter = 0

export const useToast = () => {
  const remove = (id: number) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  const add = (message: string, timeout = 3000) => {
    const id = ++counter
    toasts.value = [...toasts.value, { id, message }]
    setTimeout(() => remove(id), timeout)
  }

  return { toasts, add, remove }
}
