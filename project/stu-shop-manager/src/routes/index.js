import Login from '../pages/Login';
import Index from '../pages/admin/dashboard';
import List from '../pages/admin/products/List';
import Edit from '../pages/admin/products/Edit';
import PageNotFound from '../pages/admin/PageNotFound';
import {AreaChartOutlined, ShopOutlined} from '@ant-design/icons'
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
    component: Index,
    title: '看板',
    icon: AreaChartOutlined
  },
  {
    path: '/admin/products',
    component: List,
    exact: true,
    title: '商品管理',
    icon: ShopOutlined
  },
  {
    path: '/admin/products/edit/:id?',
    component: Edit,
    title: '编辑',
    isHidden: true
  }
]
