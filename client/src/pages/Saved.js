import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.min.css";
import SavedBooks from "../components/SavedBooks";
import { DeleteBtn } from 'react-bootstrap';

class SavedBooks extends Component {
  state = {
    
    savedBooksList: []
  };
  
  // TODO add view saved books option

// When the component mounts, get a list of all available books and update this.state.books
componentDidMount() {
  API.getBooks()
    .then(res => this.setState({ savedBooks: res.data.message }))
    .catch(err => console.log(err));
};

handleDeleteBtn = id => {
        API.deleteBook(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err));
}

render() {
  return (
    <SavedBooksList savedBooks={this.state.savedBooks} handleDeleteBtn={this.handleDeleteBtn} />
    
  )
  }
}
export default SavedBooks;