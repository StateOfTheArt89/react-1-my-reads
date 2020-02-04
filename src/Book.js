import React from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

class Book extends React.Component {
    render() { 
        return (
            <li>
        <div className="book">
          <div className="book-top">
            <BookCover imageurl={this.props.imageurl} />
            <BookShelfChanger/>
          </div>
          <div className="book-title">
            {this.props.title}
          </div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
        </li>)
    }

};

export default Book;
