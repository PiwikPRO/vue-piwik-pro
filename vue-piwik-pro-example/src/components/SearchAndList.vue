<script lang="ts" setup>
import { ref } from 'vue'
import { SiteSearch } from '@piwikpro/vue-piwik-pro'

type Product = {
  id: string
  title: string
  description: string
}

const productList = ref<Product[]>([])

const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

const getIProductsBySearchString = async (searchString: string) => {
  try {
    SiteSearch.trackSiteSearch(searchString)
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchString}`
    )
    const { products }: { products: Product[] } = await response.json()
    productList.value = products
    return products
  } catch (error) {
    console.error(error)
    alert('Error fetching products')
  }
}

const debouncedSearch = debounce(getIProductsBySearchString, 500)
</script>

<template>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Type your search string</span>
    </div>
    <input
      type="text"
      placeholder="Type here"
      @input="
        (event) => {
          // check if input value is a string over 2 characters length
          if (
            event.target &&
            (event.target as HTMLInputElement).value.length > 2
          ) {
            debouncedSearch((event.target as HTMLInputElement).value)
          }
        }
      "
      class="input input-bordered w-full max-w-xs"
    />

    <ul class="mt-4">
      <li v-for="product in productList" :key="product.id" class="p-2 border-b">
        {{ product.title }}
      </li>
    </ul>
  </label>
</template>
