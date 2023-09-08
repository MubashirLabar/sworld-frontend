import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "globalReducer",
  initialState: {
    userGeoLocation: {},
  },
  reducers: {
    setUserGeoLocation: (state, action) => {
      state.userGeoLocation = action.payload;
    },
  },
});
export const { setUserGeoLocation } = globalReducer.actions;
export default globalReducer.reducer;
