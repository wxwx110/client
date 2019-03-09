
import VueRouter from 'vue-router'

//导入对应路由组件
//tabbar组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

//新闻组件
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'
//图片组件
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'

//商品组件
import GoodList from './components/goods/goodList.vue'
import GoodsInfo from './components/goods/goodsInfo.vue'
import GoodsDesc from './components/goods/goodsdesc.vue'
import GoodsCMT from './components/goods/goodscmt.vue'







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
        {path:'/home/info/:id',component:NewsInfo},
        //图片路由
        {path:'/home/photolist',component:PhotoList },
        {path:'/home/photoinfo/:id',component:PhotoInfo},
        //商品路由
        {path:'/home/goodslist',component:GoodList},
        {path:'/home/goodsinfo/:id',component:GoodsInfo,name:'goodsinfo'},
        {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'},
        {path:'/home/goodscmt/:id',component:GoodsCMT,name:'goodscmt'}



    ],
    linkActiveClass:'mui-active'//覆盖默认路由高亮类router-link-active
})

//暴露路由对象
export default router 