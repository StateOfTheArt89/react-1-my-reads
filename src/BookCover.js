import React from "react";

const BookCover = props => (
  <div
    className="book-cover"
    style={{
      width: 128,
      height: 192,
      backgroundImage: `url(${props.imageurl})`
    }}
  ></div>
);

export default BookCover;
