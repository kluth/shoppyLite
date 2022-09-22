import { ComponentMeta, ComponentStory } from "@storybook/react"
import Authentication from "../../components/auth/Authentication"

export default {
    title: 'Auth/Authentication',
    component: Authentication,
} as ComponentMeta<typeof Authentication>

const Template: ComponentStory<typeof Authentication> = (args) => <Authentication {...args} />

export const Default = Template.bind({})
Default.args = {
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    auth: {
        user: {
            email: 'john@doe.com',
            name: 'John Doe'
        }
    }
}