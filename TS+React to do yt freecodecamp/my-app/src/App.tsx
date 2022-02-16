import React, { useState } from 'react';
import InputField from './components/InputField'
import './App.css';
import { Todo } from './components/model';
import Todolist from './components/Todolist';

const App:React.FC=()=> {
  const [todo,setTodo]=useState<string>('');
  const [todos,setTodos]=useState<Todo[]>([]);

  const handleAdd=(event:React.FormEvent)=>{
    event.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo('');
    }
  }
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taksify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
