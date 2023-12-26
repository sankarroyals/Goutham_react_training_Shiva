import { createSlice } from '@reduxjs/toolkit'

// storing variable which are related to particular features

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {  // storing state variable
        cart: 0
    }, 
    reducers: {
        changeCartCount: (state, action) => {
            state.cart = action.payload;
        }
    }  /// used to change state variable
})

export const { changeCartCount } = cartSlice.actions;

export default cartSlice.reducer;