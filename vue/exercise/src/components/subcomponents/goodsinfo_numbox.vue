<template>
   
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <!-- 也可以使用 @change= 监控文本变化 -->
            <!-- <input id="test" class="mui-input-numbox" type="number" v-model="selectedCount"  value="1" /> -->
            <input ref="goodscount" id="test" class="mui-input-numbox" type="number" @change="countChange" v-model="selectedCount"  value="1" />
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
    props:['max'],
    // 监听异步调用回传的最大库存数量
    //由于式异步调用，不知道何时返回真实数字，使用监听器监控
    watch:{
        'max':(oldVal,newVal)=>{
            mui("#test").numbox().setOption('max',newVal);
        }
    },
    mounted(){
        //初始化数字选择框组件
       mui(".mui-numbox").numbox()
    },
    methods:{
        countChange(){
            //因为非手工输入引发的变化，并不会导致model的变化
            // console.log('model :', this.selectedCount);
            // console.log('this.selectedCount :', this.$refs.goodscount.value);
            this.$emit('getcount',parseInt(this.$refs.goodscount.value));

        }

    }


    //通过控件导致value发生的变化，并不会被vue监听器监听到
    //同时绑定的V-model也不会实现双向绑定
    // watch:{
    //     selectedCount (){
    //         console.log('this.selectedCount :', this.selectedCount);
    //         //this.$emit()
            
    //     }
    // } 
}
</script>
<style lang="scss" scoped>

</style>
