<template>
    <div class="goodsdesc-container">
        <h3>{{goodsDes.title}}</h3>
        <hr>
        <div class="content" v-html="goodsDes.content">

        </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
           
            goodsDes:{title:'商品信息',content:'<h1>带标签的图文介绍</h1>'}
       }
    },
    created(){
        // this.$http.get('url'+$route.params.id).then(
        //     res=>{
        //         if(res.body.status===0){
        //             this.goodsDes=this.body.message;
        //         }
        //     }
        // );
    }
    
}
</script>
<style lang="scss" >
.goodsdesc-container{
    padding: 4px;
    h3{
        font-size: 30p;
        color:#226aff;
        text-align: center;
        margin: 15px 0;

    }
    
    .content{
        img{
            width: 100%;
        }
    }
}

</style>
