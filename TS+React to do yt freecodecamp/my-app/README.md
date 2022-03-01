# Blur a component after an action

inputRef.current?.blur();

# Change one property in an array of objects

const handleDone=(id:number) => {
setTodos(todos.map((todo) =>
todo.id===id?{...todo,isDone:!todo.isDone}:todo)
)
};

# Remove a particular item from an array

    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    }

# Internal box shadow

box-shadow: inset 0 0 5px black;

# Blur out everything on active

.input\_\_box:focus{
box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
outline:none;
}

# Resize button on clicking

transition:0.2s all;
.input\_\_submit:active{
transform:scale(0.8);
box-shadow: 0 0 5px black;
}

# Prevent overflow in flex

flex-wrap: wrap;
