import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        additem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += 1
            }
            else {
                state.items.push({...action.payload, quantity: 1})
            }
            state.totalPrice += action.payload.price
        },
        removeitem: (state, action) => {
            const itemremove = state.items.find(item => item.id === action.payload)
            if(itemremove){
                state.totalPrice -= itemremove.price * itemremove.quantity
                state.items = state.items.filter(item => item.id !== action.payload)
            }
        },

        reducequantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(item => item.id !== action.payload);
          state.totalPrice -= item.price;
        } else {
          item.quantity -= 1;
          state.totalPrice -= item.price;
        }
      }
        },
        buyitems: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    },
    selectors: {
        selectitems: (state) => state.items,
        selecttotalprice: (state) => state.totalPrice
    }
})

export const {additem, removeitem, reducequantity, buyitems} = cartSlice.actions;
export const { selectitems, selecttotalprice }  = cartSlice.selectors

export default cartSlice.reducer;