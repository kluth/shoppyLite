import { ComponentMeta, ComponentStory } from "@storybook/react"
import Layout from "../../components/common/Layout"
import CategoryCard from "../../components/shop/CategoryCard"
import { categories } from "../../example/data"
import Category from "../../models/Category"

export default {
    title: 'Common/Layout',
    component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
}

const categorySections = categories.map((category: Category) => (
    <CategoryCard key={category.id} category={category} onClick={() => { }} />
))

export const WithCategories = Template.bind({})
WithCategories.args = {
    children: categorySections
}