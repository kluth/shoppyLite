import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { Drawer, Box, Typography, List, ListItem, Collapse } from "@mui/material"
import React from "react"
import { categories } from "../../example/data"
import {
    Link,
    Router,
    useNavigate,
} from "react-router-dom"

type MenuDrawerProps = {
    open: boolean
    onClose: () => void
}

const MenuDrawer = (params: MenuDrawerProps) => {
    const [openCategories, setOpenCategories] = React.useState(false)
    return (
        <Drawer
            anchor="left"
            open={params.open}
            onClose={params.onClose}
        >
            <Box
                sx={{
                    width: 250,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <List
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    component="nav"
                >
                    <ListItem>
                        <Typography variant="h6">Home</Typography>
                    </ListItem>
                    <ListItem onClick={() => {setOpenCategories(!openCategories)}}>
                        <Typography variant="h6">Categories</Typography>
                        { openCategories ? <ExpandLess /> : <ExpandMore /> }
                    </ListItem>
                    <Collapse in={openCategories} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {categories.map((category, index) => (
                            <Link to={`/categories/${category.slug}`} key={index}>
                            <ListItem key={index}>
                                <Typography variant="h6">{category.name}</Typography>
                                    </ListItem>
                                </Link>
                        ))}
                        </List>
                    </Collapse>
                    <ListItem>
                        <Typography variant="h6">About</Typography>
                    </ListItem>
                    </List>
            </Box>
            </Drawer>
    )
}

export default MenuDrawer