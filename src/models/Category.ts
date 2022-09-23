import Product from "./Product"

type Category = {
    id: string
    name: string
    description?: string
    image?: string
    products?: Product[]
}

export default Category