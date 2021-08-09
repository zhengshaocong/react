import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class List extends Component {
    
    componentDidMount(){
      this.Pubsub=Pubsub.subscribe('updata',(msg,data)=>{
        this.setState(data)
      })
    }

    componentWillUnmount(){
      Pubsub.unsubscribe(this.Pubsub)
    }
 

    state={
        listData:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    render() {
      const {listData,isFirst,isLoading,err}=this.state

        return (
            <div className="row">
              {
                isFirst?<h2>欢迎</h2>:
                isLoading?<h2>Loaidng</h2>:
                err?<h2>err</h2>:
                listData.map(item=>{
                  return (
                    <div className="card" key={item.id}>
                      <a href={item.html_url} target="_blank" rel="noreferrer">
                        <img alt="" src={item.avatar_url} style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">{item.login}</p>
                    </div>
                  )
                })
              }
            </div>
          
        )
    }
}
