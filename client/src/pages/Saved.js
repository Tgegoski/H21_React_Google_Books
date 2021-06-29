import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/";
// import SaveBooks from "../components/saveBooks";
// import { Card, Alert } from 'react-bootstrap';

class SaveBooks extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };
  // TODO add view saved books option
  // TODO add view or delete option
  // TODO seperate saved books list from option to save a book
// When the component mounts, get a list of all available books and update this.state.books
componentDidMount() {
  API.getSaveBooksList()
    .then(res => this.setState({ books: res.data.message }))
    .catch(err => console.log(err));
};

handleInputChange = event => {
  this.setState({ search: event.target.value });
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
  };
};
// loadSavedBooks = () => {
//     API.getSaveBook()
//       .then(res =>
//         this.setState({
//           image: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
  
render() {
  return (
    <div>
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
    </div>
  );
  }
}
();

export default SaveBooks;
// export default Books;




  
  
  
  

