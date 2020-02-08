import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf.js";

class ListBooks extends React.Component {
  state = {
    booksShelfes: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  refreshView(){
    BooksAPI.getAll().then(result => {
      let filledShelfs = { currentlyReading: [], wantToRead: [], read: [] };
      result.map(book => filledShelfs[book.shelf].push(book));

      this.setState({ booksShelfes: filledShelfs });
    });
  }

  componentDidMount() {
    this.refreshView();
  }

  updateBookRecord = (bookId, shelf) => {
    console.log(bookId, shelf);
    BooksAPI.update(bookId, shelf).then((res) => {this.refreshView()});
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              shelftitle={"Currently Reading"}
              books={this.state.booksShelfes.currentlyReading}
              updateBookRecord={this.updateBookRecord}
            ></Bookshelf>
            <Bookshelf
              shelftitle={"Want to Read"}
              books={this.state.booksShelfes.wantToRead}
              updateBookRecord={this.updateBookRecord}
            ></Bookshelf>
            <Bookshelf
              shelftitle={"Read"}
              books={this.state.booksShelfes.read}
              updateBookRecord={this.updateBookRecord}
            ></Bookshelf>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
