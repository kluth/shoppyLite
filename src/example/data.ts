import Order from "../models/Order";
import Product from "../models/Product";

export const products: Product[] = [
    {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        price: 10,
        image: 'https://picsum.photos/200/300'
    },
    {
        id: '2',
        name: 'Product 2',
        description: 'Description 2',
        price: 20,
        image: 'https://picsum.photos/200/300'
    },
    {
        id: '3',
        name: 'Product 3',
        description: 'Description 3',
        price: 30,
        image: 'https://picsum.photos/200/300'
    }
]

export const order: Order = {
    id: '1',
    items: [
        {
            id: '1',
            product: {
                id: '1',
                name: 'Product 1',
                description: 'Description 1',
                price: 10,
                image: 'https://picsum.photos/200/300'
            },
            quantity: 1,
            price: 10
        },
        {
            id: '2',
            product: {
                id: '2',
                name: 'Product 2',
                description: 'Description 2',
                price: 20,
                image: 'https://picsum.photos/200/300'
            },
            quantity: 2,
            price: 40
        }
    ],
    totalAmount: 3,
    totalPrice: 50,
    date: new Date().toString(),
    status: 'pending'
}

export const product = products[0]