import Product from "./Product"

type OrderItem = {
    id: string
    product: Product
    quantity: number
    price: number
}

export default OrderItem