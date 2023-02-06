import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import "./index.css"

export default class index extends Component {

    handleEnter = (event) => {
        const {keyCode, target} = event;
        if(keyCode !== 13) return;
        var newItemObj = {id:nanoid(),name:target.value,done:false};
        this.props.addItem(newItemObj);
        target.value = ""
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleEnter} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
