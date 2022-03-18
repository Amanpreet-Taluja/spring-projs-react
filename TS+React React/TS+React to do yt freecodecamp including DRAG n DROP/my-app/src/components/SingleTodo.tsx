import React, { useState,useRef, useEffect} from 'react'
import { Todo } from './model'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'
import { Draggable } from 'react-beautiful-dnd'
interface Props{
    index:number;
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({index,todo,todos,setTodos}:Props) => {
    const editRef=useRef<HTMLInputElement>(null);
    const [edit,setedit]=useState<boolean>();
    const [editTodo,setEditTodo]=useState<string>(todo.todo);
    const handleDone=(id:number) => {
        setTodos(todos.map((todo) =>
            todo.id===id?{...todo,isDone:!todo.isDone}:todo)
            )
    };

    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    }

    const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault();
        setTodos(todos.map((todo)=>todo.id===id?{...todo,todo:editTodo}:todo));
        setedit(false);
    }

    useEffect(()=>{
        editRef.current?.focus();
    },[edit])
  return (  
      <Draggable draggableId={todo.id.toString()} index={index}>
          { (provided)=>(
                <form className="todos__single" 
                onSubmit={(e)=>{handleEdit(e,todo.id)}} 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
                {
                    edit ?(
                        <input value={editTodo} onChange={(event)=>{
                            setEditTodo(event.target.value);
                        }} className="todos__single--text" ref={editRef}/>
                    ):(
                        todo.isDone ? (
                            <s className="todos__single--text">{todo.todo}</s>
                        ):(
                            <span className="todos__single--text">{todo.todo}</span>
                        )
                    )
                }

                
                <div>
                    <span className="icon" onClick={()=>{
                        if(!edit && !todo.isDone){
                            setedit(!edit);
                        }
                    }}>
                        <AiFillEdit />
                        </span>
                        <span className="icon" onClick={()=>handleDelete(todo.id)}>
                        <AiFillDelete />
                        </span>
                        <span className="icon" onClick={()=>handleDone(todo.id)}>
                        <MdDone />
                        </span>
                </div>
            </form>
              )
          }
            
    </Draggable>
  )
}

export default SingleTodo