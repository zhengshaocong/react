/*
 * @Author: your name
 * @Date: 2021-04-01 17:10:04
 * @LastEditTime: 2021-04-01 17:21:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\count_action.js
 */
import {INCREMENT,DECREMENT} from './constant'
export function  createIncrementAction(data) {
    return {type:INCREMENT,data}
}

export function  createDecrementAction(data) {
    return {type:DECREMENT,data}
}