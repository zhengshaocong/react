import React, { Component } from 'react'

export default class Child extends Component {
    state={
        user:[
            {id:0,name:'11',age:15},
            {id:1,name:'111',age:17},
            {id:2,name:'141',age:19},
            {id:3,name:'151',age:25}
        ],
        aaa:'1111'
    }
    render() {
        this.ooooo()
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.aaa.map((item)=>{
                        return <h4 key={item.id}>{item.name}----{item.age}</h4>
                    })
                }
            </div>
        )
    }
}
