//导入Vue
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
//手动安装VueRouter
Vue.use(VueRouter)
//导入抽离的路由文件
import router from './router.js'


//导入根组件
import app from './App.vue'
//按需导入组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
//头部置顶
Vue.component(Header.name,Header)
//轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui
import   './lib/mui/css/mui.min.css'
//导入扩展图标样式，同时需要把该样式放到fonts目录下
import './lib/mui/css/icons-extra.css'

//装配VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource);







var vm=new Vue({
    el:'#app',
    render :c=>c(app),
    router
})




