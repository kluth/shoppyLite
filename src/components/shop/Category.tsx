import { Grid, Typography } from "@mui/material"
import Product from "../../models/Product"
import ProductCard from "./ProductCard"
import { useParams } from "react-router-dom"
import { categories } from "../../example/data"

type CategoryProps = {
}

const Category = (params: CategoryProps) => {
    const slug = useParams<{ categorySlug: string }>().categorySlug
    const category = categories.find(category => {
        console.log(category.slug)
        console.log(slug)
        return category.slug === slug
    })

    return (
        <>
            <Typography variant="h2" gutterBottom>
                {category?.name}
            </Typography>
        <Grid container sx={{
            flexWrap: "wrap",
            width: "100%",
            gridGap: 20,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {category && category.products && category.products.map((product: Product) => (
                <Grid item key={product.id}
                    sx={{
                        width: "30%",
                        height: "100%",
                    }}
                >
                    <ProductCard product={product}
                        sx={{
                            height: "100%",
                            width: "100%",
                        }}
                        key={product.id}
                    />
                </Grid>
            ))}
            </Grid>
            </>
    )
}

export default Category
