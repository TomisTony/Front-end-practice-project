import React, { Component } from 'react'
import "./index.css"

export default class index extends Component {

    state = {mouseIn:false};

    mouseHandler(flag){
        return ()=>{
            this.setState({mouseIn:flag});
        }
    }

    handleCheck(id){
        const {changeItemChecked} = this.props;
        return ()=>{
            changeItemChecked(id,event.target.checked);
        }
    }

    render() {
        const {id, name, done} = this.props;
        return (
            <li style={{background:this.state.mouseIn? '#ddd':"white"}} 
            key={id} onMouseEnter={this.mouseHandler(true)} onMouseLeave={this.mouseHandler(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:this.state.mouseIn?'block':"none"}}>删除</button>
            </li>
        )
    }
}
