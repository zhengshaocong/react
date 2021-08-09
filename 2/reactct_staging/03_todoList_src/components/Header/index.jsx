import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
export default class Header extends Component {

    static propTypes={
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp=(event)=>{
        if(event.keyCode===13){
            if(event.target.value){
                this.props.addTodo({
                    name:event.target.value, 
                    dome:false,
                    id:nanoid()
                })
                event.target.value=''
            }else{
                return
            }
        }else{
            return
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
