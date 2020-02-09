import React from "react";
import Book from './Book.js'

const Bookshelf = (props) => { 
        return (<div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelftitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {props.books.map(book => <Book
                bookData={book}
                key={book.id}
                updateBookRecord={props.updateBookRecord}
              ></Book>)}
          </ol>
        </div>
      </div>);
    };

export default Bookshelf;
