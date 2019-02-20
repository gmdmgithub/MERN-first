import React from 'react';
const ListBook = ({ books, deleteBook }) => {
  return (
    <ul>
      {
        books &&
        books.length > 0 ?
            (
                books.map(book => {
                return (
                  <li key={book._id} onClick={() => deleteBook(book._id)}>{book.action}</li>
                )
              })
            )
            :
            (
              <li>No book(s) left</li>
            )
      }
    </ul>
  )
}
export default ListBook