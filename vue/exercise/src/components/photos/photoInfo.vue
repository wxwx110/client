<template>
    <div class="photo-info-container">
        <!-- 标题区 -->
        <div class="photo-info-top">
            <h3>{{photoInfo.title}}</h3>
            <p class="subtitle">
                <span>发表时间:{{photoInfo.addtime | dateFormat}}</span>
                <span>点击次数:{{photoInfo.click}}</span>
            </p>
        </div>
        <hr>
       <!-- 内容区 -->
        <div class="photo-info-body">
            <div class="thumbs">
                 <!-- 缩略图区 -->
                <img class="preview-img" v-for="(item, index) in photoList" :key="index" :src="item.src"
                height="100" @click="showPic()">

            </div>
           
            <!-- 图片说明 -->
            <div class="content" v-html="photoInfo.content">

            </div>
        </div>
        <!-- 评论区 -->
        <div class="photo-info-cmt">
            <cmt-box :newsId="this.photoId"></cmt-box>
        </div>
    </div>    
</template>
<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
            photoId:this.$route.params.id,
            photoInfo:{id:1 ,addtime:new Date(),click:3,content:'这是图片的详情信息可能有很多，还有可能包含html代码所以需要用v-html渲染',title:'图片标题'},
            //缩略图数组
            photoList:[ {id:1,url:'http://www.baidu.com',src:'../../tmpImages/a1.jpg',title:"图片介绍表头",resume:"图片介绍"},
                {id:2,url:'http://www.qq.com',src:'../../tmpImages/a2.jpg',title:"图片介绍表头",resume:"图片介绍"},
                 {id:3,url:'http://www.baotao.com',src:'../../tmpImages/a3.jpg',title:"图片介绍表头",resume:"图片介绍"}],
        }
    },
    components:{
        'cmt-box':comment
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
   
    methods:{
         showPic(){
             console.log($VuePreview);
            $VuePreview.open(index,photoList);
        },
        getThumbs(){
            // this.$http.get('url'+this.photoId).then(
            //     res=>{
            //         if(res.status==0){
            //             this.photoList=res.body.message;
                        this.photoList.forEach((item)=>{
                            item.w=600;
                            item.h=400;
                        })
            //         }else{
                        
            //         }
            //     }
            // )
        },
        getPhotoInfo(){
            // this.$http.get('url'+photoId).then(
            //     res=>{
            //         if(res.status===0){
            //             this.photoInfo=res.body.mesage;
            //         }else{

            //         }
            //     }
            // )
        }
    }
}
</script>
<style lang="less" scoped>
.photo-info-container{
    padding :3px;
    .photo-info-top{
        h3{
            color:#26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
    }
    
    .photo-info-body{
        .thumbs{
            img{
                margin: 10px;
                box-shadow: 0 0 8px #999;
            }
           
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }
    }


}

</style>
