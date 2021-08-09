 import React, { Component } from 'react'
 import ReactDOM from 'react-dom'
// class Demo extends Component {
//      state={count:0,name:'tom'}
//      myRef=React.createRef()
//      componentDidMount(){
//          this.timer=setInterval(()=>{
//             this.setState((state)=>({count:state.count+1}))
//         },100)
//      }
//      componentWillUnmount(){
//         clearInterval(this.timer)
//      }
//      add=()=>{
//         this.setState(state=>({count:state.count+1}))
//      }
//      change=()=>{
//         this.setState(state=>({name:state.name+1}))
//      }
//      unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//      }
//      examine=()=>{
//          console.log(this.myRef.current)
//      }

//      render() {
//          const {count,name}=this.state
//          return (
//              <div>
//                  <input type="text" ref={this.myRef}/>
//                 <h2>当前求和{count} 名字{name}</h2>
//                 <button onClick={this.add}>+1</button>
//                 <button onClick={this.change}>change</button>
//                 <button onClick={this.unmount}>删除</button>
//                 <button onClick={this.examine}>查看输入</button>
//              </div>
//          )
//      }
//  }

function Demo(){

    const [count,setCount]=React.useState(1)
    const [name,setName]=React.useState('tom')
    const myRef=React.useRef()
    React.useEffect(()=>{ 
        let timer= setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    React.useEffect(()=>{ 
        console.log(123)
        return ()=>{
            console.log(666)
        }
    },[count])

    React.useEffect(()=>{ 
        console.log('name')
    },[name])

    function add(){
        setCount(count+1)
    }
    function change(){
        setName(name+1)
    }
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function examine(){
        console.log(myRef.current)
    }

    return(
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和{count} 名字{name}</h2>
            <button onClick={add}>+1</button>
            <button onClick={change}>change</button>
            <button onClick={unmount}>删除</button>
            <button onClick={examine}>查看输入</button>
        </div>
    )
}
 export default Demo