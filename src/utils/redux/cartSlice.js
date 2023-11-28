import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart slice',
    initialState: {
        items: [],
    },

    reducers: {
        // Mutation of state
        addItem: (state, action) => {
            console.log(current(state),'print the proxy obect')
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.slice(action.payload);
        },
        clearCart: (state, action) => {
            state.items.push([]);
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;