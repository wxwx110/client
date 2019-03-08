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
// //按需导入mint-ui组件
// import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// //头部置顶
// Vue.component(Header.name,Header)
// //轮播图
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// //按钮
// Vue.component(Button.name, Button);

// //懒加载控件
// Vue.use(Lazyload);
//由于mint-ui自身原因，使用按需导入后，会导致lazyload出现无法加载懒加载图标的问题，需要改成全部导入

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//导入mui
import   './lib/mui/css/mui.min.css'
//导入扩展图标样式，同时需要把该样式放到fonts目录下
import './lib/mui/css/icons-extra.css'

//装配VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource);

//设置请求根路径
Vue.http.options.root='http://xxx.xxxxx';
//设置POST  时候表单数据的 POST 数据格式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON=true;

//导入时间插件
import moment from 'moment';
//定义全局过滤器
Vue.filter ('dateFormat',function(dataStr,partten="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(partten);
});





var vm=new Vue({
    el:'#app',
    render :c=>c(app),
    router
})




