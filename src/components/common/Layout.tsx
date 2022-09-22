import Hero from '../shop/Hero'
import AppBar from './AppBar'
import Toolbar from './Toolbar'

type LayoutProps = {
    children?: React.ReactNode
}

const Layout = (params: LayoutProps) => {
    return (
        <>
            <AppBar>
                <Toolbar />
            </AppBar>
            <Hero />
        </>
    )
}

export default Layout