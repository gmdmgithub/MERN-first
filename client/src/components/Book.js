import React, {Component} from 'react';
import axios from 'axios';
import Input from './Input';
import ListBook from './ListBook';
class Book extends Component {

  constructor(props) {
    super(props);
    this.childInput = React.createRef();
  }

  state = {
    books: []
  }

  componentDidMount(){
    this.getBooks();
  }
  //refresh
  getBooks = () => {
    axios.get('/api/books')
      .then(res => {
        if(res.data){
          this.setState({
            books: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }


  deleteBook = (id) => {
    console.log("Delete book action");
    
    axios.delete(`/api/books/${id}`)
      .then(res => {
        if(res.data){
          this.getBooks()
        }
      })
      .catch(err => console.log(err))
  }

  editBook = (id) => {
    // console.log(`Edit book ID: ${id}`);
    const book =  this.state.books.filter(b => b._id ===id)
    if(book.length > 0 ){
      this.childInput.current.parentBook(book[0]);
    }
  }

  render() {
    let { books} = this.state;
    return(
      <div>
        <h1>My Book(s)</h1>
        <Input getBooks={this.getBooks} ref={this.childInput} />
        <ListBook books={books} deleteBook={this.deleteBook} editBook={this.editBook}/>
      </div>
    )
  }
}
export default Book;