$(function(){
/* 手势切换轮播图*/
//    1、自动轮播无缝
//    2、点随着变化
//    3、完成手势切换
    const $banner=$('.sn_banner');
    let width=$banner.width();

    console.log(width);

    let $imageBox=$banner.find('ul:first');
    let $pointBox=$banner.find('ul:last');
    let $points=$pointBox.find('li');
    let index=1;

    let animateFunc=()=>{
      
        $imageBox.animate({transform:'translateX('+(-index*width)+'px)'},200,()=>{
            // 动画执行完成回调
            if(index>=9){
                index=1;
                // CSS是瞬间完成属性 animate是增加过度动画
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }else if(index<=0){
                index=8;
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }
            // index 1-8
            // 点变化
            $points.removeClass('now').eq(index-1).addClass('now');

        });
    };

    // 自动轮播无缝

   
    let timer=setInterval(()=>{
        index++;
        animateFunc();
        }, 2000);

        // 手势切换 android4.0可能有兼容问题
        // 左划手势 下一张
        $banner.on('swipLeft',function(){
            index++;
            animateFunc();
        });
        // 右滑 上一张
        $banner.on('swipRight',function(){
            index--;
            animateFunc();
        });


});