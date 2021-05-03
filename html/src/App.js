import './App.css';
import axios from 'axios';
import React, { Component} from "react";

class App extends Component {

  constructor() {
    super();

    // Setting up state
    this.state = {
      items:[],
      id:'',
      name: '',
      location: '',
      review: ''
    }
    // Setting up functions

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  //add post

  //show post
  componentDidMount(){

    axios.get('http://test.gth.intern.com/api/items')
        .then(res => {
          // console.log(res.data.data);
          this.setState({
            items: res.data.data     
          });
        })
        .catch((error) => {
          console.log(error);
        })
  }

  //
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //กดปุ่ม add
  handleSubmit(e){
    e.preventDefault();

    if(this.state.id !== ''){
      return this.updateItem();
    }

    const item = {
      name: this.state.name,
      location: this.state.location,
      review: this.state.review
    };
    
    axios.post('http://test.gth.intern.com/api/items', item)
      .then(res => {
        console.log(res.data)
        window.location.reload();
    });
    
    this.setState({id:'', name: '', location: '', review: ''})

  }

  //
  handleUpdate = (id = null , name = null , location = null , review = null) => {
    this.setState({id, name, location, review})
  }

  //edit
  updateItem(){

      var item = { name:this.state.name, location:this.state.location, review:this.state.review }

      axios.put('http://test.gth.intern.com/api/items/' + this.state.id, item)
            .then((res) => {
                console.log('Item removed deleted!')
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            })

      this.setState({
        id:'',
        patch:'',
        game:'',
        description:''
      })

  }

  //ลบ
  removeItem(itemId){
    axios.delete('http://test.gth.intern.com/api/items/' + itemId)
            .then((res) => {
                console.log('Item removed deleted!')
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            })
  }

  render() {
  return (
    <div className="App">

      <div className="jumbotron">
        <h1>Food Around You</h1>  
        <h2>@ AIA Capital Center</h2>        
        <p>Recommended Restaurants & Cafes near AIA Capital Center</p>
      </div>

      <br></br>

      <nav>
        <span>Add Restaurants & Cafes</span>
      </nav>

      <form 
      onSubmit={this.handleSubmit}
      >

        <div className="form-group">
          <label>Restaurants or Cafes Name</label>
          <input 
            type="text" 
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />                       
        </div>

        <div className="form-group">
          <label>Location</label>
          <input 
            type="text" 
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />                       
        </div>

        <div className="form-group">
          <label>Review</label>
          <textarea 
            type="text" 
            name="review"
            value={this.state.review}
            onChange={this.handleChange}
          >
          </textarea>                       
        </div>

        <div className="button-ok">
          <button className="ok" 
          // type="submit"
          >OK</button>                                              
        </div>

      </form>      

      <br></br>
       
      <nav>
        <span>Restaurants & Cafes List</span>
      </nav>

      <br></br>

      {/* <ItemsList> </ItemsList> */}

      <table>
                        
            <tr>
                <th width="25%">Name</th>
                <th width="30%">Location</th>
                <th width="35%">Review</th>
                <th width="5%">Edit</th>
                <th width="5%">Delete</th>
            </tr>
            {
              this.state.items.map((item) => {
                return (    
                  <tr>
                      <td>{item.name}</td>
                      <td>{item.location}</td>
                      <td>{item.review}</td>
                      <td><button 
                            className="edit"
                            onClick={() => this.handleUpdate(item.id,item.name,item.location,item.review)}
                          >
                            Edit
                          </button>
                        </td>
                      <td><button 
                            className="delete" 
                            onClick={() => this.removeItem(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                  </tr>
                )
                })
            }                                    
        </table>

    </div>
  );
}
}

export default App;
