import { IProduct, IOrder, IFetchError } from "./store"
import { RemoteData } from "@devexperts/remote-data-ts"

export const getProductsActionStart = () => ({
    type: 'GET_PRODUCTS_START',
})

export const getProductsAction = (resource: RemoteData<IFetchError, IProduct[]>) => ({
    type: 'GET_PRODUCTS',
    resource
})

export const addProductToCartAction = (product: IProduct) => ({
    type: 'ADD_PRODUCT_TO_CART',
    product,
})

export const removeProductFromCartAction = (product: IProduct) => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    product,
})

export const placeOrderAction = (order: IOrder) => ({
    type: 'PLACE_ORDER',
    order
})