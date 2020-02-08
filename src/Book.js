import React from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

const Book = props =>  {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <BookCover imageurl={props.imageurl} />
          <BookShelfChanger onchange={(shelf) => props.updateBookRecord(props, shelf)} shelf={props.shelf}/>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </li>
  );
}

export default Book;
