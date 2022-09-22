import { ComponentMeta, ComponentStory } from "@storybook/react"
import Title from "../../components/common/Title"

export default {
    title: 'Common/Title',
    component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'shoppyLite'
}

export const WithSubtitle = Template.bind({})
WithSubtitle.args = {
    title: 'shoppyLite',
    subtitle: 'The best shopping app'
}