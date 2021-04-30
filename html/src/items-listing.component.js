import './App.css';
import axios from 'axios';
import React, { Component, useEffect, useState } from "react";
import ItemTableRow from './ItemTableRow';

export default class ItemList extends Component {

    constructor(props) {
      super(props)
      this.state = {
        items: []
      };
    }
  
    componentDidMount() {
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
  
    DataTable() {
      return this.state.items.map((res, i) => {
        return <ItemTableRow obj={res} key={i} />;
      });
    }
  
  
    render() {
      return (
      <div>

        <table>
                        
            <tr>
                <th width="25%">Name</th>
                <th width="30%">Location</th>
                <th width="35%">Review</th>
                <th width="5%">Edit</th>
                <th width="5%">Delete</th>
            </tr>
                
            {this.DataTable()}
                                                
        </table>

      </div>);
    }
  }