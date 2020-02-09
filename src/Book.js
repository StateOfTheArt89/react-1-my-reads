import React from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

const Book = props => {
  let imageurl = "";
  if (props.bookData.imageLinks !== undefined) {
    imageurl = props.bookData.imageLinks.smallThumbnail;
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <BookCover imageurl={imageurl} />
          <BookShelfChanger
            onchange={shelf => props.updateBookRecord(props.bookData, shelf)}
            shelf={props.shelf}
          />
        </div>
        <div className="book-title">{props.bookData.title}</div>
        <div className="book-authors">{props.bookData.authors}</div>
      </div>
    </li>
  );
};

export default Book;
