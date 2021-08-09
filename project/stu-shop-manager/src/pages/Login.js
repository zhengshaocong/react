import React from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {setToken} from '../utils/auth'
import {loginApi} from '../services/auth'
import './Login.css'
const NormalLoginForm = (props) => {
  const onFinish = (values) => {
    loginApi({
      username: values.username,
      password: values.password
    }).then(() => {
      setToken(values.username)
      props.history.push('/admin')
    })
      .catch(() => {

      })
  };

  return (
    <Card title="登录">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default NormalLoginForm
