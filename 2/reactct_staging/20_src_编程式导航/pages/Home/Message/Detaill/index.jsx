import React, { Component } from 'react'
import qs from 'querystring'
const DetaillData=[
    {id:1,content:'我要飞上天'},
    {id:2,content:'与太阳肩并肩'},
    {id:3,content:'世界因我改变'}
]

export default class Detaill extends Component {
    render() {
        // const {id,title}=this.props.match.params
        // console.log(id)
        // const findReault=DetaillData.find((detailObj)=>{
        //     return detailObj.id===id*1
        // })


        // const {search}=this.props.location
        // const {id,title}=qs.parse(search.slice(1))
        // console.log(id)
        // const findReault=DetaillData.find((detailObj)=>{
        //     return detailObj.id===id*1
        // })

        const {id,title}=this.props.location.state||{}
        console.log(id)
        const findReault=DetaillData.find((detailObj)=>{
            return detailObj.id===id*1
        })
        return (
            <div>
                <ul>
                    <li>ID {id}</li>
                    <li>Title {title}</li>
                    <li>Content {findReault?.content}</li>
                </ul>
            </div>
        )
    }
}
