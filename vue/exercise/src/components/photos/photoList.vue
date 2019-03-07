<template>
    <div>
        <div class="top-content">
            <div id="slider" class="mui-slider ">
				<!-- 滚动条的高亮是组件内部自动实现的与vue无关 -->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">						
						<a :class="['mui-control-item',item.id == -1 ? 'mui-active':'']" v-for="item in photoCategory" :key=item.id>
							{{item.title}}
						</a>
					
					</div>
				</div>

			</div>
        </div>
        图片列表
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
			photoCategory:[{id:-1,title:'全部'},{id:1,title:'热点'},{id:2,title:'社会'},{id:3,title:'推荐'},{id:4,title:'动漫'}]
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
	},
	created(){
		this.getCategory();
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
		}
	}    
}
</script>

<style lang="less" scoped>
*{
    //可去除滑动样式
    touch-action: pan-y;
}
</style>
