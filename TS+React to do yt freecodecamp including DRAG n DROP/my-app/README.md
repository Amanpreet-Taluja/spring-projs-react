# Make a div Drag n Drop

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
