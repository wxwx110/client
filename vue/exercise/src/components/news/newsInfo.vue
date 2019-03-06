<template>
    <div class="newsinfo-container">
      <div class="title">{{newsInfo.title}}</div>
      <div class="subTitle">
          <span>发表时间:{{newsInfo.addTime | dateFormat }}</span>
            <span>点击: {{newsInfo.click}} 次 </span>
      </div>
      <hr>
      <div class=content v-html="newsInfo.content">
         
      </div>
      
      <comment-box :newsId="this.newsId"></comment-box>
    </div>
</template>
<script>
import comment from '../../components/subcomponents/comment.vue';
export default {
    data(){
        return{
            //将 rul传递的ID值挂在到Data上方便使用
            newsId:this.$route.params.id,
            newsInfo:{id:13,title:'newsTitle',click:3,addTime:new Date(),content:"<h1>新闻内容</h1>"}
        }
    },
    components:{//注册子组件
        'comment-box':comment
    },
    created(){
        this.getnewsInfo();
    },
    methods:{
         getnewsInfo:()=>{
        //     this.$http.get('url'+this.newsId).then(result=>{
        //         if(result.body.status===0){
        //             this.newsInfo=resu.body.message;
        //         }else{
        //             Toast('获取数据失败');
        //         }

        //     })
         }
    }
}
</script>
<style lang="less" >
.newsinfo-container{
    padding:0 4px;

    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color:red;
    }
    .subTitle{
        font-size: 13px;
        color:#226aff;
        display:flex;
        justify-content:space-between;

    }
    .content{
        img{
            //需要去掉scoped 才能让图片100%有效
            width: 100%;
        }
    }
}
</style>
 