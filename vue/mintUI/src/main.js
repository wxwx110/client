import Vue from 'vue'
//第一步安装路由 npm i vue-router -S
//导入router包
import VueRouter from 'vue-router'
//导入组件
import app from './App.vue'

import router from './router.js'

//手动安装VueRouter
Vue.use(VueRouter)

//导入BS3图标
import 'bootstrap/dist/css/bootstrap.css'

import './css/app.css'

//完整方式导入mint-UI
// //引入 mint-ui全部组件库
// import MintUI from 'mint-ui'
// //导入样式
// import 'mint-ui/lib/style.css'
// //安装到vue中
// Vue.use(MintUI) //把所有组件注册为全局组件

//按需方式导入mint-ui
import {Button,Toast} from 'mint-ui'

//注册组件也可以自定义组件名字，自定义修改后再模板中需要使用自定义的名字
Vue.component(Button.name,Button)
Vue.component(Toast.name,Toast)


var vm=new Vue({
    el:'#app',
    render :c=>c(app),
    router
})

//app组件是通过render渲染出来的只能放到vm指定的元素中
//account和gooldlist是通过路由监听只能显示到<router-view>中显示


