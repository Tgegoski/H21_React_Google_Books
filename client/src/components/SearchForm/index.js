import React from 'react';
// import { Form } from 'react-bootstrap';
// import axios from 'axios';
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.books array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book">Book Title:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="title"
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in a book name to begin"
          id="book title"
        />
        <datalist id="books">
          {props.books.map(book => (
            <option value={book} key={book} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
