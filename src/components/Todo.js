import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircleCheck,faPen,faTrashCan} from "@fortawesome/free-solid-svg-icons"

export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit
}){
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const handleChange=(e)=>{
    e.preventdefault();
    if(todo.complete===true){
        setNewTitle(todo.title);
    }
    else{
       todo.title ="";
        setNewTitle(e.target.value);
    }
  };
  return(
    <div className="todo"> 
    <input 
    style = {{textDecoration: todo.completed && "line-through"}}
    type="text"
    value={todo.title===""? newTitle :todo.title}
    className= "list"
    onChange={ handleChange}
    />
    <div>
        <button className="button-complete"
        onClick={()=>toggleComplete(todo)}>
            <FontAwesomeIcon icon={faCircleCheck} id ="i"/>
        </button>
        <button className="buttot-edit" 
        onClick={()=>handleEdit(todo, newTitle)}>
            <FontAwesomeIcon icon={faPen} id="i"/>
        </button>
        <button className="button-delete" onClick={()=>handleDelete(todo.id)}>
            <FontAwesomeIcon icon={faTrashCan} id="i"/>
        </button>
    </div>
    </div>
  );
}