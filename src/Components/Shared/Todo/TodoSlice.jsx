import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        updateTodo : (state, action) => {
        //    let updatedTodo = state.todos.find(todo => {
        //     return todo.id === action.payload.id;
        //    })
        //    updatedTodo.text = action.payload.text;
           state.todos = state.todos.filter(todo => {
            return todo.id !== action.payload.id;
           })
           state.todos.push(action.payload);
        }
    }

})

export const { addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;