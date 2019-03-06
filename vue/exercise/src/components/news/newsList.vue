<template>
    <div>
        <ul class="mui-table-view">
            <!-- newsList:[{id:13,title:'title',addTime:"2018-08-08",zhaiyao:'aaaaa',click:'10',imgUrl:"../../tmpImages/a1.jpg"}] -->
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to='"/home/info/"+item.id'>
                    <img class="mui-media-object mui-pull-left" :src="item.imgUrl">
                    <div class="mui-media-body">
                       <h1>{{item.title}}</h1> 
                        <p class='mui-ellipsis'>
                            <span> 发表时间: {{item.addTime | dateFormat()}}</span>
                             <span>点击：{{item.click}}次 </span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!-- <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../tmpImages/a1.jpg">
                    <div class="mui-media-body">
                       <h1>幸福</h1> 
                        <p class='mui-ellipsis'>
                            <span> 发表时间 XXXX-XXXX</span>
                             <span>点击：X次 </span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../tmpImages/a1.jpg">
                    <div class="mui-media-body">
                       <h1>幸福</h1> 
                        <p class='mui-ellipsis'>
                            <span> 发表时间 XXXX-XXXX</span>
                             <span>点击：X次 </span>
                        </p>
                    </div>
                </a>
            </li> -->
		</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data(){
      return{
          newsList:[{id:13,title:'newsTitle',addTime:"2018-08-08",zhaiyao:'aaaaa',click:'10',imgUrl:"../../tmpImages/a1.jpg"}]
      }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            // this.$http.get('url').then((result)=>{
            //         if(result.body.status===0){
            //             this.newsList=result.body.message;
            //         }else{
            //             Toast('获取新闻列表失败');
            //         }
            //     }

            // );
        }
    }
}
</script>

<style lang="less" scoped>
.mui-table-view{
    li{
        h1{
            font-size:14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color:#226aff;
            // 内容两端对齐
            display: flex;
            justify-content:space-between;
        }

    }
}
</style>

