import React, { Component } from 'react'
const MyContext=React.createContext()
export default class A extends Component {
    state={userName:'tom'}
    render() {
        return (
            <div>
                <h3>我是A组件</h3>
                <h4>我的用户用户名是：{this.state.userName}</h4>
                <MyContext.Provider value={this.state.userName}>
                    <B ></B>
                </MyContext.Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div style={{marginLeft:'100px'}}>
                <h3>我是B组件</h3>
                <h4>A组件的用户名：{this.props.usename}</h4>
                <C></C>
            </div>
        )
    }
}

// class C extends Component {
//     static contextType=MyContext//必须声明 不然拿不到static
//     render() {
//         console.log(this)
//         return (
//             <div style={{marginLeft:'100px'}}>
//                 <h3>我是C组件</h3>
//                 <h4>A组件的用户名：{this.props.usename}</h4>
//             </div>
//         )
//     }
// }


function C(){
    return (
        <div style={{marginLeft:'100px'}}>
            <h3>我是C组件</h3>
            <MyContext.Consumer>
                {
                    value=>{
                        return `${value}`
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}