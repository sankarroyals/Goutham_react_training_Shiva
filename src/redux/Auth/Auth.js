
import { createSlice } from '@reduxjs/toolkit'

export const Authorization = createSlice({
    name: 'authorization',
    intialState: {
        isAuthenticated: false,
        accessToken: null
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setAccess: (state, action) => {
            state.accessToken = action.payload
        }
    }
})

export const {
    setAuth
} = Authorization.actions
 
export default Authorization.reducer;