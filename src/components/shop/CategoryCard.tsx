import { Card, CardContent, CardHeader, Grid } from "@mui/material"
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
                marginTop: 2,
            }}
            onClick={() => {
                params.onClick(params.category)
            }}
        >
            <CardHeader
                title={params.category.name}
                subheader={params.category.description}
                sx={{
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}/>
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
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