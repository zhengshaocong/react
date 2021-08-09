import React, { Component } from 'react'
import {Card, Table, Button, Popconfirm} from 'antd'
export default class List extends Component {
  render () {
    const columns = [{
      title: '序号',
      key: 'id',
      width: 80,
      align: 'center',
      render: (txt, record, index) => index
    }, {
      title: '名字',
      dataIndex: 'name',
    }, {
      title: '价格',
      dataIndex: 'price',
    }, {
      tite: '操作',
      width: 200,
      key: 'action',
      render: (txt, record, index) => (
        <div>
          <Button type="primary">修改</Button>
          <Popconfirm title="确定删除此项" onCancel={() => console.log('用户取消删除')} onConfirm={console.log('确认删除')}>
            <Button type="danger">删除</Button>
          </Popconfirm>
        </div>
      )
    }]
    const dataSource = [{
      id: 1,
      name: '香皂',
      price: 10,
    }, {
      id: 2,
      name: '小玩笑',
      price: 12
    }, {
      id: 44,
      name: '摩托车',
      price: 55
    }]
    const {history} = this.props
    return (
      <Card title="商品列表" extra={<Button type="primary" size="small" onClick={() => history.push('/admin/products/edit')}>新增</Button>}>
        <Table columns={columns} dataSource={dataSource} bordered rowKey={(record) => record.id}></Table>
      </Card>
    )
  }
}
