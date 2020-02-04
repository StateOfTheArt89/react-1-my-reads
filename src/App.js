import React from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book.js";
import Bookshelf from "./Bookshelf.js";
import "./App.css";
import SearchBooks from "./SearchBooks.js";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    booksShelfes: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(result => {
      let filledShelfs = { currentlyReading: [], wantToRead: [], read: [] };
      result.map(book => filledShelfs[book.shelf].push(book));

      this.setState({ booksShelfes: filledShelfs });
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf
                  shelftitle={"Currently Reading"}
                  books={this.state.booksShelfes.currentlyReading}
                ></Bookshelf>
                <Bookshelf
                  shelftitle={"Want to Read"}
                  books={this.state.booksShelfes.wantToRead}
                ></Bookshelf>
                <Bookshelf
                  shelftitle={"Read"}
                  books={this.state.booksShelfes.read}
                ></Bookshelf>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
