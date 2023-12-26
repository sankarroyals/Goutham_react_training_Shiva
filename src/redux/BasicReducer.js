import { createSlice } from '@reduxjs/toolkit'

// storing variable which are related to particular features

export const basicSlice = createSlice({
    name: 'basic',
    initialState: {
        user: 'Goutham'
    }
})

export default basicSlice.reducer;