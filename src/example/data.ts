import Category from "../models/Category";
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

export const categories: Category[] = [
    {
        id: '1',
        name: 'Kitchen',
        description: 'Be cool like a fridge or hot as the oven in this kitchen collection',
        image: 'https://picsum.photos/200/300/?blur',
        products: products,
        slug: 'kitchen'
    },
    {
        id: '2',
        name: 'Bathroom',
        description: 'Water is deep out here in this bathroom collection',
        image: 'https://picsum.photos/200/300',
        products: products,
        slug: 'bathroom'
    },
    {
        id: '3',
        name: 'Living room',
        description: 'Netflix and chill optimized furniture in this living room collection',
        image: 'https://picsum.photos/200/300',
        products: products,
        slug: 'living-room'
    }
]