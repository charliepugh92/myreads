import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class BookSearch extends Component {
  state = {
    query: '',
    searchResults: []
  }

  handleChange=(event) => {
    const query = event.target.value
    this.setState({ query })
    
    query.length > 0 
      ? this.searchForBooks(query) 
      : this.setState({searchResults: []})
  }

  searchForBooks(query) {
    BooksAPI.search(query)
      .then((books) => {
        books.forEach((book) => {
          const shelvedBook = this.props.shelvedBooks.find((b) => b.id === book.id)
          shelvedBook !== undefined && (
            book.shelf = shelvedBook.shelf
          )
        })
        this.setState({
          searchResults: (books.error === undefined ? books : [])
        })
      })
  }

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input type='text' value={this.state.query} onChange={this.handleChange} placeholder='Search by title or author' />
          </div>
        </div>
        <div className='search-books-results'>
          <BooksGrid books={this.state.searchResults} onMoveBook={this.props.onMoveBook} />
        </div>
      </div>
    )
  }
}

export default BookSearch