import { ComponentMeta, ComponentStory } from "@storybook/react"
import Hero from "../../components/shop/Hero"
import { products } from "../../example/data"

export default {
    title: 'Shop/Hero',
    component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
    products
}