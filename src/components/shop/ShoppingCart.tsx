import {
    Badge,
    Drawer,
    IconButton
} from "@mui/material"
import {
    ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material'
import Order from "../../models/Order"
import React from "react"
import ShoppingCartContent from "./ShoppingCartContent"

type ShoppingCartProps = {
    order?: Order
}

const ShoppingCart = (params: ShoppingCartProps) => {
    const [openCart, setOpenCart] = React.useState(false)
    return (
        <>
        <IconButton
            aria-label="show shopping cart"
            color="inherit"
            onClick={() => {
                setOpenCart(!openCart)
            }}
        >
            <Badge
                badgeContent={params.order ? params.order.totalAmount : 0}
                color="info"
            >
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
        <Drawer
            anchor="right"
            open={openCart}
            onClose={() => {
                setOpenCart(false)
            }}
        >
                <ShoppingCartContent order={params.order} />
        </Drawer>
        </>
    )
}

export default ShoppingCart