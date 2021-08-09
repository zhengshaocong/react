import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
    search=()=>{
        const {keyWordElement:{value}}=this
        Pubsub.publish('updata',{isFirst:false,isLoading:true})
        axios.get(`/api1/search/users?q=${value}`).then(response=>{
          Pubsub.publish('updata',{isLoading:false,listData:response.data.items})
        },
        error=>{
          Pubsub.publish('updata',{isLoading:false,err:'出错'})
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
