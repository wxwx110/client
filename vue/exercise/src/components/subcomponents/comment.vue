<template>
    <div class="cmt-container">
        <div class="cmt-resume"><h3>发表评论</h3> </div>        
        <div>
            <textarea  placeholder="请输入评论内容(最多120字)" v-model="newComment"></textarea>
            <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
        </div>
        <div>
            <div class="cmt-list">
                <div class="cmt-item" v-for="(item,index) in cmtList" :key="item.id">
                    <div class="cmt-title">
                        第{{index+1}}楼 &nbsp;&nbsp;用户：{{item.uername}}&nbsp;&nbsp; 发表时间:{{item.addTime | dateFormat}}
                    </div>
                    <div class="cmt-body">
                        {{item.content === 'undefined'?'这货很懒':item.content}}
                    </div>
                </div>
                  <div class="cmt-item">
                    <div class="cmt-title">
                        第X楼 &nbsp;&nbsp;用户：xx用户&nbsp;&nbsp; 发表时间:12321321321
                    </div>
                    <div class="cmt-body">
                        评论的内容再次
                    </div>
                </div>
                  <div class="cmt-item">
                    <div class="cmt-title">
                        第X楼 &nbsp;&nbsp;用户：xx用户&nbsp;&nbsp; 发表时间:12321321321
                    </div>
                    <div class="cmt-body">
                        评论的内容再次
                    </div>
                </div>
            </div>
            <mt-button type="danger" size="large" plain @click="getMoreCmt()">加载更多</mt-button>
        </div>

    </div>
</template>
<script>

import {Toast} from 'mint-ui'
export default {
    data(){ 
        return {
            cmtList:[{id:1,uername:"超人",addTime:new Date(),content:'品论内容'}],
            pageIndex:1, //评论页面，默认展示第一页
            newComment:'', //新增评论            
        }
    },
    props:[
        'newsId'
    ],
    created(){
        this.getCMTList();
    },
     methods:{
        getCMTList(){
            this.$http.get('url'+this.newsId+"/pageIndex"+this.pageIndex).then((result)=>{
                    if(result.body.status===0){
                        //加载更多时保留已读取数据
                        if(this.pageIndex===1){
                            this.cmtList=result.body.message;
                        }else{
                            this.cmtList=this.cmtList.concat( result.body.message);
                        }  
                    }else{
                        Toast('获取评论列表失败');
                    }
                }
            );
        },
        getMoreCmt(){
            this.pageIndex+=1;
            this.getCMTList()
        },
        addComment(){
            if(this.newComment.trim().length>0){
                //用户标识，可以通过后台的sessiON获取无需通过前端提交
                this.$http.post('url'+this.newsId,{newComment:this.newComment}).then(
                    res=>{
                        this.newComment='';
                        if(res.body.result==0){
                            this.pageIndex=1;
                            this.getCMTList();
                        }else{
                            Toast('提交失败');
                        }
                    }
                )
            }else{
                Toast('评论内容不能为空');
            }
        }
    }

}
</script>

<style lang="less" scoped>
.cmt-container{
    .cmt-resume h3{
        font-size:18px
    }
    .textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin:5px 0;
        .cmt-item{
            font-size: 13px;

            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                text-indent: 2em;
            }
        }
    }
}
</style>
