import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookHolder from './BookHolder'

class Search extends React.Component {
  state = {
    query: '',
    booksFound: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.getBooksFound(query)
  }

  getBooksFound = (query) => {
    if (query)
      {BooksAPI.search(query).then((booksFound) => {
        if (booksFound.error) {
          this.setState({ booksFound: [] })
        } else {
          this.setState({ booksFound })
        }
      })
    } else {
      this.setState({ booksFound: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksFound.map(booksFound => {
              let shelf='none'

              this.props.books.map(book => {
                if (book.id === booksFound.id) {
                  shelf = book.shelf
                }
              })

              return (
                <li key={booksFound.id}>
                  <BookHolder
                    book={booksFound}
                    pickShelf={this.props.pickShelf}
                    shelf={shelf}
                  />
                </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
