import React from 'react'
import { Card } from 'antd';
import './CardItem.scss'
export default function CardItem (props) {
  let list = Object.values(props.list)
  return (
    <>
      <Card title={props.title} className="mb-20" extra={<a href="#">查看详情</a>} >
        <div className="df">
          {list.map((item) => (
            <div className="itemData mr-30" key={item.title}>
              <p className="title">{item.title}</p>
              <p className="value">{item.val}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
