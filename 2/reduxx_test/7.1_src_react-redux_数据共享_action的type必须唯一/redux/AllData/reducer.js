/*
 * @Author: your name
 * @Date: 2021-04-02 16:08:52
 * @LastEditTime: 2021-04-02 16:27:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\AllData\reducer.js
 */
import {CHANGEDATA} from '../constant'
const initData='xxx'
export default function allDataReducer(preState=initData,action){
    const {type,data}=action
    switch(type){
        case CHANGEDATA:
            return data;
        case 'increment':
            return preState+data
        default:
            return preState
    }
}