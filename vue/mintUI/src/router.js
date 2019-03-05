import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue' 

//导入子组件
import login from './sub/Login.vue'
import reg from './sub/Reg.vue'





var router=new VueRouter({
    routes:[
        {path:'/account',component: account,
        children:[
            {path:'login',component: login,},
            {path:'reg',component: reg,}
        ]},
        {path:'/goodslist',component: goodsList}
    ]
})

//暴露路由对象
export default router 