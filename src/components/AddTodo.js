import React from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

export default function AddTodo(){
    const [title, setTitle] = React.useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(title !=""){
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setTitle("");
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className="input_container">
                <input
                  type="text"
                  placeholder= "enter todo"
                  value = {title}
                  onChange={(e)=> setTitle(e.target.value)} 
                />
            </div>
            <div className="btn_container">
                <button>
                    Add
                </button>

            </div>

        </form>
    );
}