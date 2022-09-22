import { ComponentMeta, ComponentStory } from "@storybook/react"
import ProductCard from "../../components/shop/ProductCard"
import { product } from "../../example/data"

export default {
    title: 'Shop/ProductCard',
    component: ProductCard,
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />

export const WithProduct = Template.bind({})
WithProduct.args = {
    product
}