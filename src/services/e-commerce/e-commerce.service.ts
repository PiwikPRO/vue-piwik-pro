import { TRACK_EVENT } from '../../constants/track-event.constant'
import { Product } from '../../interfaces/product'
import { PaymentInformation } from '../../interfaces/payment'
import { push } from '../paqService/paq.service.ts'

/**
 * @deprecated Please use the ecommerceAddToCart instead.
 */
export function addEcommerceItem(
  productSKU: string,
  productName: string,
  productCategory: string | string[],
  productPrice: number,
  productQuantity: number
) {
  push([
    TRACK_EVENT.ADD_ECOMMERCE_ITEM,
    productSKU,
    productName,
    productCategory,
    productPrice,
    productQuantity,
  ])
}

export function ecommerceAddToCart(products: Product[]) {
  push([TRACK_EVENT.ECOMMERCE_ADD_TO_CART, products])
}

/**
 * @deprecated Please use the ecommerceRemoveFromCart instead.
 */
export function removeEcommerceItem(productSKU: string) {
  push([TRACK_EVENT.REMOVE_ECOMMERCE_ITEM, productSKU])
}
export function ecommerceRemoveFromCart(products: Product[]) {
  push([TRACK_EVENT.ECOMMERCE_REMOVE_FROM_CART, products])
}

/**
 * @deprecated
 */
export function getEcommerceItems(): Promise<object> {
  return new Promise((resolve, reject) => {
    try {
      push([
        function (this: any): void {
          resolve(this.getEcommerceItems())
        },
      ])
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e)
      }
    }
  })
}

/**
 * @deprecated Please use the ecommerceOrder instead.
 */
export function trackEcommerceOrder(
  orderId: string,
  orderGrandTotal: number,
  orderSubTotal?: number,
  orderTax?: number,
  orderShipping?: number,
  orderDiscount?: number
) {
  push([
    TRACK_EVENT.TRACK_ECOMMERCE_ORDER,
    orderId,
    orderGrandTotal,
    orderSubTotal,
    orderTax,
    orderShipping,
    orderDiscount,
  ])
}

export function ecommerceOrder(
  products: Product[],
  paymentInformation: PaymentInformation
) {
  push([TRACK_EVENT.ECOMMERCE_ORDER, products, paymentInformation])
}

/**
 * @deprecated Please use the ecommerceCartUpdate instead.
 */
export function trackEcommerceCartUpdate(cartAmount: number) {
  push([TRACK_EVENT.TRACK_ECOMMERCE_CART_UPDATE, cartAmount])
}

export function ecommerceCartUpdate(
  products: Product[],
  grandTotal: PaymentInformation['grandTotal']
) {
  push([TRACK_EVENT.ECOMMERCE_CART_UPDATE, products, grandTotal])
}

export function ecommerceProductDetailView(products: Product[]) {
  push([TRACK_EVENT.ECOMMERCE_PRODUCT_DETAIL_VIEW, products])
}

/**
 * @deprecated
 */
export function clearEcommerceCart() {
  push([TRACK_EVENT.CLEAR_ECOMMERCE_CART])
}

/**
 * @deprecated
 */
export function setEcommerceView(
  productSKU: string,
  productName?: string,
  productCategory?: string[],
  productPrice?: string
) {
  push([
    TRACK_EVENT.SET_ECOMMERCE_VIEW,
    productSKU,
    productName,
    productCategory,
    productPrice,
  ])
}
