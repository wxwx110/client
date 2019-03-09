<template>
    <div>
        <mt-swipe :auto="4000">        
            <mt-swipe-item v-for="item in swipeImages" :key="item.url">                
                <a :href="item.url">
                     <img :src="item.imgUrl" alt="" :class="{'full':isfull}"  />
                </a>
            </mt-swipe-item>
        </mt-swipe> 
    </div>
    <!-- 轮播图的问题
        1、首页中的图片宽和高都是使用了100%的宽度，高度，
        2、商品详情中的图片并不能以100%的宽度和高度 规格显示
            商品详情中的轮播图，希望高度为100% 宽度 自适应
        3、两个不同位置的分歧点，在于宽度的设置

        解决方案：一个属性，让使用轮播图的调用者手动指定轮播图宽度是否为100%
     -->
</template>
<script>
export default {    
    props:["swipeImages","isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    //通过这个方式可以设置轮播图每一页的样式1,2,3
    // .mint-swipe-item:nth-child(1){
    //     background-color:lightseagreen;
    // }
     .mint-swipe-item{
         text-align: center;
        //  &:nth-child(1){
        //     background-color:lightseagreen;
        //  }
        //   &:nth-child(2){
        //     background-color:lightcoral;
        //  }
        //    &:nth-child(3){
        //     background-color:lightskyblue;
        //  }
         img{
            // width:100%;

             height: 100%;
         }
    }
}
.full{
    width: 100%;
}

</style>
