import { ComponentMeta, ComponentStory } from "@storybook/react"
import CategoryCard from "../../components/shop/CategoryCard"
import { products } from "../../example/data"

export default {
    title: 'Shop/CategoryCard',
    component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>

const Template: ComponentStory<typeof CategoryCard> = (args) => <CategoryCard {...args} />

export const Default = Template.bind({})
Default.args = {
    category: {
        id: '1',
        name: "Category 1",
        description: "Description 1",
        image: "https://source.unsplash.com/random",
        products: products
    }
}