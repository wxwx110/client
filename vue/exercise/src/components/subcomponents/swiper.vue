<template>
    <div>
        <mt-swipe :auto="4000">        
            <mt-swipe-item v-for="item in swipeImages" :key="item.url">                
                <a :href="item.url">
                     <img :src="item.imgUrl" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe> 
    </div>
</template>
<script>
export default {    
    props:["swipeImages"]
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
</style>
