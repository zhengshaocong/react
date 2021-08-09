import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    search=()=>{
        const {keyWordElement:{value},props:{setData}}=this
        setData({isFirst:false,isLoading:true})
        axios.get(`/api1/search/users?q=${value}`).then(response=>{
          console.log('成功')
          setData({isLoading:false,listData:response.data.items})
        },
        error=>{
          setData({isLoading:false,err:'出错'})
        })
    }
    render() {
        return (
            <section className="jumbotron">
              <h3 className="jumbotron-heading">Search Github Users</h3>
              <div>
                <input type="text" ref={c=>this.keyWordElement=c} placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
              </div>
            </section>
        )
    }
}
