
import VueRouter from 'vue-router'

//导入对应路由组件
//tabbar组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

//新闻组件
import NewsList from './components/news/newsList.vue'





var router=new VueRouter({
    routes:[
        //tabbar路由
        {path:'/',redirect:'/home'},
        {path:'/home',component : HomeContainer},
        {path:'/member',component : MemberContainer},
        {path:'/shopcar',component : ShopcarContainer},
        {path:'/search',component : SearchContainer},
        // 新闻路由
        {path:'/home/newslist',component : NewsList},

    ],
    linkActiveClass:'mui-active'//覆盖默认路由高亮类router-link-active
})

//暴露路由对象
export default router 