/*
 * @Author: your name
 * @Date: 2021-04-02 14:09:26
 * @LastEditTime: 2021-04-02 15:29:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\Person\reducer.js
 */
import {ADD_PERSON} from '../constant'
const initState=[{name:'tom',age:18,id:0}]
export default function personReudcer(preState=initState,action){
    const {type,data}=action
    switch(type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}