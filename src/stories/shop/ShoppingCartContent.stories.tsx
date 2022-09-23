import { ComponentMeta, ComponentStory } from "@storybook/react"
import ShoppingCartContent from "../../components/shop/ShoppingCartContent"
import { order } from "../../example/data"

export default {
    title: 'Shop/ShoppingCartContent',
    component: ShoppingCartContent,
} as ComponentMeta<typeof ShoppingCartContent>

const Template: ComponentStory<typeof ShoppingCartContent> = (args) => <ShoppingCartContent {...args} />

export const Default = Template.bind({})
Default.args = {
    order
}

export const Empty = Template.bind({})
Empty.args = {
}