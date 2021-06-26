import React, { Component } from "react";
import Home from ".pages/Home";
import SearchBooks from "../components/SearchBooks";
import SaveBooks from "../components/SaveBooks";
import Nav from "../components/Nav";
import "./App.css";  
import "bootstrap/dist/css/bootstrap..min.css";
import { BrowserRoute as Router, Route, Switch } from "react-router-dom";
import GoogleBooksSearch from "./googleBooksSearch";  
   
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={SaveBooks} />
          <Route exact path="/" component={SearchBooks} />
        </Switch>
      </div>
      
    </Router>
  );
}


export default App;
