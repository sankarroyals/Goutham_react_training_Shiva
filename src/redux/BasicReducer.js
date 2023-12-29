import { createSlice } from '@reduxjs/toolkit'

// storing variable which are related to particular features

export const basicSlice = createSlice({
    name: 'basic',
    initialState: {
        user: ''
    }
})

export default basicSlice.reducer;