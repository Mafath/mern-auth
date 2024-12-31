import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
}

const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState, // Initial state object
  reducers: {   // reducers are actually the functions we wanna add. Using these functions we wanna change the state of our user
    signInStart : (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload; //payload eka 'data'
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;