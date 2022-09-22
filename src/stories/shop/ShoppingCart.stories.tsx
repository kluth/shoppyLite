import ShoppingCart from "../../components/shop/ShoppingCart"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { order } from "../../example/data"

export default {
    title: 'Shop/ShoppingCart',
    component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>

const Template: ComponentStory<typeof ShoppingCart> = (args) => <ShoppingCart {...args} />

export const Default = Template.bind({})
Default.args = {
}

export const WithItems = Template.bind({})

WithItems.args = {
    order
}