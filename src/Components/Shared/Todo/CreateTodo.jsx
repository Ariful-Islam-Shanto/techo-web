import React, { useEffect, useState } from 'react';
import { addTodo, updateTodo } from './TodoSlice';
import { useSelector, useDispatch } from 'react-redux';

const CreateTodo = ({updateThisTodo}) => {
    const [input, setInput] = useState('');
    const [isUpdated, setIsUpdated] = useState(false);
    const dispatch = useDispatch();

    const TodoHandler = (e) => {
        e.preventDefault();

        if (isUpdated) {
            // If in update mode, handle the update
            handleTodoUpdate();
          } else {
            // If in add mode, handle the addition
            dispatch(addTodo(input));
          }
        setInput('')
        e.target.reset()
        setIsUpdated(false)
    }

    useEffect(() => {
        if(updateThisTodo.text || updateThisTodo.id) {
            setInput(updateThisTodo?.text);
            setIsUpdated(true)
        }
    }, [updateThisTodo])

    const handleTodoUpdate = () => {
        const id = updateThisTodo.id;

        dispatch(updateTodo({
            id, 
            text : input
        }))
        setInput('');
        setIsUpdated(false)
    }

    return (
        <div>
            <form onSubmit={TodoHandler} className="space-y-4 card w-96 bg-base-100 p-6 stroke-teal-300 shadow-xl shadow-blue-400">
       <h1 className="text-2xl text-white font-bold text-center"> Create A Todo</h1>
        <div className="flex items-center gap-2">
        <figure>
        <input placeholder='Add todo' defaultValue={input} onChange={(e) => setInput(e.target.value)} type="text"  className="input input-bordered input-info w-full max-w-xs" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <button type='submit' className="btn btn-secondary">{isUpdated === true ? 'update' : 'add'}</button>
          </div>
        </div>
        </div>
      </form>
        </div>
    );
};

export default CreateTodo;