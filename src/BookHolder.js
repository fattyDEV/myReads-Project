import React from 'react'
import ShelfPicker from './ShelfPicker'

class BookHolder extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''})` }}>
          </div>
          <ShelfPicker
            pickShelf={this.props.pickShelf}
            shelf={this.props.shelf}
            book={this.props.book}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default BookHolder
