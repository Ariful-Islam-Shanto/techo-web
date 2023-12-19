import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./TodoSlice";


const Todo = () => {

    const todos = useSelector(state => state.todos);
    const [updateTodo, setUpdateTodo] = useState({});
    const dispatch = useDispatch();
    console.log(todos);

    // const handleRemoveTodo = (id) => {
    //     dispatch(removeTodo(id))
    // }

    const handleUpdateTodo = (id) => {
        const updateTodo = todos.find(todo => todo.id === id);
        setUpdateTodo(updateTodo)
    }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-600 to-gray-700 flex flex-col gap-2 items-center justify-center">
      <CreateTodo updateThisTodo={updateTodo}/>

      {/* Todos */}
    {
        todos?.map(todo => 
            <div key={todo?.id} className="card bg-neutral w-96 text-neutral-content">
            <div className="p-4 items-center flex text-left  justify-between">
              <h2 className="card-title"></h2>
              <p className="text-white">{todo?.text}</p>
              <div className="card-actions justify-end">
                <button onClick={() => handleUpdateTodo(todo.id)} className="btn bg-lime-600 px-5 py-3 rounded-lg text-white">Update</button>
                <button onClick={() => dispatch(removeTodo(todo.id))} className="btn bg-red-700 px-5 py-3 rounded-lg text-white">Delete</button>
              </div>
            </div>
          </div>
        )
    }
    </div>
  );
};

export default Todo;
