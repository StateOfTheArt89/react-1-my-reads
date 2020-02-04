import React from "react";
import Book from './Book.js'

class Bookshelf extends React.Component {
    render() { 
        return (<div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelftitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books.map(book => <Book
                title={book.title}
                authors={book.authors}
                imageurl={book.imageLinks.smallThumbnail}
              ></Book>)}
          </ol>
        </div>
      </div>);
    }

};

export default Bookshelf;
