import React from "react";
import "./App.css";
import SearchBooks from "./SearchBooks.js";
import ListBooks from "./ListBooks.js";
import { BrowserRouter, Route } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Route exact path="/" component={ListBooks}/>
            <Route path="/search" component={SearchBooks}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
