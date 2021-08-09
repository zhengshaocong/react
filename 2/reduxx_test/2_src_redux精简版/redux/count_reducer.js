/*
 * @Author: your name
 * @Date: 2021-04-01 16:26:15
 * @LastEditTime: 2021-04-01 16:42:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\count_reducer.js
 */
const initData=0
 function countReducer(preState=initData,action) {
     const {type,data}=action
     switch(type){
        case 'increment':
            return preState+data
        case 'decrement':
            return preState-data
        default:
            return preState
     }
 }
 export default countReducer