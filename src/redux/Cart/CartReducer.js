import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

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
    },
    
})

export const updatedCart = () => async (dispatch) => {
    await axios.get(`http://localhost:4000/cart`).then((res) => {
        dispatch(changeCartCount(res.data.length))
    })
}

export const { changeCartCount } = cartSlice.actions;

export default cartSlice.reducer;