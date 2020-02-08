import React from "react";
import Book from './Book.js'

const Bookshelf = (props) => { 
        return (<div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelftitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {props.books.map(book => <Book
                id={book.id}
                title={book.title}
                authors={book.authors}
                imageurl={book.imageLinks.smallThumbnail}
                key={book.id}
                updateBookRecord={props.updateBookRecord}
                shelf={book.shelf}
              ></Book>)}
          </ol>
        </div>
      </div>);
    };

export default Bookshelf;
