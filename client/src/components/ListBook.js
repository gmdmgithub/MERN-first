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
                  <span className="list-title">
                    {book.title}
                  </span> 
                  <span className="list-btn">
                    <button className="btn-delete" onClick={() => deleteBook(book._id)}>Delete book</button>
                    <button className="btn-update" onClick={() => editBook(book._id)}>Update book</button>
                  </span>
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