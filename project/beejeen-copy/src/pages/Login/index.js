import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import API from '../../api'
import md5 from 'js-md5'
import {connect} from 'react-redux'
import {setToken} from '../../utils/auth'
import './index.scss'
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
  },
};

function Demo (props) {
  const onFinish = (values) => {
    // console.log('Success:', values);
    API.login({userName: values.userName, password: md5(values.password + 'pwd')}).then(() => {
      setToken('5666')
      props.history.push('/admin/dashboard')
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="Login">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="Form"
      >
        <h2 className="ta-c f-s-18">登录</h2>
        <Form.Item
          label="用户名"
          name="userName"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
          登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default connect((state) => ({userData: state.user}),
  {

  })(Demo)
