import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class BookList extends Component {

  booksOnShelf(shelf) {
    return this.props.books.filter((b) => b.shelf === shelf)
  }

  render() {
    const { onMoveBook } = this.props

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <Shelf onMoveBook={onMoveBook} title='Currently Reading' books={this.booksOnShelf('currentlyReading')} />
            <Shelf onMoveBook={onMoveBook} title='Want To Read' books={this.booksOnShelf('wantToRead')} />
            <Shelf onMoveBook={onMoveBook} title='Read' books={this.booksOnShelf('read')} />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>
            Add a Book
          </Link>
        </div>
      </div>
    )
  }
}

export default BookList