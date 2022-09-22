import { ComponentMeta, ComponentStory } from "@storybook/react"
import Layout from "../../components/common/Layout"

export default {
    title: 'Common/Layout',
    component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
}

export const WithProductsInHero = Template.bind({})