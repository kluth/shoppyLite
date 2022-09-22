import {
    Box,
    IconButton,
    Toolbar as MuiToolbar,
} from "@mui/material"
import {
    Menu as MenuIcon
} from '@mui/icons-material'
import Authentication from "../auth/Authentication"
import ShoppingCart from "../shop/ShoppingCart"
import Title from "./Title"

type ToolbarProps = {
    children?: React.ReactNode
}

const Toolbar = (params: ToolbarProps) => {
    return (
        <MuiToolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Title
                title="shoppyLite"
                subtitle="The best shop in the world"
            />
            <ShoppingCart />
            <Authentication />
        </MuiToolbar>
    )
}

export default Toolbar