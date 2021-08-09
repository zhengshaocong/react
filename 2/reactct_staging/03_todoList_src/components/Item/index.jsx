import React, { Component } from 'react'

export default class Item extends Component {
    state={mouse:false}
    handleMouse=(flag)=>{
        return (event)=>{
            this.setState({mouse:flag})
        }
    }
    handleCheck=(id)=>{
        return(e)=>{
            this.props.updateTodo(id,e.target.checked)
        }
    }
    handleDelete=(id)=>{
        this.props.deleteTodo(id)
    }
    render() {
        const {id,name,done}=this.props
        const {mouse} =this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked ={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' onClick={()=>this.handleDelete(id)} style={{display:mouse?'inline-block':'none'}}>删除</button>
            </li>
        )
    }
}
