import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <h3>我是Parent</h3>
                <A render={(name)=><B name={name}></B>}></A>
            </div>
        )
    }
}


class A extends Component {
    state={name:'tom'}
    render() {
        return (
            <div style={{marginLeft:'100px'}}>
                我是A组件
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div style={{marginLeft:'100px'}}>
                我是B组件
                {this.props.name}
            </div>
        )
    }
}

// class C extends Component {
//     render() {
//         return (
//             <div>
//                 我是C组件
//             </div>
//         )
//     }
// }