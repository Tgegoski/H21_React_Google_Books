import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SearchBooks from "../components/SearchBooks";
import API from "..//routes/api";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>
        Welcome to Google Books search! You can search for books by Title.  
        You can then save any books that you would like to view later!  </p>
  </div>
);

export default Home;
