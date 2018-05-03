import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: '128px',
              height: '193px',
              backgroundImage: `url(${this.props.book.imageLinks !== undefined && this.props.book.imageLinks.smallThumbnail})`
            }}
          />
          <div className='book-shelf-changer'>
            <select value={this.props.book.shelf || 'none'} onChange={(e) => this.props.onMoveBook(e, this.props.book)}>
              <option value='' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{this.props.book.title}</div>
        <div className='book-authors'>{this.props.book.authors !== undefined && this.props.book.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book