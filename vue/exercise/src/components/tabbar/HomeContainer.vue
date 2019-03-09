<template>
    <div>
        <!-- 轮播图 -->
        <div>
           <swiper :swipeImages="swipeImages"></swiper>
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
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		                    <!-- <span class="mui-icon mui-icon-email"> -->
                        <router-link to="/home/photolist">
                            <img src="../../images/menu2.png" alt="">
                            <!-- <span class="mui-badge">5</span></span> -->
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
                           
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		                    <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                            <router-link to="/home/goodslist">
                                <img src="../../images/menu3.png" alt="">
                                <div class="mui-media-body">商品购买</div>
                            </router-link>
                            
                    </li>
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
import swiper from '../../components/subcomponents/swiper.vue'

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
    },
    components:{
        swiper
    }
}
</script>
<style lang='less' scoped>

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
