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
import React from "react"
import MenuDrawer from "./MenuDrawer"

type ToolbarProps = {
    children?: React.ReactNode
}

const Toolbar = (params: ToolbarProps) => {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    return (
        <>
        <MuiToolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setOpenDrawer(!openDrawer)}
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
        <MenuDrawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
        />
        </>
    )
}

export default Toolbar