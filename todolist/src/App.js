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
    
    render(){
        const {todos} = this.state;
        return (
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header />
                        <List todos={todos}/>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
