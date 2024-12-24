import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const TodoItems = ({text ,id ,isCompleted ,deleteTodo ,toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2 px-2 sm:px-0">
        <div onClick={() => toggle(id)} className="flex flex-1 items-center cursor-pointer">
            <img className="w-5 sm:w-7" src={isCompleted? tick : not_tick} alt="" />
            <p className={`text-slate-700 ml-2 sm:ml-4 text-[15px] sm:text-[17px] ${isCompleted ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} className="w-3 sm:w-3.5 cursor-pointer" alt="" />
    </div>
  )
}

export default TodoItems