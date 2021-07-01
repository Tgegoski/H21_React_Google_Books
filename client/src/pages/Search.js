import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Grid";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchBooks from "../components/SearchBooks";
import Alert from "../components/Alert";
import { SaveBtn } from 'react-bootstrap';

// Need on click to take you to page to view each book.
class SearchBooks extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };
  // TODO Add SaveBtn
// TODO add view or save option
  // When the component mounts, get a list of all available books and update this.state.books
  componentDidMount() {
    API.getBaseBooksList()
      .then(res => this.setState({ searchBooks: res.data.message }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  }
  // Add an alert for when nothing is found.
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  }
    
    handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
    handleFormSubmit = event =>  {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  }
  handleSaveBtn = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    API.savedBooks(savedBooks)
    .then(console.log(savedBooks))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For Books!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default SearchBooks;
