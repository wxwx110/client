<template>
    <div class="shopcar-container">
        <!-- 商品列表区 -->
       <div class="goods-list">
           <div class="mui-card" v-for="(item,index) in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])" ></mt-switch>
                        <img :src="item.img_url" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
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
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计 (不含运费)</p>
                            <p>
                                 已勾选商品 
                                <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>
                                 件 总价 ￥
                                 <span class="red">{{$store.getters.getGoodsCountAndAmount.amount}}</span>
                            </p>
                        </div>
                          <mt-button type="danger">取结算</mt-button>
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
               
               
        },
        remove(itemId,index){
            //ItemId用于删除vuex
            //index用于删除goodsList
            this.goodsList.splice(index,1);
            this.$store.commit('removeFromCar',itemId);

        },
         selectedChanged(id,value){
             //同步商品选择状态变更

             this.$store.commit('updateGoodsSelected',{id:id,selected:value});
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
        .jiesuan{
            display: flex;
            justify-content: space-between;
            align-content: center;

            .red{
                color:red;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
}
</style>

