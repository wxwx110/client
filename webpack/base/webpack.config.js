/*
    通过添加本配置文件后，在控制台，直接执行webpack命令，即可根据配置打包文件
*/
const path=require('path')
//这个配置文件，其实就是一个JS文件，通过NODE 中的模块 向外暴露一个匹配对象
module.exports={
    //入口表示要是用webpack打包哪个文件
    entry:path.join(__dirname,'./src/main.js'),
    //输出文件相关配置
    output:{
        //输出目录
        path:path.join(__dirname,'./dist'),
        //输出文件名
        filename:'bundle.js'
    }
}