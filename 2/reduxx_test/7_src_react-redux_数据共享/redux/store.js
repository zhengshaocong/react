/*
 * @Author: your name
 * @Date: 2021-04-01 16:26:05
 * @LastEditTime: 2021-04-02 15:19:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\store.js
 */
import {createStore,applyMiddleware, combineReducers} from 'redux'
import countReducer from './Count/reducer'
import personReducer from './Person/reducer'
import thunk from 'redux-thunk'//用于异步
const allReducer=combineReducers({
    he:countReducer,
    rens:personReducer
})
export default createStore(allReducer,applyMiddleware(thunk))