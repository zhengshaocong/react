/*
 * @Author: your name
 * @Date: 2021-04-01 16:26:05
 * @LastEditTime: 2021-04-01 16:31:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\store.js
 */
import {createStore} from 'redux'
import countReducer from './count_reducer'
export default createStore(countReducer)