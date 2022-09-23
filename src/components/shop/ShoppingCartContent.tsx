import { Container, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from "@mui/material"
import Order from "../../models/Order"

type ShoppingCartContentProps = {
    order?: Order
}

const ShoppingCartContent = (params: ShoppingCartContentProps) => {
    let total = 0
    return (
        <Container
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!params.order && <TableRow>
                            <TableCell colSpan={4} align="center">No items in cart</TableCell>
                        </TableRow>}
                        {params.order?.items.map((item, index) => {
                            total += item.product.price * item.quantity
                            return (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.product.name}
                                    </TableCell>
                                    <TableCell align="right">{Intl.NumberFormat(['de', 'us', 'jp'], {
                                        style: 'currency',
                                        currency: 'EUR',
                                        currencyDisplay: 'symbol',
                                    }).format(item.product.price)}</TableCell>
                                    <TableCell align="right">{item.quantity}</TableCell>
                                    <TableCell align="right">{Intl.NumberFormat(['de', 'us', 'jp'], {
                                        style: 'currency',
                                        currency: 'EUR',
                                        currencyDisplay: 'symbol',
                                    }).format(item.product.price * item.quantity)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell align="right">{Intl.NumberFormat(['de', 'us', 'jp'], {
                                style: 'currency',
                                currency: 'EUR',
                                currencyDisplay: 'symbol',
                            }).format(total)}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ShoppingCartContent