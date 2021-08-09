import React, { PureComponent } from 'react'
// const MyContext=React.createContext()
export default class Parent extends PureComponent {

    state={carName:'666'}
    changeCar=()=>{
        this.setState({
            carName:'7777'
        })
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state)
    //     console.log(nextProps,nextState)
    //     if(this.state.carName===nextState.carName){
    //         return false
    //     }
    //     return true
    // }
    render() {
        const {carName} =this.state
        console.log('Parent')
        return (
            <div>
                <h3>我是Parent组件</h3>
                <h2>我的车{carName}</h2>
                <button onClick={this.changeCar}>换车</button>
                <Child></Child>
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state)
    //     console.log(nextProps,nextState)
    //     if(this.props.carName===nextProps.carName){
    //         return false
    //     }
    //     return true
    // }
    render() {
        console.log('child')
        return (
            <div style={{marginLeft:'100px'}}>
                <h3>我是Child组件</h3>
                {/* <p>我接到车是{this.props.carName}</p> */}
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


// function C(){
//     return (
//         <div style={{marginLeft:'100px'}}>
//             <h3>我是C组件</h3>
//             <MyContext.Consumer>
//                 {
//                     value=>{
//                         return `${value}`
//                     }
//                 }
//             </MyContext.Consumer>
//         </div>
//     )
// }