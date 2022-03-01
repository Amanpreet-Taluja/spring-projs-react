# Make a div Drag n Drop

```
    const onDragEnd=(result:DropResult)=>{
    const {source,destination}=result;
    if(!destination){
    return;
    }
    if(destination.droppableId===source.droppableId && destination.index===source.index) {
    return;
    }

    let add,active=todos,complete=completedTodos;

    if(source.droppableId==='TodosList'){
      add=active[source.index];
      active.splice(source.index, 1);
    }else{
      add=complete[source.index];
      complete.splice(source.index, 1);
    }

    if(destination.droppableId==='TodosList'){
      active.splice(destination.index,0,add);
    }else{
      complete.splice(destination.index, 0,add);
    }

    setCompletedTodos(complete);
    setTodos(active);

    }

```

# Give Droppable context

```
    <DragDropContext onDragEnd={onDragEnd}>
    abc
    </DragDropContext>
```

# Make various droppable containers

```
<Droppable droppableId='TodosList'>
        {(provided)=>(
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">
              Active Tasks
            </span>
            {
              todos?.map((todo,index)=>(
                <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo.id} />
              ))
            }
            {provided.placeholder}
          </div>
          )
        }
      </Droppable>

```

# Make something draggable

```
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

```

#

```

```
