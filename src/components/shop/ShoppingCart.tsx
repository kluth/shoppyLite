import {
    Badge,
    IconButton
} from "@mui/material"
import {
    ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material'
import Order from "../../models/Order"

type ShoppingCartProps = {
    order?: Order
}

const ShoppingCart = (params: ShoppingCartProps) => {
    return (
        <IconButton>
            <Badge
                badgeContent={params.order ? params.order.totalAmount : 0}
                color="info"
            >
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}

export default ShoppingCart