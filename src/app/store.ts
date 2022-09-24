import {
    configureStore,
} from '@reduxjs/toolkit';

import {
    setupListeners
} from '@reduxjs/toolkit/query';

import {
    categoryApi
} from './api';

const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware),
});

setupListeners(store.dispatch);

export default store;