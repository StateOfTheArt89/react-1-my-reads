import React from "react";
import "./App.css";
import SearchBooks from "./SearchBooks.js";
import ListBooks from "./ListBooks.js";
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
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
      <BrowserRouter>
        <div className="app">
            {/* src: https://tylermcginnis.com/react-router-pass-props-to-components/ */}
            <Route exact path="/" 
            render={(props) => <ListBooks {...props}  
            booksShelfes={this.state.booksShelfes}
            updateBookRecord={this.updateBookRecord}/>}/>
            <Route path="/search" component={SearchBooks}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
