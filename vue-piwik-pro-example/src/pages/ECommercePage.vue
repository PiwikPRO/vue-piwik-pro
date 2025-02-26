<script setup lang="ts">
import { ref } from 'vue'
import { products } from '../data/ecommerce'
import type { Product, PaymentInformation } from '@piwikpro/vue-piwik-pro'
import { eCommerce } from '@piwikpro/vue-piwik-pro'
import Toast from '../components/Toast.vue'
import Modal from '../components/Modal.vue'
import ProductDetails from '../components/ProductDetails.vue'

const toastMessage = ref('')
const isToastVisible = ref(false)

const showToast = (message: string) => {
  toastMessage.value = message
  isToastVisible.value = true
}

const isModalVisible = ref<boolean>(false)
const chosenProduct = ref<Product | null>(null)

const cart = ref<Product[]>([])

const handlelAddToCart = (product: Product) => {
  eCommerce.ecommerceAddToCart(
    [
      {
        ...product,
        quantity: 1,
      },
    ],
    { currencyCode: 'USD' }
  )

  showToast('eCommerce.ecommerceAddToCart()')

  if (cart.value.some((item) => item.sku === product.sku)) {
    cart.value = cart.value.map((item) => {
      if (item.sku === product.sku) {
        return {
          ...item,
          quantity: item.quantity ? item.quantity + 1 : 1,
        }
      }
      return item
    })
    return
  }

  cart.value = [
    ...cart.value,
    {
      ...product,
      quantity: 1,
    },
  ]
}

const handleRemoveFromCart = (product: Product) => {
  showToast('eCommerce.ecommerceRemoveFromCart()')

  eCommerce.ecommerceRemoveFromCart(
    [
      {
        ...product,
        quantity: 1,
      },
    ],
    { currencyCode: 'USD' }
  )
  cart.value = cart.value.filter((item) => item.sku !== product.sku)
}

const handleCheckout = () => {
  if (!cart.value.length) {
    alert('Please add some products to the cart first')
    return
  }

  const subTotal = cart.value.reduce((acc, product) => {
    if (product.price) {
      return acc + product.price
    }
    return acc
  }, 0)

  const tax = 10
  const shipping = 4
  const discount = 5

  const paymentInformation: PaymentInformation = {
    orderId: 'order-123',
    grandTotal: subTotal + tax + shipping - discount,
    subTotal,
    tax,
    shipping,
    discount,
  }

  showToast('eCommerce.ecommerceOrder()')
  eCommerce.ecommerceOrder(cart.value, paymentInformation, {
    currencyCode: 'USD',
  })
}

const handleShowProductDetails = (product: Product) => {
  isModalVisible.value = true
  chosenProduct.value = product
  eCommerce.ecommerceProductDetailView([product], { currencyCode: 'USD' })
  showToast('eCommerce.ecommerceProductDetailView()')
}
</script>

<template>
  <div class="columns-2">
    <div class="card bg-base-100 shadow-xl inventory">
      <div class="card-body">
        <h2 class="card-title">Inventory</h2>
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Name</th>
                <th>Show Details</th>
                <th>Add to cart</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.sku">
                <th>{{ product.sku }}</th>
                <td>{{ product.name }}</td>
                <td>
                  <button
                    class="btn btn-sm"
                    @click="handleShowProductDetails(product)"
                  >
                    details
                  </button>
                </td>
                <td>
                  <button class="btn btn-sm" @click="handlelAddToCart(product)">
                    add to cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl cart">
      <div class="card-body">
        <h2 class="card-title">Cart</h2>
        <div v-if="cart.length" class="overflow-x-auto mb-5">
          <table class="table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Remove from cart</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in cart" :key="product.sku">
                <th>{{ product.sku }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.quantity }}</td>
                <td>
                  <button
                    class="btn btn-sm"
                    @click="handleRemoveFromCart(product)"
                  >
                    remove from cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 v-else>Cart is empty</h2>
        <div v-if="cart.length" class="card-actions justify-end">
          <button class="btn btn-sm" @click="handleCheckout()">
            Make order
          </button>
        </div>
      </div>
    </div>
  </div>

  <Modal name="product-details" v-model="isModalVisible">
    <ProductDetails v-if="chosenProduct" :product="chosenProduct" />
  </Modal>
  <Toast :message="toastMessage" v-model="isToastVisible" />
</template>

<style scoped></style>
