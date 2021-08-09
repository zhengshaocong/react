import React, { Component } from 'react'
import {Form, Card, Input, Button} from 'antd'
// const [form] = Form.useForm();
class Edit extends Component {
    onFinish = (values) => {
      console.log('Success:', values);
    };
    priceValidate=(rule, value) => new Promise((resolve, reject) => {
      if (value > 100 || !value) {
        reject()
      } else {
        resolve()
      }
    })
   onFinishFailed = (errorInfo) => {
     console.log('Failed:', errorInfo);
   };
   render () {
     return (
       <Card title="商品编辑">
         <Form
           initialValues={{ username: '' }}
           onFinish={this.onFinish}
           onFinishFailed={this.onFinishFailed}
         >
           <Form.Item  name="username" label="名字" rules={[{ required: true, message: 'Please input your username!' }]}>
             <Input name="username" placeholder='请输入名称'></Input>
           </Form.Item>
           <Form.Item  name="price" label="价格" rules={[{ required: true, validator: this.priceValidate,  message: '不能超出' }]}>
             <Input name="price" placeholder='请输入名称'></Input>
           </Form.Item>
           <Form.Item >
             <Button type="primary" htmlType="submit">保存</Button>
           </Form.Item>
         </Form>
       </Card>
     )
   }
}

export default Edit
// import React from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

// const Demo = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <Form
//       {...layout}
//       name="basic"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
// export default Demo
