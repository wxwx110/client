<template>
    <div class="app-container" >
        <!-- header -->
        <mt-header fixed title="固定在顶部"></mt-header>
        <!-- router-view -->
		<transition>
			<router-view>

			</router-view>
		</transition>
		 

	
       

        <!-- tabbar -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
   
    </div>
</template>
<script>

</script>
 <style  scoped>


 .app-container{
	 /* 让子组件不要被top 和tabbar阻挡 */
     padding-top: 40px;
	 padding-bottom: 50px;
	/* 解决动画效果导致底部tabbar位移问题 */
	 overflow-x:hidden;
 }

 .v-enter{
	opacity: 0;
	/* 右边进入 */
	transform: translateX(100%);
 }
 .v-leave-to{
	 
	 opacity: 0;
	 /* 左边出去 */
	transform: translateX(-100%);
	/* 定位后解决动画移动期间位置会变化的问题 */
	 position: absolute;
 }
 .v-enter-active,
 .v-leave-active{
	 transition: all 0.5s ease;
 }


 /* 该类名解决js冲突导致按钮失效的问题 */

 /* a样式 */
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}
/* a样式 */
.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

/* a 内部span样式 一 */
.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
/* a 内部span样式 二 */
.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
/*解决图片列表界面顶部被其他控件覆盖的问题*/
.mint-header{
	z-index: 99;
}
 </style>
 

