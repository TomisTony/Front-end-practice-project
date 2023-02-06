import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import List from "./components/List"

class App extends Component {

    state = {
        todos:[
            {id:'001',name:'test1',done:true},
            {id:'002',name:'test2',done:true},
            {id:'003',name:'test3',done:false},
            {id:'004',name:'test4',done:false},
        ]
    }

    addItem = (newItemObj) => {
        const {todos} = this.state;
        var newItems = [newItemObj, ...todos];
        this.setState({todos:newItems});
    }

    changeItemChecked = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo)=>{
            if(todo.id === id) return {...todo,done}
            else return todo;
        })
        this.setState({todos:newTodos});
    }
    
    render(){
        const {todos} = this.state;
        return (
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addItem={this.addItem}/>
                        <List todos={todos} changeItemChecked={this.changeItemChecked}/>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
