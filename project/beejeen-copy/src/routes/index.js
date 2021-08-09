import Login from '../pages/Login';
import dashboard from '../pages/admin/dashboard';
import teaching from '../pages/admin/teaching';
import PageNotFound from '../pages/404';
import {AreaChartOutlined, ShopOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
export const mainRoutes = [{
  path: '/Login',
  component: Login
},
{
  path: '/404',
  component: PageNotFound
}]

export const adminRoutes = [
  {
    path: '/admin/dashboard',
    component: dashboard,
    title: '我的主页',
    icon: AreaChartOutlined
  },
  {
    path: '/admin/teaching',
    component: teaching,
    exact: true,
    title: '商品管理',
    icon: ShopOutlined
  },
  // {
  //   path: '/admin/products/edit/:id?',
  //   component: Edit,
  //   title: '编辑',
  //   isHidden: true
  // }
]
