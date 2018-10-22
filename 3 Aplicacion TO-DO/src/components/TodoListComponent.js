import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Button, FormControl, utils } from 'react-bootstrap';

import { addTodo, toggleTodo, removeTodo, setVisibilityFilter } from '../actions/todos';
import Link from './Link'
import Todo from './Todo'

const getVisibleTodos = ( todos, filter ) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
}

class TodoListComponent extends Component {
    constructor() {
        super();

        this.state = {
            todo: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleChange(e) {
        this.setState({todo: e.target.value});
    }

    handleAddTodo() {
        this.props.addTodo(this.state.todo);
        this.setState({todo: ''});
        ReactDom.findDOMNode(this.refs.todo).focus();
    }

    render() {

        const wellStyles = { maxWidth: 500, margin: '0 auto 10px' };
        const { todos, toggleTodo, removeTodo, visibilityFilter, setVisibilityFilter } = this.props;
        
        return (
            <div>
                <h2 className="text-center text-muted">TODO APP</h2>
                <br/>

                <FormControl
                    type="text"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    autoFocus
                    ref="todo" 
                />
                <br/>

                <Button
                    bsStyle="primary"
                    bsSize="large"
                    block
                    onClick={this.handleAddTodo}
                >
                    Submit
                </Button>

                <br/>

                <div className="well" style={wellStyles}>
                    <Link 
                        onClick={() => setVisibilityFilter('SHOW_ALL')}
                        active={'SHOW_ALL' == visibilityFilter}
                    >
                    <span>ALL</span>
                    </Link>

                    <Link 
                        onClick={() => setVisibilityFilter('SHOW_COMPLETED')}
                        active={'SHOW_COMPLETED' == visibilityFilter}
                    >
                    <span>COMPLETED</span>
                    </Link>

                    <Link 
                        onClick={() => setVisibilityFilter('SHOW_ACTIVE')}
                        active={'SHOW_ACTIVE' == visibilityFilter}
                    >
                    <span>ACTIVE</span>
                    </Link>
                </div>

                <ul>
                    {todos.map(todo =>
                        <Todo 
                            key={todo.id}
                            onClick={()=> toggleTodo(todo.id)}
                            onDelete={()=> removeTodo(todo.id)}
                            todo={todo}
                        />
                    )}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        },

        toggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },

        removeTodo: (id) => {
            dispatch(removeTodo(id));
        },

        setVisibilityFilter: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);