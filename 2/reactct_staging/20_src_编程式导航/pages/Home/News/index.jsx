import React, { Component } from 'react'

export default class News extends Component {
    componentDidMount(){
        setTimeout(()=>{
            this.props.history.push('/home/message')
        },2000)
    }
    render() {
        return (
            <ul>
                <li>001</li>
                <li>002</li>
                <li>003</li>
                <li>004</li>
            </ul>
        )
    }
}
