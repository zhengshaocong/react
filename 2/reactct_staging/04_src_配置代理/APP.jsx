import React, { Component } from 'react'
import axios from 'axios'
export default class APP extends Component {
    getStudentData=()=>{
        axios.get('/api1/students').then((
            response=>{
                console.log(response)
            },
            error=>{
                console.log('失败')
            }
        ))
    }
    getCarData=()=>{
        axios.get('/api2/cars').then((
            response=>{
                console.log(response)
            },
            error=>{
                console.log('失败')
            }
        ))
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        )
    }
}
