import Vue from 'vue'
//第一步安装路由 npm i vue-router -S
//导入router包
import VueRouter from 'vue-router'
//导入组件
import app from './App.vue'
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue' 

//手动安装VueRouter
Vue.use(VueRouter)

var router=new VueRouter({
    routes:[
        {path:'/account',component: account},
        {path:'/goodslist',component: goodsList}
    ]
})

var vm=new Vue({
    el:'#app',
    render :c=>c(app),
    router
})

//app组件是通过render渲染出来的只能放到vm指定的元素中
//account和gooldlist是通过路由监听只能显示到<router-view>中显示


