import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../app/api'
import Category from '../../models/Category'
import Categories from '../shop/Categories'
import CategoryPage from '../shop/Category'
import CategoryCard from '../shop/CategoryCard'
import Hero from '../shop/Hero'
import AppBar from './AppBar'
import Toolbar from './Toolbar'

type LayoutProps = {
    children?: React.ReactNode
}

const Layout = (params: LayoutProps) => {
    const {
        data,
        error,
        isLoading
    } = useGetCategoriesQuery()
    return (
        <>
            <AppBar>
                <Toolbar />
            </AppBar>
            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Hero />
                {data && data.map((category: Category) => (
                    <CategoryCard category={category} key={category.id} onClick={function (category: Category): void {
                        throw new Error('Function not implemented.')
                    } } />
                ))}
                <Routes>
                    <Route path={"/"} element={<h1>HOME</h1>} />
                    <Route path={"categories"} element={<Categories />}>
                        <Route path={":categorySlug"} element={<CategoryPage />} />
                    </Route>
                </Routes>
            </Container>
        </>
    )
}

export default Layout