import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import SavedBooksList from "../components/SavedBooksList";
import Container from "../components/Grid";
import NavBar from "../comp/NavBar";
import Jumbotron from './components/Jumbotron';
import ListItem from "../components/savedBooks";
import { DeleteBtn } from 'react-bootstrap';

class SavedBooksList extends Component {
  state = {
    
    savedBooksList: []
  };
  
  // TODO add view saved books option

// When the component mounts, get a list of all available books and update this.state.books
componentDidMount() {
  API.getBooks()
    .then(res => this.setState({ savedBooksList: res.data.message }))
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
export default SavedBooksList;