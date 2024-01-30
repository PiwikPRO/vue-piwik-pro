import { LimitedArrayFiveStrings } from './utils.ts'

type DimensionId = number

export type Product = {
  sku: string
  name?: string
  category?: LimitedArrayFiveStrings<string[]>
  price?: number
  quantity?: number
  brand?: string
  variant?: string
  customDimensions?: Record<DimensionId, string>
}
