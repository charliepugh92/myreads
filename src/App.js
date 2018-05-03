import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import BookSearch from './BookSearch'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  moveBook(event, book) {
    event.preventDefault()

    BooksAPI.update(book, event.target.value)
  }

  render() {
    return (
      <div>
        <div className='app'>
          <Route exact path='/' render={() => (
            <BookList
              books={this.state.books}
              onMoveBook={(event, book) => {
                this.moveBook(event, book)

                book.shelf = event.target.value
                this.setState((prevState) => ({
                  books: prevState.books.filter((b) => b.id !== book.id).concat([book])
                }))
              }}
            />
          )}/>
          <Route path='/search' render={() => (
            <BookSearch shelvedBooks={this.state.books} onMoveBook={(event, book) => {
              this.moveBook(event, book)

              book.shelf = event.target.value
              this.setState((prevState) => ({
                books: prevState.books.filter((b) => b.id !== book.id).concat([book])
              }))
            }} />
          )}/>
        </div>
      </div>
    )
  }
}

export default App
