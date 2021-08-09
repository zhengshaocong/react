import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createChangeAction,createIncrement} from '../../redux/AllData/action'
class AllData extends Component {
    componentDidMount(){
        this.isInput.value=this.props.allData
    }
    changeData=()=>{
        this.props.change(this.isInput.value)
    }
    add=()=>{
        this.props.add(this.isInput.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={(c)=>this.isInput=c} onChange={this.changeData}/>
                <button onClick={this.add}>+</button>
                <p>{this.props.allData}</p>
            </div>
        )
    }
}

export default connect(state=>({
    allData:state.all
}),
{
    change:createChangeAction,
    add:createIncrement
}
)(AllData)