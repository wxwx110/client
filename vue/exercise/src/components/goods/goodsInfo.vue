<template>
    <div class="goodsinfo-container">
        <!-- 商品轮播图 -->
        <div class="mui-card" >
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                      <swiper :swipeImages="lunboImgs" :isfull="false" ></swiper>
                </div>
            </div>
		</div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品标题名称</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                       <p class=price>
                           <span>市场价：￥<del>{{goodsInfo.market_price}}</del> </span>
                           销售价格:￥<span class="now-price">{{goodsInfo.sell_price}}</span>
                       </p>
                       <p>购买数量<numbox></numbox></p>
                       <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                       </p>
                    </div>
                </div>            
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodsInfo.goods_no}}件</p>
                    <p>库存情况:{{goodsInfo.stock_quantity}}</p>
                    <p>上架时间:{{goodsInfo.addtime| dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" plain size="large" @click="goDesc(id)">图文介绍</mt-button>
                
                <mt-button type="danger" plain size="large" @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from '../../components/subcomponents/swiper.vue'
import numbox from '../../components/subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return{
            //商品id
            id:this.$route.params.id,
            lunboImgs:[  {url:'http://www.baidu.com',imgUrl:'../../tmpImages/a1.jpg'},
                {url:'http://www.qq.com',imgUrl:'../../tmpImages/a2.jpg'},
                 {url:'http://www.baotao.com',imgUrl:'../../tmpImages/a3.jpg'}],
            goodsInfo:{id:101,title:'牛B商品',goods_no:'NO9527', addtime:new Date(),stock_quantity:20,market_price:1000,sell_price:499}
        }
    },
      components:{
        swiper,
        numbox
    },
    created(){
        this.getLunbo();
        this.getGoodsInfo();
    },
    methods:{
        goDesc(id){
            this.$router.push({name:"goodsdesc",params:{id}})
        },
        goComment(id){
            this.$router.push({name:"goodscmt",params:{id}})
        },
        getLunbo(){
            // this.$http.get('url'+this.id).then(
            //     res=>{
            //         if(res.body.status===0){
            //             this.lunboImgs=res.body.message;
            //         }
            //     }
            // )
            
        },
        getGoodsInfo(){
            this.$http.get('url'+this.id).then(
                res=>{
                    if(res.body.status===0){
                        this.goodsInfo=res.body.message; 
                    }
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
   
    //取消顶部留白--CSS盒子塌陷造成
    overflow: hidden;
  .now-price{
      color:red;
      font-size: 16px;
      font-weight: bold;
  }
  .mui-card-footer{
      //取消父级元素flex让按钮并排
      display: block;
      button{
          margin:15px 0;
      }
  }
}
</style>

