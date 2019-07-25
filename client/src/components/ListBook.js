import React from 'react';
const ListBook = ({ books, deleteBook, editBook }) => {
  return (
    <ul>
      {
        books &&
          books.length > 0 ?
          (
            books.map(book => {
              return (
                <li key={book._id}>
                  {book.title}{book.tittle} 
                  <button className="btn-delete" onClick={() => deleteBook(book._id)}>Delete book</button>
                  <button className="btn-update" onClick={() => editBook(book._id)}>Update book</button>
                </li>
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