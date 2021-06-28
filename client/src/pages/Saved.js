import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
// import SaveBooks from "../components/SaveBooks";
import { Card, Alert } from 'react-bootstrap';

class SaveBooks extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };
// When the component mounts, get a list of all available books and update this.state.books
componentDidMount() {
  API.getBaseBooksList()
    .then(res => this.setState({ books: res.data.message }))
    .catch(err => console.log(err));
}

handleInputChange = event => {
  this.setState({ search: event.target.value });
}

loadSavedBooks = () => {
    API.getSavedBook()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  }


function handleFormSubmit(event) {
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


  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  )
    }

  export default SaveBooks;
// export default Books;




  
  
  
  

