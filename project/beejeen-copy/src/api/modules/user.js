/*
 * @Author: your name
 * @Date: 2021-04-21 17:26:55
 * @LastEditTime: 2021-04-21 17:32:29
 * @LastEditors: Please set LastEditors
 * @Description: 登录相关
 * @FilePath: \beejeen-copy\src\api\modules\user.js
 */
import {post, get} from '../../utils/request'

/**
 * @description: 登录
 * @param {*}
 * @return {*}
 */
export function login (data) {
  return post('/login', {
    type: 1,	// 1=教务端 0=学员端
    ...data
  })
}

export function logout () {
  return post('/logout')
}
