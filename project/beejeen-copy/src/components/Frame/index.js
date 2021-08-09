import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Avatar, message } from 'antd';
import {withRouter} from 'react-router-dom'
import {adminRoutes} from '../../routes'
import {clearToken} from '../../utils/auth'

import {connect} from 'react-redux'// 链接容器组件 与ui组件
import {changeNameAction500} from '../../redux/actions/user'

import logo from './logo.jpeg'
import './index.css'
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {DownOutlined} from '@ant-design/icons'
const routes = adminRoutes.filter((route) => !route.isHidden)

// ui组件
class Frame extends Component {
  changeName=() => {
    console.log(this.props.changeNameAction500)
    this.props.changeNameAction500(666)
  }
  render () {
    console.log(this.props)
    let {history, userData = {}} = this.props
    const popMenu = (
      <Menu  onClick={(p) => {
        if (p.key === 'logOut') {
          clearToken()
          history.push('/Login')
        } else if (p.key === 'changeName') {
          this.changeName()
        } else {
          message.info(p.key)
        }
      }}>
        <Menu.Item key="changeName" >改名666</Menu.Item>
        <Menu.Item key="noti" >通知中心</Menu.Item>
        <Menu.Item key='setting'>设置</Menu.Item>
        <Menu.Item key="logOut">退出</Menu.Item>
      </Menu>
    )
    return (
      <Layout className="context">
        <Header className="header">
          <div className="logo" >
            <img src={logo} style={{height: '55px'}} alt="logo"/>
          </div>
          <Dropdown  overlay={popMenu} className="dropdownv">
            <p><Avatar>U</Avatar><span className="mr-10 ml-10">{userData.name}</span><DownOutlined /></p>
          </Dropdown>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {routes.map((route) => (
                <Menu.Item key={route.path} onClick={(p) => history.push(p.key)}>
                  <route.icon></route.icon>
                  {route.title}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                overflowX: 'hidden',
                overflowY: 'scroll'
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

// 容器组件
// 参数1 传递redux的state 参数2 传递redux的操作方法
export default connect(
  (state) => ({userData: state.user}),
  // 简写
  {
    changeNameAction500
  }
  // 一般
//   (dispatch) => ({changeNameAction500: (num) => dispatch(changeNameAction500(num))})
)(withRouter(Frame))
