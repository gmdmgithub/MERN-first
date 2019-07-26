import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
  state = {
    title:        "",
    ISBN:         "",
    description:  "",
    editState:  false,
    id: null
  }
  
  componentDidMount(){
    console.log("Mount input");
  }
  
  parentBook = (book) => {
    console.log("GetBook input", book);
    
    if(book !== null && book !== undefined){
      this.setState({
        title:        book.title,
        ISBN:         book.ISBN,
        description:  book.description,
        editState: true,
        id: book._id
      })
    }
  }

  addBook = () => {
    const book = {
      title: this.state.title,
      ISBN: this.state.ISBN,
      description: this.state.description,
      author:{
        firstname: 'John',
        lastname: 'Doe'
    }

    }
    if(book.title && book.title.length > 0){
      console.log("so create or update?",this.state);
      
      if(this.state.editState  && this.state.id !== null){
        axios.put(`/api/books/${this.state.id}`,book)
        .then(res =>{
          console.log(res);
          this.props.getBooks();
          this.resetForm()
        })
        .catch(e => console.log(e));
      }
      else{//add state
        axios.post('/api/books', book)
          .then(res => {
            if(res.data){
              this.props.getBooks();
              this.resetForm()
            }
          })
          .catch(err => console.log(err))
      }
    }else {
      console.log('input field required')
    }
  }

  resetForm = () =>{
    this.setState({  
      title:        "",
      ISBN:         "",
      description:  "",
      editState: false,
      id: null
    })
  }

  getButtonValue =()=>{
    return this.state.editState?"Update book":"Add book";
  }
  cancelButton = () =>{
    return this.state.editState?<button className="cancel-button" onClick={this.resetForm}>Cancel update</button>:"";
  }

  handleChange = (e) => {
    
    switch (e.target.name) {
      case "title":
        this.setState({title:e.target.value})
        break;
      case "ISBN":
        this.setState({ISBN:e.target.value})
        break;
      case "description":
        this.setState({description:e.target.value});
        break;
      default: 
        console.log('Changed s%',e.target.value );
        break;
    }
    
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor="title">Book title</label><br></br>
          <input type="text" name="title" 
            onChange={this.handleChange} value={this.state.title} />
        </div>
        <div>    
          <label htmlFor="ISBN">ISBN</label><br></br>
          <input type="text" name="ISBN" onChange={this.handleChange} value={this.state.ISBN} />
          </div>
        <div>
          <label htmlFor="description">Book description</label><br></br>
          <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
        </div>
        <button className="add-button" onClick={this.addBook}>{this.getButtonValue()}</button>
        {this.cancelButton()}

      </div>
    )
  }
}
export default Input