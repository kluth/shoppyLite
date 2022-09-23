import { Box, Container, Typography } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import Product from "../../models/Product"
import ProductCard from "./ProductCard"

type HeroProps = {
    products?: Product[]
}
const Hero = (params: HeroProps) => {
    return (
        <Container
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {params.products && (
                <Carousel
                    autoPlay={true}
                    animation="slide"
                    indicators={true}
                    navButtonsAlwaysVisible={false}
                    navButtonsProps={{
                        style: {
                            backgroundColor: '#ffffff',
                            color: '#494949',
                            borderRadius: 0,
                            margin: 0,
                        }
                    }}
                    duration={1500}
                    cycleNavigation={true}
                    stopAutoPlayOnHover={true}
                        swipe={true}
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                >
                {params.products && params.products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
                </Carousel>
                )}
                {!params.products && (
                    <Typography variant="h1" color="text.primary" sx={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                        fontFamily: "serif",
                    }}>
                        Welcome aboard!
                    </Typography>
                )}
            </Box>
        </Container>
    )
}

export default Hero