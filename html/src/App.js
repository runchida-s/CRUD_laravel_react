import './App.css';
import axios from 'axios';
import React, { Component} from "react";
import ItemsList from './items-listing.component';

class App extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemLocation = this.onChangeItemLocation.bind(this);
    this.onChangeItemReview = this.onChangeItemReview.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      location: '',
      review: ''
    }
  }

  onChangeItemName(e) {
    this.setState({name: e.target.value})
  }

  onChangeItemLocation(e) {
    this.setState({location: e.target.value})
  }

  onChangeItemReview(e) {
    this.setState({review: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const item = {
      name: this.state.name,
      location: this.state.location,
      review: this.state.review
    };
    axios.post('http://test.gth.intern.com/api/items', item)
      .then(res => console.log(res.data));

    this.setState({name: '', location: '', review: ''})
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

      <form onSubmit={this.onSubmit}>

        <div className="form-group">
          <label>Restaurants or Cafes Name</label>
          <input 
            type="text" 
            name="name"
            value={this.state.name}
            onChange={this.onChangeItemName}
          />                       
        </div>

        <div className="form-group">
          <label>Location</label>
          <input 
            type="text" 
            name="location"
            value={this.state.location}
            onChange={this.onChangeItemLocation}
          />                       
        </div>

        <div className="form-group">
          <label>Review</label>
          <textarea 
            type="text" 
            name="review"
            value={this.state.review}
            onChange={this.onChangeItemReview}
          >
          </textarea>                       
        </div>

        <div className="button-ok">
          <button className="ok" type="submit">OK</button>                                              
        </div>

      </form>      

      <br></br>
       
      <nav>
        <span>Restaurants & Cafes List</span>
      </nav>

      <br></br>

      <ItemsList> </ItemsList>

    </div>
  );
}
}

export default App;
