import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, IconButton, TextField } from "@mui/material"
import Product from "../../models/Product"
import {
    AddShoppingCart as AddShoppingCartIcon,
} from "@mui/icons-material"

type ProductCardProps = {
    product: Product,
    sx?: any
}

const ProductCard = (params: ProductCardProps) => {
    return (
        <Card sx={{width: 0.75, ...params.sx}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={params.product.image}
                    alt={params.product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {params.product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {params.product.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {Intl.NumberFormat(['de', 'us', 'jp'], {
                            style: 'currency',
                            currency: 'EUR',
                            currencyDisplay: 'symbol',
                        }).format(params.product.price)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <TextField
                    id="quantity"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    defaultValue={1}
                    sx={{
                        width: 100,
                    }}
                />
                <IconButton
                    aria-label="add to cart"
                    color="primary"
                >
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductCard