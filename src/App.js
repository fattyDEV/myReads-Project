import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  pickShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            pickShelf={this.pickShelf}
          />
        )}/>
        <Route exact path='/Search' render={() => (
          <Search
            pickShelf={this.pickShelf}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
