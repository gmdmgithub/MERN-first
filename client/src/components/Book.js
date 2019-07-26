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
    books: [],
    editSate: false,
    book: null
  }

  componentDidMount(){
    this.getBooks();
    this.getBook();
  }
  //refresh
  getBooks = () => {
    axios.get('/api/books')
      .then(res => {
        if(res.data){
          this.setState({
            books: res.data,
            editSate: false,
            book: null
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
    // const book = {
    //   title:'Some fancy title'
    // };
    // axios.put(`/api/books/${id}`,book)
    //   .then(res =>{
    //     console.log(res);
    //     this.getBooks()
      
    //   })
    //   .catch(e => console.log(e));

    let book =  this.state.books.filter(b => b._id ===id)
    if(book.length >0){
      this.setState({
        editSate: true,
        book:book[0]

      })
    }
    // console.log('Did you find a book?',book);
    // this.getBook();
    this.childInput.current.parentBook(book[0]);
  }

  getBook(){

    console.log("Get book state", this.state);
    

    if (this.state === undefined || !this.state.editSate || this.state.book == null)
      return null

    console.log("get a book", this.state.book);
    
    return this.state.book
    
  }

  render() {
    let { books} = this.state;
    return(
      <div>
        <h1>My Book(s)</h1>
        <Input getBooks={this.getBooks} getBook={this.getBook} ref={this.childInput} />
        <ListBook books={books} deleteBook={this.deleteBook} editBook={this.editBook}/>
      </div>
    )
  }
}
export default Book;