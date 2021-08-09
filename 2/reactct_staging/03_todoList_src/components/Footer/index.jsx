import React, { Component } from 'react'

export default class Footer extends Component {
    handleChackAll=(e)=>{
        this.props.checkAllTodo(e.target.checked)
    }
    clearAllDone=()=>{
        this.props.clearAllDone()
    }
    render() {
        const {todos}=this.props
        const doneCount= todos.reduce((pre,item)=>{
            return pre+(item.done?1:0)
        },0)
        const total=todos.length
        return (
            <div className="todo-footer">
                <label >
                    <input type="checkbox" checked={(doneCount===total)&&doneCount>0?true:false} onChange={this.handleChackAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span>/全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
