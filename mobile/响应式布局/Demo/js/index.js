$(function(){
    // 同时需要兼容pc端和移动端时JQUERY还是 不错的选择之一
    // 静态轮播图的缺点在于图片不能动态加载，前端需要加载冗余图片
    // 轮播图
    // 1.获取轮播图数据   ajax
    // 2.根据数据动态渲染，根据设备动态渲染 屏幕宽度
    // 2.1 准备i数据
    // 2.2 把数据转换成html格式字符串（动态创建元素，字符串拼接 ,模板引擎<推荐artTemplate,>）
    // 2.3 把字符串渲染到页面
    // 3.测试功能

    // UI框架 bootstrap,妹子UI ，jQueryUI ,easyUI jqueryMobile,mui,framework7 
    // 移动端 UI框架 bootstrap,jqueryMobile,mui,framework7
    // 模板引擎 artTemplate,handlebars,mustache,baiduTemplate,velocity,underscore
    banner();
});

// 获取轮播图数据
var banner;
banner = function () {

    var getDataAndRender = function () {

        if (window.data) {
            render(window.data);
        } else {
            $.ajax({
                type: 'get',
                url: 'js/data.json',
                dataType: 'json',
                data: '',
                success: function (data) {
                    window.data = data;
                    render(window.data);
                }
            });
        }

    }
    var render = function (data) {

        // 根据数据动态渲染
        var isMobile = $(window).width() < 768;

        // 模板引擎渲染界面
        // <!-- // <% console.log(list)%>模板引擎内不可使用外部变量打印会报错 -->
        // <!-- <% console.log(list)%> -->
        var pointHtml = template('pointTemplate', {list: data});
        var imageHtml = template('imageTemplate', {list: data, isMobile: isMobile});

        // 渲染页面
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);

    }
    getDataAndRender();
//   测试功能
    $(window).on('resize', function () {
        getDataAndRender();
        // 通过js主动触发某一个事件
    }).trigger('resize');
    //  移动手势
    let startX=0;
    let distanceX=0;
    let isMove=false;
    $('.wjs_banner').on('touchstart', function (e) {
        /* originalEvent 是封装后的 原装event*/
        console.log(e);
        startX=e.originalEvent.touches[0].clientX;
        console.log(startX);
    }).on('touchmove', function (e) {
        let moveX=e.originalEvent.touches[0].clientX;
        distanceX=moveX-startX;
        isMove=true;
    }).on('touchend', function (e) {
        if(isMove && Math.abs(distanceX)>50){

            if(distanceX<0){
                //左滑手势
                $('.carousel').carousel('next');
            }else{
            //  右滑手势
                $('.carousel').carousel('prev');
            }
        }
        startX=0;
        distanceX=0;
        isMove=0;
    })
};