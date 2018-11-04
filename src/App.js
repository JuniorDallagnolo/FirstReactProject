import React, { Component } from "react";
import "./App.css";
import "./Debug.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:userID" component={Home} />
            <Route path="/:userID/posts" component={Posts} />
            <Route path="/:userID/todos" component={Todos} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
