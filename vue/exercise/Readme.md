##制作首页app组件
1. 完成header 区，使用mint-UI Header 组件
2. 制作底部Tabbar 区，使用mui tabbar.html
    +需要通过mui的Demo查找可能需要拷贝扩展CSS和字体文件TFF
3. 在中间区域方式一个router-view展示路由组件 


## 改造tabbar 为 router-link

## 设置路由激活对象高亮

## 点击tabbar中的连接展示对应的路由组件

## 制作轮播图布局

## 加载轮播图图片
1. vue-resource ajax获取数据
2. 用v-for渲染 ，注意组件使用v-for时必须定义key

## 改造九宫格区域样式

## 改造 新闻资讯 路由和连接

## 新增资讯页面制作 --MUI media-list
1. 绘制界面
2. 使用vue-resource 获取数据
3. 展示页面渲染
4. 用过滤器拦截处理时间格式

## 实现新闻详情
1. 把列表中的每一项改为router-link,同时跳转时提供消息id
2. 创建新闻详情主键页面
3. 在路由模块中对应路由和组件

## 单独封装一个评论子组件
1. 创建单独的子组件
2. 在需要使用comment的组件页中先导入组件
 + 'import comment from '/'
3. 在父组件中 使用components属性注册导入的组件
4. 引入子组件

## 获取所有评论数据显示到页面

## 实现点击加载更多
1. 绑定点击事件
2. 事件中请求下一页数据 pageIndex++ 再次调用获取最新的一页数据
3. 注意在加载新数据时要contact保留老数据

## 发表评论
1. 文本框做双向数据绑定
2. 增加发表事件
3. 校验用户录入是否合法
4. 提交数据到服务器
5. 刷新评论列表

## 图片列表
1. 改造九宫格图片按钮增加路由跳转
2. 跳转到路由列表
3. 增加图片列表组件

## 绘制图片你列表
1. 顶部滑动条
2. 底部图片列表

## 制作顶部滑动条的坑
1. 需要使用 MUI tab-top-webview-main 组件
2. 需要取消 mui-fullscreen 样式
3. 滑动需要使用JS初始化，需要引入mui的JS
 + 导入mui JS
 + 调用官方scroll部分的介绍进行初始化
 ```
 mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
 ```
4. 初始化滑动条，导致报错
```
/**
 * import mui from '../../lib/mui/js/mui.min.js' 
 * 导致 在JS严格模式下不能使用报错如下：
 * ncaught TypeError: 'caller', 'callee', and 'arguments' 
 * properties may not be accessed on strict mode functions 
 * or the arguments objects for calls to them
 * 原因是webpack打包时，启用严格模式而mui.js中用到了'caller', 'callee', and 'arguments' 
 * 导致冲突
 */
```
 + 解决方案: 1. 把webpack 打包时的严格模式取消
             使用 babel-plugin-transform-remove-strict-mode插件 需要node-sass 蛋疼
            2. 在webpack打包时忽略需要打包的JS文件（但是注意日后部署的问题）
            ```
            "plugins": [
                "ignore": ["./lib/mui/js/mui.min.js"]
            ]

            ```
5. 刚进入照片列表页面滑动条无法正常工作，原始是初始化滑动条的js必须要等待元素加载完成后才能初始化即放到mounted生命周期函数中

6. 由于 mui内部存在一定bug导致 tabbar下的按钮在加载了mui.min.js后 与样式mui-tab-item 样式类冲突 导致 按钮失效。
+ 解决方案：查看 mui-tab-item 样式,以及 对应挂载元素内部样式，复制后，重写，重命名解决冲突问题

7. 获取所图片分类并渲染列表：注意CSS效果渲染