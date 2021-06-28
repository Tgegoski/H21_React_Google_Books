import React, { Component } from "react";
// import SearchBooks from "../components/SearchBooks";
import GoogleBooksForm from "../components/SearchBooks/googleBooksSearch";
export default function Home () {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p>
            Welcome to Google Books search! You can search for books by Title or Author.  
            You can then save any books that you would like to view later!  </p>
      </div>
      <GoogleBooksForm />
    </>
  )
};
