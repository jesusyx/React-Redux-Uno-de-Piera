import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Todo extends Component {
    render() {
        //const { onClick, onDelete, todo } = this.props;
        return (
            <li
                onClick={this.props.onClick}
                style = {{textDecoration: this.props.todo.completed ? 'line-through' : 'none', marginBottom: 5}}
                >
                {this.props.todo.text} <Button bsStyle="danger" onClick={this.props.onDelete}>Eliminar</Button>
            </li>
        )
    }
}

export default Todo