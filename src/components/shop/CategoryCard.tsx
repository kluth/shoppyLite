import { Card, CardContent, Grid, Typography } from "@mui/material"
import Category from "../../models/Category"
import ProductCard from "./ProductCard"

type CategoryCardProps = {
    category: Category
    onClick: (category: Category) => void
}

const CategoryCard = (params: CategoryCardProps) => {
    return (
        <Card
            sx={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${params.category.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                border: "1px solid black"
            }}
            onClick={() => {
                params.onClick(params.category)
            }}
        >
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {params.category.name}
                </Typography>
                <Typography>
                    {params.category.description}
                </Typography>
                <Grid container sx={{
                    flexWrap: "wrap",
                    width: "100%",
                    gridGap: 10,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {params.category.products && params.category.products.map(product => (
                        <Grid item key={product.id}
                            sx={{
                                width: "25%",
                                height: "100%",
                            }}
                        >
                            <ProductCard product={product}
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CategoryCard