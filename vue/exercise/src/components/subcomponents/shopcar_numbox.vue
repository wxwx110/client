<template>
   
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max' style="height:25px">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <!-- 也可以使用 @change= 监控文本变化 -->
            <!-- <input id="test" class="mui-input-numbox" type="number" v-model="selectedCount"  value="1" /> -->
            <input ref="numbox" id="test" class="mui-input-numbox" type="number" @change="countChange"   :value="initcount" readonly />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
   
    <!-- 子组件何时把数据传递给父组件 -->
</template>
<script>
  import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
            selectedCount:1
        }       
    },
    props:['initcount','goodsId'],
  
    mounted(){
        //初始化数字选择框组件
       mui(".mui-numbox").numbox()
    },
    methods:{
        countChange(){
            //数量值改变
            //数量同步到购物车覆盖
            this.$store.commit('updateGoodsInfo',{
                id:this.goodsId,
                count:this.$refs.numbox.value
            })
        }

    }
   
}
</script>
<style lang="scss" scoped>

</style>
