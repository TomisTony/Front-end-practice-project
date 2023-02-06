import React, { Component } from 'react'
import "./index.css"

export default class index extends Component {

    render() {
        const {todos,checkAll,clearAllFinish} = this.props;
        const totalCounts = todos.length;
        const finishCounts = todos.reduce((pre,current)=>{return current.done?pre+1:pre;},0);


        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={finishCounts === totalCounts && totalCounts !== 0? true:false}
                    onChange={(event)=>{checkAll(event.target.checked)}}/>
                </label>
                <span>
                    <span>已完成{finishCounts}</span> / 全部{totalCounts}
                </span>
                <button className="btn btn-danger" onClick={clearAllFinish}>清除已完成任务</button>
            </div>
        )
    }
}

