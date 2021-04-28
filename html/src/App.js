import './App.css';

function App() {
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

      <form>

        <div className="form-group">
          <label>Restaurants or Cafes Name</label>
          <input 
            type="text" 
            name="name"
          />                       
        </div>

        <div className="form-group">
          <label>Location</label>
          <input 
            type="text" 
            name="location"
          />                       
        </div>

        <div className="form-group">
          <label>Review</label>
          <textarea 
            type="text" 
            name="review"
          >
          </textarea>                       
        </div>

        <div className="button-ok">
          <button className="ok">OK</button>                                              
        </div>

      </form>      

      <br></br>
       
      <nav>
        <span>Restaurants & Cafes List</span>
      </nav>

      <br></br>

      <table>
                        
        <tr>
          <th width="25%">Name</th>
          <th width="30%">Location</th>
          <th width="35%">Review</th>
          <th width="5%">Edit</th>
          <th width="5%">Delete</th>
        </tr>

        <tr>
          <td>name</td>
          <td>location</td>
          <td>review</td>
          <td><button className="edit">Edit</button></td>
          <td><button className="delete">Delete</button></td>
        </tr>
                        
      </table>

    </div>
  );
}

export default App;
