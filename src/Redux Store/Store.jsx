import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Components/Shared/Todo/TodoSlice';
import productReducer from '../Redux Store/ProductsSlice';
import cartReducer from '../Redux Store/CartSlice';

export const store = configureStore({
    reducer : {todoReducer, productReducer, cartReducer},
})