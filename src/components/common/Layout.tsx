import { Container } from '@mui/material'
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
            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Hero />
                {params.children}
            </Container>
        </>
    )
}

export default Layout