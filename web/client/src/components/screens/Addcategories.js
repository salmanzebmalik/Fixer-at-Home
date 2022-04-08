
import React, { Component } from 'react';

import List from './categorycard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


class   Addcategories extends Component {
  constructor() {
    super();
    this.state = {
      x:[],
      name:"",
      service:"",
      category:""

    };
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.valueAsNumber || e.target.value });
  };
    onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      service:this.state.service,
     
      
      };
      console.log(data)



      
    axios
      .post('/api/auth/categories', data)
      .then(res => {
        
      
      
        })
        .catch(err => {
          this.setState({error:err.response.data.error});
        })
      };
    

    onclick=e=>{
      const data = {
        category: this.state.category
        
        };
        console.log(data)
        //console.log(id);
  axios
  .post('/api/auth/deletecategory',data)
  .then(res => {
    
  
  
    })
    .catch(err => {
      console.log(err);
    })
    }

   componentDidMount(){

    


    

  
      
  };

  
      
    

  render() {
    const books = this.state.x
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book recored!";
    } else {
        
      bookList = books.map((book, k) =>
        <List book={book} key={k} />
      );
    }
    
    
      
    return (

      <div>
                <Navbar variant="dark" className=" bgqqq ml-0 colorp" expand="md">
  <Container className="ms-0">
    <Navbar.Brand className="text-light" href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-light">
        <Nav.Link  className="text-light" href="/login">Home</Nav.Link>
        <Nav.Link  className="text-light" href="/QQQ">societies</Nav.Link>
        <Nav.Link  className="text-light" href="/Listq">list</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



<div class="cards-list">

   

    <div className="register-screen">
      <div className= "my-5">
      
    </div>
    
      <form onSubmit={this.onSubmit} className="register-screen__form" style={{width:359,marginTop:89}}>
        <h3 className="register-screen__title">Add Category</h3>
        
       
         
        <div className="form-group" >
        
          <input
            type="text"
            


            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChange}
            
          />
        </div>
        
        
        <div className="form-group">
          
          <input
            type="text"
            
            name="service"
            placeholder="service"
            value={this.state.service}
            onChange={this.onChange}
            
          />
        </div>
        <button type={this.onSubmit} className="btn btn-success">
          Add
        </button>
        <div style={{marginTop:89}}></div>
        <h3 className="register-screen__title">Delete Category </h3>
        
        <div className="form-group">
          
          <input
            type="text"
            
            name="category"
            placeholder="category"
            value={this.state.category}
            onChange={this.onChange}
            
          />
        </div>
       
        <button onClick={this.onclick} className="btn btn-danger">
          Delete
        </button>

        <span className="register-screen__subtext">
          
        </span>
   


    


</form>
</div>
</div>
</div>
  )}}
    

    
export default Addcategories