import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Avatar, message } from 'antd';
import {withRouter} from 'react-router-dom'
import {adminRoutes} from '../../routes'
import {clearToken} from '../../utils/auth'
import logo from './logo.jpeg'
import './index.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {DownOutlined} from '@ant-design/icons'

const routes = adminRoutes.filter((route) => !route.isHidden)
class Frame extends Component {
  render () {
    let {history} = this.props
    const popMenu = (
      <Menu  onClick={(p) => {
        if (p.key === 'logOut') {
          clearToken()
          history.push('/Login')
        } else {
          message.info(p.key)
        }
      }}>
        <Menu.Item key="noti" >通知中心</Menu.Item>
        <Menu.Item key='setting'>设置</Menu.Item>
        <Menu.Item key="logOut">退出</Menu.Item>
      </Menu>
    )
    return (
      <Layout>
        <Header className="header">
          <div className="logo" >
            <img src={logo} style={{height: '55px'}} alt="logo"/>
          </div>
          <Dropdown  overlay={popMenu} className="dropdownv">
            <p><Avatar>U</Avatar><span >超级管理员</span><DownOutlined /></p>
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

export default withRouter(Frame)
