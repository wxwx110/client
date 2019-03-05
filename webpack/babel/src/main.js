

import './css/index.css'
import './css/index.less'
//注意，如果要通过路径的形式，引入node_modules中相关文件可以直接省去
//node_modules目录，直接写包名
import 'bootstrap/dist/css/bootstrap.css'

//class ES6新语法用于实现OO编程
class Person{
    //使用static关键字可以定义静态属性,可以通过类名直接访问
    static info={name:'aaa',age:20}
}
var p1=new Person();
console.log('Person.info :', Person.info);

//在webpack中，默认只能处理一部分ES6的新语法一部分高级语法无法实现
//需要记住第三方loader来 处理高级语法需要第三方loader转换为低级后
//交给WEBPACK打包
//通过BABLE，可以把高级语法转为低级语法
//第一步：安装bable的两套包
//第一套包(babel转化工具)
//1、npm i babel-core babel-loader babel-plugin-transform-runtime -D
//第二套包(babel语法)
//2、npm i babel-preset-env babel-preset-stage-0 -D

//第二步：webpack.config.js 文件module节点添加匹配规则：
//{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//注意配置BABLE的loader规则时，必须排除node_modules目录下的文件
//原因如下：
//1、如果不排除,babel会打包编译该目录下的所有文件
//2、即使转换完该目录的JS项目也不能正常运行

//第三步：在项目的根目录中，新建一个 .babelrc的Bable配置文件，该文件必须符合JSON规范
//在.bablerc中写如下配置
// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }
//第四步: babel-preset-env 是比较新的ES语法插件 之前安装的是babel-preset-es2015
//最新插件preset-env包含最新的语法



