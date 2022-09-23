import { ComponentMeta, ComponentStory } from "@storybook/react"
import MenuDrawer from "../../components/common/MenuDrawer"

export default {
    title: 'Common/MenuDrawer',
    component: MenuDrawer,
} as ComponentMeta<typeof MenuDrawer>

const Template: ComponentStory<typeof MenuDrawer> = (args) => <MenuDrawer {...args} />

export const Default = Template.bind({})
Default.args = {
}

export const Open = Template.bind({})
Open.args = {
    open: true
}
