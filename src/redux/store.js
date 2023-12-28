import { configureStore } from '@reduxjs/toolkit'
import BasicReducer from './BasicReducer'
import CartReducer from './Cart/CartReducer'
import AuthReducer from './Auth/AuthReducer'

export const store = configureStore({
    reducer: {
        basic: BasicReducer,
        cartS: CartReducer,
        Auth: AuthReducer
    },
})