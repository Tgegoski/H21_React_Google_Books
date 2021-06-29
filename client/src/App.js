import React from "react";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
// import SavedBooks from "./components/SavedBooks";
import Nav from "./components/NavBar";
import "./App.css";  
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
   
function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path={["/home"]}>
            <Home />
          </Route>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/index.html" component={Home} /> */}
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          {/* <Route exact path="/saved" component={SavedBooks} /> */}
          <Route exact path={["/saved"]}>
            <Saved />
          </Route>
        </Switch>
        <Route>
          <NoMatch />
        </Route>
      </div>
      
    </Router>
  );
}


export default App;
