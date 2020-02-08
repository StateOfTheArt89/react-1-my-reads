import React from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

class SearchBooks extends React.Component {
  state = {
    results: []
  };

  onchange(text) {
    BooksAPI.search(text, 5).then(result =>
      this.setState({ results: result })
    );
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.onchange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map(book => (
              <Book
                title={book.title}
                authors={book.authors}
                imageurl={book.imageLinks.smallThumbnail}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
