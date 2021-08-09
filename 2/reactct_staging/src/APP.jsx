import React, { Component } from 'react'
import {Button} from 'antd'
import {
  WechatOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
export default class APP extends Component {
  render() {
    return (
      <div>
        ...APP
        <Button>点击</Button>
        <Button type="primary">点击</Button>
        <Button type="link">点击</Button>
        <WechatOutlined />
      </div>
    )
  }
}
