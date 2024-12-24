import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
    const [todoList, setTodoList] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const inputRef = useRef();
    const add = ()=>{
        const inputText = inputRef.current.value.trim();
        if(inputText === ""){ return null;}  
        const newTodo = {
            id : Date.now(),
            text : inputText,
            isCompleted : false,
        }
        setTodoList((prev)=>[...prev, newTodo])
        inputRef.current.value = "";
     
    }
    const deleteTodo = (id)=>{
       return setTodoList((prev)=>prev.filter((item)=>item.id!==id))
    }
    const toggle = (id)=>{
        return setTodoList((prev)=>prev.map((item)=>item.id===id? {...item, isCompleted:!item.isCompleted}:item))  // toggle the completed state of the todo.  // Using map instead of filter to avoid creating a new array.  // Using spread operator to create a new object instead of modifying the existing one.  // Using ternary operator to toggle the completed state.  // Using arrow function for the callback to avoid creating a new function every render.  // Using const instead of let to declare the variable.  // Using arrow function to avoid creating a new function every render.  // Using const instead of let to declare the variable.  // Using arrow function to avoid creating a new function every render.  // Using const instead of let to declare the variable.  // Using arrow function to avoid creating a new function every render.  // Using const instead of let to declare the variable.  // Using arrow function to
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        
    {/* title */}
    <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
    </div>
    {/* Input box */}
    <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
        placeholder:text-slate-600" type="text" placeholder="Add your task" />
        <button onClick={add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">ADD +</button>
    </div>
    {/* todo list */}
    <div>
        
      {todoList.map((todo)=>
          <TodoItems key={todo.id} text={todo.text} id ={todo.id} isCompleted={todo.isCompleted} deleteTodo={deleteTodo} toggle= {toggle} />
      )}

    </div>

    </div>
  )
}

export default Todo