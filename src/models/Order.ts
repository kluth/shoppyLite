import OrderItem from "./OrderItem"

type Order = {
    id: string
    items: OrderItem[]
    totalAmount: number
    totalPrice: number
    date: string
    status: 'pending' | 'completed'
}

export default Order