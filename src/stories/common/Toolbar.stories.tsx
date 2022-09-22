import { ComponentMeta, ComponentStory } from "@storybook/react"
import Toolbar from "../../components/common/Toolbar"

export default {
    title: 'Common/ToolBar',
    component: Toolbar,
} as ComponentMeta<typeof Toolbar>

const Template: ComponentStory<typeof Toolbar> = (args) => <Toolbar {...args} />

export const Default = Template.bind({})
Default.args = {
}