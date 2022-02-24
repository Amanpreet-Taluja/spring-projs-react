import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {

  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <Sidebar />
            </Route>
            <Route path="/rooms/:roomId">
              <Sidebar />
              <Chat />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
