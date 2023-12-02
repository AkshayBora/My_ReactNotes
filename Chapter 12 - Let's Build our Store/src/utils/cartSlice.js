import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanila(older) Redux = Don't mutate the State and returning was kind of mandetory
      //const newState = [...state]
      //newState.items.push(action.payload)
      //return newState

      //In Redux:- We have to mutate the State
      //Redux toolkit uses immer(library) behind the scenes
      //state.items.push(action.payload);
      state.items.push({
        item: action.payload,
        quantity: 1,
      });
    },
    incrementItem: (state, action) => {
      const { id } = action.payload;

      const itemToIncrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      //state.items.pop();
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      //RTK:- either mutating the state or return a new state
      state.items.length = 0; // state=[]

      //this new[] will be replaced inside originalState = [];
      //return {items:[]}
    },
  },
});

export const { incrementItem, decrementItem, addItem, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
