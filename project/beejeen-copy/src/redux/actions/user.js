// 定义生成action
import {CHANGENAME} from '../constant'
export const changeNameAction = (data) => ({type: CHANGENAME, data})
export const changeNameAction500 = (data, time) => (dispatch) => {
  setTimeout(() => {
    dispatch(changeNameAction(data))
  }, time)
}
