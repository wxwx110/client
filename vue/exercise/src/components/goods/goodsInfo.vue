<template>
    <div class="goodsinfo-container">
        <!-- 实现半场动画只能使用函数形式以防止与其他动画冲突 -->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
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

                       <p>购买数量:<numbox style="display:inline"></numbox></p>
                       <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
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
            goodsInfo:{id:101,title:'牛B商品',goods_no:'NO9527', addtime:new Date(),stock_quantity:20,market_price:1000,sell_price:499},
            ballFlag:false //小球显示与隐藏标识符

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
        },
        addToShopcar(){
            this.ballFlag=!this.ballFlag;
        },
        beforeEnter(el){
            //设置小球位置
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            /*
                小球动画在不同位置和不同分辨率一下，由于translate的坐标写死，导会有问题
                在不同分辨率和位置下，会导致小球位移不到位
                解决方案 
                1、获取小球的当前坐标 X,Y
                2、获取购物车徽标的 , x1,y1
                3、记算移动坐标  x1-X y1-Y
                4、坐标获取方法     element.getBoundingClientRect()
                5、ball在组件内可以直接通过getBoundingClientRect()获取坐标
                6、徽标不在组件内部，只能直接操作dom元素获取坐标
             */

             const ballPosition=this.$refs.ball.getBoundingClientRect();
             const bagePostion=document.getElementById('badge').getBoundingClientRect();
             //记算小球应该移动的位置
             const xDist=bagePostion.left-ballPosition.left;
             const yDist=bagePostion.top-ballPosition.top;
             el.offsetWidth;
             el.style.transform=`translate(${xDist}px,${yDist}px)`;
             el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)";
             done();
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag;
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
  .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color:red;
      //定位后不影响界面布局
      position:absolute; 
      top:390px;
      left:146px;
      z-index: 1;

  }
}
</style>

