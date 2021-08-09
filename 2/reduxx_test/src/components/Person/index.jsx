import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/Person/action'

class Person extends Component {
    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const personObj={id:nanoid(),name,age}
        this.props.add(personObj)

    }
    render() {
        return (
            <div>
                <p>上方组件和为{this.props.count}</p>
               <input ref={c=>this.nameNode=c} type="text" placeholder="输入名字"/>
               <input ref={c=>this.ageNode=c} type="text" placeholder="输入年龄"/>
               <button onClick={this.addPerson}>添加</button>
               <ul>
                   {
                       this.props.persons.map(item=>{
                           return <li key={item.id}>{item.name}---{item.age}</li>
                       })
                   }
               </ul>
            </div>
        )
    }
}
export default connect(state=>({
    persons:state.persons,
    count:state.count
}),
{add:createAddPersonAction}
)(Person)
