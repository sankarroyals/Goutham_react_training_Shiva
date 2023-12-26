import { configureStore } from '@reduxjs/toolkit'
import BasicReducer from './BasicReducer'
import CartReducer from './Cart/CartReducer'

export const store = configureStore({
    reducer: {
        basic: BasicReducer,
        cartS: CartReducer
    },
})