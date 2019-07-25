import React, {Component} from 'react';
import axios from 'axios';
import Input from './Input';
import ListBook from './ListBook';
class Book extends Component {
  state = {
    books: []
  }
  componentDidMount(){
    this.getBooks();
  }
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
    console.log(`Edit book ID: ${id}`);
    // just test the case at start
    const book = {
      title:'Some fancy title'
    };
    axios.put(`/api/books/${id}`,book)
      .then(res =>{
        console.log(res);
        this.getBooks()
      
      })
      .catch(e => console.log(e));

  }
  render() {
    let { books } = this.state;
    return(
      <div>
        <h1>My Book(s)</h1>
        <Input getBooks={this.getBooks}/>
        <ListBook books={books} deleteBook={this.deleteBook} editBook={this.editBook}/>
      </div>
    )
  }
}
export default Book;