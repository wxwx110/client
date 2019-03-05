// 第一步 npm i vue -S 安装到运行项目中
// 第二步 导入Vue
//使用import导入的vue功能不完整只提供了runtime-only的方式
//使用script标签导入的vue包是功能完整的
import Vue from 'vue'
//包的查找规则
//1、找项目根目录中是否有node_modules的文件夹
//2、在node_modules中根据包名找对应的vue文件夹
//3、在vue文件夹中找package.json包配置文件
//4、在package.json文件中，查找一个main属性（main属性指定了这个包在被加载的时候，的入口文件）

//这个包才是导入功能完整的
//import Vue from '../node_modules/vue/dist/vue.js'

// var login={
//     template :'<h1>这四login 网页渲染的组件 </h1>'
// }

//默认webpack无法打包.vue文件，需要安装相关loader
//npm i vue-loader vue-template-compiler -D
//并新增loader配置{test:/\.vue$/,use:'vue-loader'}
import login from './login.vue'

var vm=new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    // components:{
    //     login
    // }
    // render:function(creator){
    //     return creator(login);
    // }
    //简写render
    render:c=>c(login)
})

/**
 * 总结webpack使用vue
 * 1、安装vue的包 
 * npm i vue -S
 * 2、webpack推荐使用vue模板文件定义需要安装解析文件
 * npm i vue-loader vue-template-compiler -D
 * 3、在main.js中导入vue
 * import Vue from 'vue'
 * 4、定义.vue结尾的组件文件三部分构成 template script style
 * 5、使用import导入这个组件
 * 6、创建vm实例并在vm中使用render来渲染输出组件
 * 7、在页面中创建 vm实例挂载的元素 组件会被渲染到这个元素
 * 
 */

 import  ml,{title,title2} from './test.js'

 //可在控制台打印该对象
 console.log(ml);
 console.log('title :', title);
 console.log('title2 :', title2);
