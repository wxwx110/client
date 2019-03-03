// js入口文件

//1、导入JQUERY文件

// 从 node_modules文件夹导入jquery 并赋值给 $ 
//es 6 导入模块得方式 等同与
// const $=require('jquery') 
//由于ES6得语法太高级 直接使用import 会报错
//需要是用webpack处理

//webpack .\src\main.js .\dist\bundle.js 
//处理main.js输出至，根目录下得dist目录内bundle.js
import $ from 'jquery'

//webpack只能打包.JS文件对于其他类型文件需要使用第三方打包工具
// "css-loader": "^0.28.0",  "style-loader": "^0.23.1",
// "less": "^2.1.1",
//"less-loader": "^2.0.0"
//并在webpack.config.js 文件module节点下的rules【】中配置对应的文件加载规则
import './css/index.css'
import './css/index.less'
//import './css/index.sass'

$(function(){
    $('li:odd').css('backgroundColor','lightblue');
    $('li:even').css("backgroundColor",function(){
        return 'lightyellow';
    })
})

//webpack能做什么事
//1、webpack 能处理js之间得相互依赖关系
//2、降低js兼容性问题，把高级得浏览器不识别得语法，转为低级
//3、打包命令 webpack 空格 要打包得文件 空格 打包文件输出路径


//webpack实现自动打包编译功能
//  "webpack": "^3.10.0",
//"webpack-dev-server": "^2.9.7"
//使用webpack-dev-server 可以实现自动打包编译
//1、运行 npm -i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
//2、安装完成后用法与webpack完全一致
//3\webpack-dev-server是本地安装，不能直接使用脚本命令，只有-G 全局安装的，才能直接使用
//   // 在package.json “script脚本下”  
//配置  "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",    
//     "dev":"webpack-dev-server"
//   },用DEV 代替执行webpack-dev-server命令 // 使用  npm run dev 命令执行
// webpack-dev-server 如果想正常运行需要在本地项目安装webpack

//webpack-dev-server生成的bundles.js，并没有存放到物理磁盘而是放在电脑内存中
//是通过http://localhost:8080/bundle.js访问的
//并不会根据配置文件生成到dist目录下
//"dev": "webpack-dev-server --open --port 3000 --contentBase src --hot" 
// --open 自动打开浏览器
//--port 3000 设置http端口3000
//--contentBase src 以 src作为根目录进行访问
//--hot 热更新，只争对变更部分提交补丁，不重新编译文件，并提供无刷新
//更新页面



//npm i html-webpack-plugin 插件用于HTML内存化操作


//安装node-sass@4.0.0 时需要使用cnpm安装
