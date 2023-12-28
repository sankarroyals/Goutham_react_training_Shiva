import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode';

// storing variable which are related to particular features

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {  // storing state variable
        userDetails: {}
    }, 
    reducers: {
        changeUserDetails: (state, action) => {
            state.userDetails = action.payload;
        }
    }
})


export  const authUserDetails = () => async(dispatch) => {
  if(localStorage.getItem('user')){
    dispatch(changeUserDetails(jwtDecode(localStorage.getItem('user'))))
  }
}

export const { changeUserDetails } = AuthSlice.actions;

export default AuthSlice.reducer;