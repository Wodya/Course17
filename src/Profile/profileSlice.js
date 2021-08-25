import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isMailing: true,
  },
  reducers: {
    setMailing: (state, action) => {
      state.isMailing = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMailing } =
  profileSlice.actions;

export default profileSlice.reducer;
