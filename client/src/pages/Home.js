import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container} from "react-bootstrap";
import GoogleBooksForm from "../components/SearchBooks/googleBooksSearch";

function Home() {
  return (
    <Container fluid>
      <GoogleBooksForm>
      <Row>
        <Col size="md-12">
        <div className="Google Books Search">
        <h1>Home Page</h1>
        <p>
            Welcome to Google Books search! You can search for books by Title or Author.  
            You can then save any books that you would like to view later!  </p>
      </div>
        </Col>
      </Row>
      </GoogleBooksForm>
    </Container>
  )
};
export default Home;