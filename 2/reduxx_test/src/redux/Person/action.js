/*
 * @Author: your name
 * @Date: 2021-04-02 13:52:08
 * @LastEditTime: 2021-04-02 15:28:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reduxx_test\src\redux\Person\action.js
 */
import {ADD_PERSON} from '../constant'
//创建一个增加人的action
export const createAddPersonAction=(personObj)=>({type:ADD_PERSON,data:personObj})