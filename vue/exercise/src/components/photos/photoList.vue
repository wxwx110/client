<template>
    <div id="image-body-main" class="image-body-list">
		<!-- 图片顶部 -->
        <div class="top-content">
            <div id="slider" class="mui-slider ">
				<!-- 滚动条的高亮是组件内部自动实现的与vue无关 -->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">						
						<a :class="['mui-control-item',item.id == -1 ? 'mui-active':'']" 
							v-for="item in photoCategory" :key=item.id @click="getPhotoByCateId(item.id)">
							{{item.title}}
						</a>					
					</div>
				</div>
			</div>
        </div>
		<!-- 图片列表 -->
		<div>
			<ul class="photo-list">
				<li v-for="item in imgList" :key=item.id>
					<img v-lazy="item.imgUrl">
					<div class="info">
						<h1 class="info-title">{{item.title}}</h1>
						<div class="info-body">{{item.resume}}</div>
					</div>
				</li>
			</ul>
		</div>
        
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
//放在这里会导致初始化顺序出现问题导致组件第一次加载时不能正确滑动
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });
/**
 * import mui from '../../lib/mui/js/mui.min.js' 
 * 导致 在JS严格模式下不能使用报错如下：
 * ncaught TypeError: 'caller', 'callee', and 'arguments' 
 * properties may not be accessed on strict mode functions 
 * or the arguments objects for calls to them
 * 原因是webpack打包时，启用严格模式
 */

export default {
    data(){
        return {
			photoCategory:[{id:-1,title:'全部'},{id:1,title:'热点'},{id:2,title:'社会'},{id:3,title:'推荐'},{id:4,title:'动漫'}],
			imgList:[ {id:1,url:'http://www.baidu.com',imgUrl:'../../tmpImages/a1.jpg',title:"图片介绍表头",resume:"图片介绍"},
                {id:2,url:'http://www.qq.com',imgUrl:'../../tmpImages/a2.jpg',title:"图片介绍表头",resume:"图片介绍"},
                 {id:3,url:'http://www.baotao.com',imgUrl:'../../tmpImages/a3.jpg',title:"图片介绍表头",resume:"图片介绍"}]
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
	},
	created(){
		this.getCategory();
		this.getPhotoByCateId(0);
	},
	methods:{
		getCategory(){
			// this.$http.get('url').then(
			// 	result=>{
			// 		if(result.status==0){
			// 			this.photoCategory.unshift(result.message);
			// 		}else{
			// 			Toast('获取新闻列表失败');
			// 		}
			// 	}
			// );
		},
		getPhotoByCateId(cateId){
			// this.$http.get('url'+cateId).then(
			// 	res=>{
			// 		if(res.body.status===0){
			// 			this.photoCategory=res.body.message;
			// 		}
			// 	}
			// )
		}
	}    
}
</script>

<style lang="less" scoped>
*{
    //可去除滑动样式
    touch-action: pan-y;
}


.photo-list{
	list-style:none;
	margin:0;
	padding: 10px;
	padding-bottom: 0;
	li{
		background: #ccc;
		text-align: center;
		margin-bottom: 10px;
		// 相对定位配合 info的绝对定位实现图片信息悬浮层
		position: relative;

		box-shadow: 0,0,6px,#999;
		// 真正的图片
		img{
			width: 100%;

			vertical-align: middle;
		}
		// 懒加载图片
		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
		}

		.info{
			color:white;
			text-align: left;
			// 绝对定位 +bottom +rgb 实现悬浮透明图层
			position: absolute;
			bottom:0;
			background-color: rgb(0,0,0,0.4);
			//限定图片信息高度
			max-height: 60px;
			.info-title{
				font-size: 14px;
			}
			.info-body{
				font-size: 13px;
			}
		}
	}
}


</style>
