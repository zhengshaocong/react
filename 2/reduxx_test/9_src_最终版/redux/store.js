/*
 * @Author: your name
 * @Date: 2021-04-01 16:26:05
 * @LastEditTime: 2021-04-02 17:16:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\store.js
 */
import {createStore,applyMiddleware, combineReducers} from 'redux'
import countReducer from './Count/reducer'
import personReducer from './Person/reducer'
import thunk from 'redux-thunk'//用于异步
import {composeWithDevTools} from 'redux-devtools-extension'
const allReducer=combineReducers({
    count:countReducer,
    persons:personReducer
})
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))