import {
    ComponentMeta, ComponentStory
} from '@storybook/react'
import AppBar from '../../components/common/AppBar'
import Toolbar from '../../components/common/Toolbar'

export default {
    title: 'Common/AppBar',
    component: AppBar,
} as ComponentMeta<typeof AppBar>

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />

export const Default = Template.bind({})

Default.args = {
    children: <Toolbar />
}