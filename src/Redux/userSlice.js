import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
   // You can customize the initial user data structure
};

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    //   state.isLoggedIn = true;
    },
    // clearUserData: (state) => {
    //   state.userData = null;
    // //   state.isLoggedIn = false;
    // },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;