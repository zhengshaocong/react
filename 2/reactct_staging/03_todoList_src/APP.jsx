import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './APP.css'
export default class APP extends Component {
    //状态在哪里 操作状态的函数就在哪里
    state={
        todos:[
            {id:1,name:'吃饭',done:true},
            {id:2,name:'睡觉',done:true},
            {id:3,name:'敲代码',done:false}
        ]
    }
    addTodo=(todoObj)=>{
        const {todos}=this.state
        const newTodos=[todoObj,...todos]
        this.setState({todos:newTodos})
    }
    updateTodo=(id,done)=>{
        const {todos}=this.state
        const newTodos= todos.map((item) => {
            if(item.id===id) return {...item,done}
            else return item
        })
        this.setState({todos:newTodos})
    }

    deleteTodo=(id)=>{
        if(window.confirm('确定删除吗')){
            const {todos}=this.state
            const newTodos= todos.filter((item)=>{
                return item.id!==id
            })
            this.setState({
                todos:newTodos
            })
        }
    }

    checkAllTodo=(data)=>{
        const {todos}=this.state
        const newTodos=todos.map((item)=>{
            return {...item,done:data}
        })
        this.setState({
            todos:newTodos
        })
    }

    clearAllDone=()=>{
        const {todos}=this.state
        const newTodos=todos.filter(item=>{
            return !item.done
        })
        this.setState({
            todos:newTodos
        })
    }
    render() {
        const {todos}=this.state
        return (
            <div>
                <Header addTodo={this.addTodo}></Header>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
            </div>
        )
    }
}
