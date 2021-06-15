import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

var token = config.MY_API_TOKEN;
var key = config.SECRET_API_KEY;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
