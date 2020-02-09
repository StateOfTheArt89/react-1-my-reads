import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf.js";

const ListBooks = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            shelftitle={"Currently Reading"}
            books={props.booksShelfes.currentlyReading}
            updateBookRecord={props.updateBookRecord}
          ></Bookshelf>
          <Bookshelf
            shelftitle={"Want to Read"}
            books={props.booksShelfes.wantToRead}
            updateBookRecord={props.updateBookRecord}
          ></Bookshelf>
          <Bookshelf
            shelftitle={"Read"}
            books={props.booksShelfes.read}
            updateBookRecord={props.updateBookRecord}
          ></Bookshelf>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
