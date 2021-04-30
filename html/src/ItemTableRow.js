import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

export default class ItemTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem() {
        axios.delete('http://test.gth.intern.com/api/items/' + this.props.obj.id)
            .then((res) => {
                console.log('Item removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.location}</td>
                <td>{this.props.obj.review}</td>
                <td><button className="edit">Edit</button></td>
                <td><button className="delete" onClick={this.deleteItem}>Delete</button></td>
            </tr>
        );
    }
}