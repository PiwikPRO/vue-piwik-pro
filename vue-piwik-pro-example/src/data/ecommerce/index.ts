import type { Product } from '@piwikpro/vue-piwik-pro'

export const products: Product[] = [
  {
    sku: 'sku-1',
    name: 'Product 1',
    category: ['product-category', 'product-category-1'],
    brand: 'Brand 1',
    variant: 'Variant 1',
    price: 9.99,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-2',
    name: 'Product 2',
    category: ['product-category', 'product-category-2'],
    brand: 'Brand 2',
    variant: 'Variant 2',
    price: 19.98,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-3',
    name: 'Product 3',
    category: ['product-category', 'product-category-3'],
    brand: 'Brand 3',
    variant: 'Variant 3',
    price: 29.97,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-4',
    name: 'Product 4',
    category: ['product-category', 'product-category-4'],
    brand: 'Brand 4',
    variant: 'Variant 4',
    price: 39.96,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-5',
    name: 'Product 5',
    category: ['product-category', 'product-category-5'],
    brand: 'Brand 5',
    variant: 'Variant 5',
    price: 49.95,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
  {
    sku: 'sku-6',
    name: 'Product 6',
    category: ['product-category', 'product-category-6'],
    brand: 'Brand 6',
    variant: 'Variant 6',
    price: 59.94,
    customDimensions: {
      1: 'value1',
      2: 'value2',
    },
  },
]
