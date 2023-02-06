import React, { Component } from 'react'
import Item from "../Item"
import "./index.css"

export default class index extends Component {
    render() {
        const {todos, changeItemChecked, deleteItem} = this.props;

        return (
            <ul className="todo-main">
                {
                    todos.map(todo=>{
                        return <Item key={todo.id} changeItemChecked={changeItemChecked} 
                        deleteItem={deleteItem} {...todo}/>
                    })
                }
            </ul>
        )
    }
}

