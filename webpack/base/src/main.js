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

$(function(){
    $('li:odd').css('backgroundColor','yellow');
    $('li:even').css("backgroundColor",function(){
        return '#'+'D97634';
    })
})

//webpack能做什么事
//1、webpack 能处理js之间得相互依赖关系
//2、降低js兼容性问题，把高级得浏览器不识别得语法，转为低级
//3、打包命令 webpack 空格 要打包得文件 空格 打包文件输出路径




//使用webpack-dev-server 可以实现自动打包编译
//1、运行 npm -i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖