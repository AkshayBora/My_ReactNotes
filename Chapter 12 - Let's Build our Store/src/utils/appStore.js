import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // Big Reducer which contain Small small reducers
  reducer: {
    cart: cartReducer,
    // user: useReducer,
  },
});

export default appStore;
