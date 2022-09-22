import { Box, Container } from "@mui/material"
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
            <Box sx={{ flexGrow: 1, justifyItems: 'center' }}>
                <Carousel
                    autoPlay={true}
                    animation="slide"
                    indicators={true}
                    navButtonsAlwaysVisible={true}
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
                >
                {params.products && params.products.map((product, index) => (
                    <ProductCard product={product} />
                ))}
                </Carousel>
            </Box>
        </Container>
    )
}

export default Hero