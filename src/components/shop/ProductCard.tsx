import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import Product from "../../models/Product"

type ProductCardProps = {
    product: Product
}

const ProductCard = (params: ProductCardProps) => {
    return (
        <Card>
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
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard