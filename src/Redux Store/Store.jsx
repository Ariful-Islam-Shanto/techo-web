import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Components/Shared/Todo/TodoSlice';

export const store = configureStore({
    reducer : todoReducer,
})