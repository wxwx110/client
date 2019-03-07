<template>
    <div>
        <!-- 轮播图 -->
        <div>
            <mt-swipe :auto="4000">
                <!-- <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item> -->
                <!-- 组件使用v-for必须设置key -->
                <mt-swipe-item v-for="item in swipeImages" :key="item.url">
                   
                    <a :href="item.url"> <img :src="item.imgUrl" alt=""></a>
                </mt-swipe-item>
            </mt-swipe> 
        </div>
        <div class="mui-content">
             <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                          <!-- <span class="mui-icon mui-icon-home"></span> -->
                        <router-link to="/home/newslist">
                            <!-- <a href="#"> -->
                                <img src="../../images/menu1.png" alt="">
                                <div class="mui-media-body">新闻资讯</div>
                            <!-- </a> -->
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-email"> -->
                            <img src="../../images/menu2.png" alt="">
                            <!-- <span class="mui-badge">5</span></span> -->
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                             <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-location"></span> -->
                             <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-search"></span> -->
                             <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <!-- <span class="mui-icon mui-icon-phone"></span> -->
                             <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		         
		        </ul> 
        </div>
      
    </div>
</template>
<script>
import { Toast } from 'mint-ui';


export default {
    data(){
        return {
            swipeImages:[],
              
        }
    },
    created(){
        this.getSwipImages()
    },
    methods:{
        getSwipImages(){//获取轮播图数据
            // this.$http.get('url').then(result=>{
            //     //异步获取轮播图数据
            //     //获取数据对象[{url:xxxx,imgUrl:XXXXX}]
            //     if(result.body.status===0){
            //         swipeImages=result.body;
            //     }else{
            //         Toast(获取加载轮播图失败)
            //     }
            // });

           this.swipeImages= [
                {url:'http://www.baidu.com',imgUrl:'../../tmpImages/a1.jpg'},
                {url:'http://www.qq.com',imgUrl:'../../tmpImages/a2.jpg'},
                 {url:'http://www.baotao.com',imgUrl:'../../tmpImages/a3.jpg'}
            ];
        }
    }
}
</script>
<style lang='less' scoped>
.mint-swipe{
    height: 200px;
    //通过这个方式可以设置轮播图每一页的样式1,2,3
    // .mint-swipe-item:nth-child(1){
    //     background-color:lightseagreen;
    // }
     .mint-swipe-item{
         &:nth-child(1){
            background-color:lightseagreen;
         }
          &:nth-child(2){
            background-color:lightcoral;
         }
           &:nth-child(3){
            background-color:lightskyblue;
         }
         img{
             width:100%;
             height: 100%;
         }
    }
}
//直接修改覆盖原生样式避免优先级问题
//从浏览器查看并修改
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:0;
    img{
        width:60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}


.mui-grid-view.mui-grid-9 .mui-table-view-cell{
   background-color: #fff;
    border:0;
}

</style>
