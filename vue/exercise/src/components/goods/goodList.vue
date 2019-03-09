<template>
    <div class="goods-list">
        <router-link tag="div"  class="goods-item" :to="'/home/goodsInfo/'+1">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2694120582,4084533569&fm=26&gp=0.jpg" alt="">
            <h1 class="title">手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1000</span>
                    <span class="old">1200</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60</span>
                </p>
            </div>
        </router-link>
        <!-- 网页跳转的方式
            1、a标签
            2、window=location.href JS跳转

         -->
         <div tag="div"  class="goods-item" @click="goDetail(1)">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2694120582,4084533569&fm=26&gp=0.jpg" alt="">
            <h1 class="title">手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1000</span>
                    <span class="old">1200</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60</span>
                </p>
            </div>
        </div>

         <div class="goods-item">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2694120582,4084533569&fm=26&gp=0.jpg" alt="">
            <h1 class="title">手机标题过高导致第一个元素，会出现空白留白看起来非常丑</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1000</span>
                    <span class="old">1200</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60</span>
                </p>
            </div>
        </div>
         <div class="goods-item">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2694120582,4084533569&fm=26&gp=0.jpg" alt="">
            <h1 class="title">手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1000</span>
                    <span class="old">1200</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            //商品列表信息
            pageindex:1,
            goodList:[]
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        goDetail(itemId){
            //使用JS形式进行路由导航
            //注意与$route的区别
            //$route指的是路由参数对象包含params query            
            //$router 是路由导航对象:用它可以使用js代码实现路由的跳转
            //$router的原型对象有路由操作的多种方法
           this.$router.push('/home/goodsinfo/'+itemId);
        //    this.$router.push({path:'/home/goodsinfo/'+itemId})
        //    this.$router.push({path:'/home/goodsinfo/'+itemId})
        //    //{path:'/home/goodsinfo/:id',component:GoodsInfo,name:'goodsinfo'}
        //    this.$router.push({name:'goodsinfo', params:{id:id}})
        },
        getGoodsList(){
            // this.$http.get('url'+this.pageindex).then(
            //     (res)=>{
            //         if(res.status===0){
            //             if(pageindex===1){
            //                 this.goodList=res.body.message;
            //             }else{
            //                 this.goodList.concat(res.body.message);
            //             }
                        
            //         }
            //     }
            // );
        },
        getMoreGoods(){
             
        }
    }
}
</script>
<style lang="less" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border :1px sold #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        //通过修改goods-item的盒子变成Y轴流式布局，然后上下对其，保证底部和图片在
        //盒子的两端，这样不会由于项目title的高低影响顶部图片和底部价格的布局变形
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        //让盒子的高度保持默认以便在网速较低时不至于被压缩
        min-height: 293px;
        img{
            width:100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
             background-color: #ddd;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
               
                .now{
                    color: red;
                    font-weight: bold;
                    font-size:16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }  
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
            
        }
    }
}
</style>
