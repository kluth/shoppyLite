import { ComponentMeta, ComponentStory } from "@storybook/react"
import Category from "../../components/shop/Category"
import { categories } from "../../example/data"

export default {
    title: 'Shop/Category',
    component: Category,
} as ComponentMeta<typeof Category>

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />

export const Default = Template.bind({})
Default.args = {
    category: categories[0]
}