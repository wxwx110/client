<template>
    <div class="shopcar-container">
        <!-- 商品列表区 -->
       <div class="goods-list">
           <div class="mui-card" v-for="item in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch ></mt-switch>
                        <img :src="item.img_url" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
                                <a href="#">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
       </div>

        <!-- 结算区域 -->
        <div class="goods-list">
           <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
       </div>
    </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return {
            goodsList:[{id:1,title:'手机产品',sell_price:499,img_url:'../../tmpImages/a4.png.jpg'}]
        }
    }, 
    created( ){
        this.getGoodsList();
        
    },
    methods:{
        getGoodsList(){
                let idaArr=[];
                this.$store.state.car.forEach(element => {
                    idaArr.push(element.id)
                });
                if(idaArr.length>0){
                     this.$http.get('url'+idaArr).then(
                        res=>{
                            if(res.body.status===0){
                                this.goodsList=res.body.message;

                            }
                        }
                    )
                }
               
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            height: 60px;
            width: 60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            .prices{
                color: red;
                font-weight: bold;
            }
        }
    }
}
</style>

