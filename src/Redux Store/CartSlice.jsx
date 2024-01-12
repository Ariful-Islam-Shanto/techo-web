import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
        cart : []
    }
   
    export const cartSlice = createSlice({
        name : 'products',
        initialState,
        reducers : {
            addToCart : (state, action) => {
                state.cart.push(action.payload);
                // console.log("Action payload", action.payload);
            },
            removeFromCart : (state, action) => {
                state.cart = state.cart.filter(item => item._id === action.payload)
                // console.log("Action payload", action.payload);
            }
        }

    })

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;