<template>
    <div>
        <div class="top-content">
            <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
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
			photoCategory:[{id:-1,title:'全部'}]
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
