import React from "react";
import "./App.css";
import SearchBooks from "./SearchBooks.js";
import ListBooks from "./ListBooks.js";
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    booksShelfes: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  refreshView() {
    BooksAPI.getAll().then(result => {
      let filledShelfs = { currentlyReading: [], wantToRead: [], read: [] };
      result.map(book => filledShelfs[book.shelf].push(book));

      this.setState({ booksShelfes: filledShelfs });
    });
  }

  componentDidMount() {
    this.refreshView();
  }

  updateBookRecord = (bookData, shelf) => {
    const categories = ["currentlyReading", "wantToRead", "read"];
    let updatedShelfes = {};
    // Remove book from old position
    for (let category of categories) {
      updatedShelfes[category] = this.state.booksShelfes[category].filter(
        book => book.id !== bookData.id
      );
    }
    bookData['shelf'] = shelf;
    // Add book to the new one
    if (shelf !== undefined && shelf !== 'none'){
      updatedShelfes[shelf].push(bookData);
    }
    this.setState({ booksShelfes: updatedShelfes });

    // Update book in backend as well - sync data to be sure there are now inconsistencies
    BooksAPI.update(bookData, shelf).then(res => {
      this.refreshView();
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          {/* src: https://tylermcginnis.com/react-router-pass-props-to-components/ */}
          <Route
            exact
            path="/"
            render={props => (
              <ListBooks
                {...props}
                booksShelfes={this.state.booksShelfes}
                updateBookRecord={this.updateBookRecord}
              />
            )}
          />
          <Route
            path="/search"
            render={props => (
              <SearchBooks
                {...props}
                booksShelfes={this.state.booksShelfes}
                updateBookRecord={this.updateBookRecord}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
