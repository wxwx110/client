/*
    通过添加本配置文件后，在控制台，直接执行webpack命令，即可根据配置打包文件
*/
const path=require('path')

//使用配置方式跑webpack-dev-server时需要引入以启用热更新
const webpack=require("webpack")

//导入，内存中生成HTML的插件，并放入plugins节点
//作用：1、自动根据模板创建内存文件 2、自动把打包好的bundle.js（内存）加载到网页中
const htmlWebpackPlugin=require('html-webpack-plugin')
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
    },
    devServer:{ //配置 dev-server命令参数方式二
        open:true,//相当于--open
        port:3000,//相当于 --port 3000
        contentBase:'src',//--contentBase src
        hot:true, //--hot
    },
    plugins:[//配置插件的节点
        //new 一个热更新的模块对象，以启用热更新
        new webpack.HotModuleReplacementPlugin(),
        //new 一个在内存中创建html 页面的插件
        new htmlWebpackPlugin({
            //根据指定路径，去生成内存中的路径
            template:path.join(__dirname,'./src/index.html'),
            //指定内存中生成文件的名称。
            filename:'index.html'
        }),
       
    ],
    module:{//所有第三方模块加载器
        rules:[
            //使用正则表达式匹配.CSS文件
            //配置处理CSS第三方规则
            //调用规则，从右到左
            //webpack 1.X可以不带-lodader
            { test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.sass/,use:['style-loader','css-loader','sass-loader']}
        ]
            
    }

}