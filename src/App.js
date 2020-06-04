import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserListIndexedDb from "./components/UserListIndexedDB";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/userlist" component={UserListIndexedDb} />
      </Switch>
    </BrowserRouter>
  );

  //   return <UserList />;
};

export default App;
