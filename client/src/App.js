import React, { Component } from "react";
import Home from "./pages/Home";
import SavedBooks from "./pages/Saved";
import Nav from "./components/NavBar";
import "./App.css";  
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
   
function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/index.html" component={Home} />
          <Route exact path="/saved" component={SavedBooks} />
        </Switch>
      </div>
      
    </Router>
  );
}


export default App;
