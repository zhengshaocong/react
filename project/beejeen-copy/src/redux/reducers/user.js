// 创建reducer
import {CHANGENAME} from '../constant'
const initData = {
  name: '聪聪',
  phone: '145465456465',

}
export default function reducer (preState = initData, action) {
  const {type, data} = action
  switch (type) {
  case CHANGENAME:
    return {...preState, name: data}
  default:
    return preState
  }
}
