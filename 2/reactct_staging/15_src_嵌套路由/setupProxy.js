/*
 * @Author: your name
 * @Date: 2021-03-05 10:59:43
 * @LastEditTime: 2021-03-05 11:30:18
 * @LastEditors: Please set LastEditors
 * @Description: 代理
 * @FilePath: \reactct_staging\src\setupProxy.js
 */
const proxy=require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        proxy('/api1',{
            target:'http://localhost:5000',
            changeOrigin:true,//控制服务器收到的请求头中Host的值 若为false 服务器收到的请求头host是代理服务器而不是发起请求的地址 若为tru 服务器则会被欺骗 指向发起请求的地址
            pathRewrite:{
                '^/api1':''
            }
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{
                '^/api2':''
            }
        })
    )
}