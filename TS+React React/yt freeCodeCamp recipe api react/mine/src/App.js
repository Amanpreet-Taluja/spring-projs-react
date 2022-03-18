import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    console.log(recipeName);
    const api_call = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${recipeName}`
    );
    setRecipes(await (await api_call.json()).recipes);
    console.log(recipes);
  };
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("recipes"));
    setRecipes(data);
  },[]) 
  useEffect(()=>{
    const rec=JSON.stringify(recipes);
    localStorage.setItem("recipes",rec);
  },[recipes])
   
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={getRecipe} />
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default App;
