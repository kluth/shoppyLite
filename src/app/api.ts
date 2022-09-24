import {
    createApi, fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import Category from '../models/Category'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => '/categories'
        }),
        getCategory: builder.query<Category, string>({
            query: (slug) => `/categories/${slug}`
        })
    })
})

export const { useGetCategoriesQuery } = categoryApi
