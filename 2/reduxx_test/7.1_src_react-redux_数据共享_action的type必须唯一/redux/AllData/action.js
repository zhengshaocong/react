/*
 * @Author: your name
 * @Date: 2021-04-02 16:09:07
 * @LastEditTime: 2021-04-02 16:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\AllData\action.js
 */
import {CHANGEDATA} from '../constant'
export function createChangeAction(data){
    return {
        type:CHANGEDATA,
        data
    }
} 

export function createIncrement(data) {
    return {
        type:'increment',
        data
    }
}