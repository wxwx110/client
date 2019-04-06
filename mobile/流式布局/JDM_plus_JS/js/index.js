window.onload=function(){
    // 1、顶部搜索
    search();
    // 2、轮播图
    banner();

    //3、倒计时
    downTime();
};

var search=function(){
    // 1。默认固定顶部，透明背景再0-0.85之间变化  
  
    var searchBox=document.querySelector(".jd_search");
    var banner=document.querySelector('.jd_banner');
    var height=banner.offsetHeight;

    console.log('searchBox :', searchBox);
    console.log('banner :', height);
    // 监听页面滚动事件
    window.onscroll=function(){
        // 获取卷曲高度的办法有兼容性问题
        //console.log(document.body.scrollTop);
        // console.log('document.documentElement.scrollTop :', document.documentElement.scrollTop);
        // console.log('window.pageYoffset :', window.pageYoffset);
        //页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement。
        // 页面没有DTD，即没指定DOCTYPE时，使用document.body。
        var scrollTop=document.documentElement.scrollTop;
        console.log('scrollTop :', scrollTop);

        // 默认透明度
        var opacity=0;
        if(scrollTop<height){
             //2、当页面滚动的时候-随着页面卷曲的高度变打，透明度变大
             opacity=scrollTop/height *0.85;
        }else{
              // 3、当页面滚动超过某一个高度时透明度不变
              opacity=0.85;
        }
      
        // 注意通过style.background进行样式赋值时候，最后不能跟分号
        //searchBox.style.background='rgba(201,21,35,'+opacity+');'
        searchBox.style.background='rgba(201,21,35,'+opacity+')';  
    
    }
}

var banner=function(){
    //1、自动轮播无缝   ----定时器，动画CSS3 过度
    //2、自动轮播时小点随动 ---索引切换
    //3、触屏后停止自动轮播 ---touch滑动
    //4、轮播随触屏手指左右滑动 touch事件
    //5、滑动结束的时候，如果滑动距离不超过屏幕的1/3 吸附回去  并附带过度效果
    //6、滑动结束的时候，如果滑动的距离超过屏幕的1/3，根据滑动的方向切换图片

    // 轮播图
    var banner=document.querySelector('.jd_banner');
     //banner的租用
    var width=banner.offsetWidth;
    // 图片容器
    var imageBox=banner.querySelector('ul:first-child');
    // 点容器 
    var pointBox=banner.querySelector('ul:last-child');
    // 获取所有的点
    var points=pointBox.querySelectorAll('li');

    var addTransition=function(){
        imageBox.style.transition='all 0.2s';        
        imageBox.style.webkitTransition='all 0.2s';// 兼容处理
    }
    var removeTransition=function(){
        imageBox.style.transition='none';
        imageBox.style.webkitTransition='none';//兼容
    }
    var setTranslateX=function(translateX){
        imageBox.style.transform='translateX('+translateX+'px)';
        imageBox.style.webkitTransform='translateX('+translateX+'px)';//兼容处理
    }

    //1--- 轮播图的核心index;
    //图片序号
    var index=1;
    var timer=setInterval(function() {
        index++;
        // 动画添加对象是imageBox
        // 加过度
        addTransition();
        // 做位移
        //-index*width(向左移动index倍的banner宽度)
         setTranslateX(-index*width);
        

    }, 3000);

   
    // 需要等最后一张动画结束后判断是否瞬间定位到第一张图，才能保证无缝轮播
    //每次动画过度结束都会执行该操作
    imageBox.addEventListener('transitionend',function(){
         // 自动滚动时的无缝（图片默认从右到左）
        // 练头尾总共10张图，实际只有8张图
        //定位到最后一张图时
        if(index>=9){
            index=1;
            // 瞬间定位、清过度
            removeTransition();
            // 做位移         
            setTranslateX(-index*width);           
        }else if(index<=0){
             // 手指左右滑动时的无缝（图片可左可右）
            index=8;
            // 瞬间定位、清过度
            removeTransition();
            // 做位移
            setTranslateX(-index*width);
        }
           
        //console.log('transitionend')

        // 根据索引设置点
        // 在这个位置调用由于前面得业务逻辑导致index得取值范围是1-8
        setPoint(index-1);
    });
    // 2---设置小点跟踪
    var setPoint=function(index){
        for (let index = 0; index < points.length; index++) {
            let element = points[index];
            element.classList.remove('now');            
        }
        points[index].classList.add('now');
    }

    // 3---滑动处理
    var startX=0;
    var distanceX=0;
    var isMove=false;
    imageBox.addEventListener('touchstart',function(e){
        // 手指触摸后清除定时器
        clearInterval(timer);
       
        //记录其实位置X坐标
         startX=e.touches[0].clientX;
    });

    imageBox.addEventListener('touchmove',function(e){
        //增加程序严谨性
        isMove=true;
        // 记录滑动过程中得X坐标
        var moveX=e.touches[0].clientX;
        // 计算位移--有正负方向
        distanceX=moveX-startX;
        // 记算目标元素得位移
        //元素将要定位=当前定位+手指移动的距离
        var translatex=-index*width+distanceX;

        // 清除过度防止出现滑动延迟
        removeTransition();
        // 滑动-》元素随手指移动
        setTranslateX(translatex);
    });

    imageBox.addEventListener('touchend',function(e){
        if(isMove){
            // 滑动结束处理
            // 要使用移动的距离
            if(Math.abs(distanceX)<width/3){
                // 如果移动距离没超过三分之一
                // 媳妇回去
                addTransition();
                setTranslateX(-index*width);
            }else{
                //超过三分之一后切换
                
                if(distanceX<0){
                    // 上一张
                    index--;

                }else{
                    // 下一张
                    index++;
                }
                // 根据index进行动画移动
                addTransition();
                setTranslateX(-index*width);
            }
        }
        // 重要参数重置
        startX=distanceX=0;
        isMove=false;
        // 启动定时器
        clearInterval(timer);
        timer==setInterval(function() {
            index++;
            // 动画添加对象是imageBox
            // 加过度
            addTransition();
            // 做位移
            //-index*width(向左移动index倍的banner宽度)
             setTranslateX(-index*width);            
    
        }, 3000);
        


    });

 

}
// 倒计时
// 正常开发来说，时间需要统一调度处理不能由客户端 自行new
var downTime=function(){
    // 倒计时的时间
    var time=2*60*60 ; //2小时

    var timeSpans=document.querySelector('.time').querySelectorAll('span');
    // 每一秒更新显示时间
    var timer=setInterval(function() {
        time--;
        // 格式化time;
        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=Math.floor(time%60);     
       
        timeSpans[0].innerHTML=Math.floor(h/10);
       
        timeSpans[1].innerHTML=h%10;        
        
      
        timeSpans[3].innerHTML=Math.floor(m/10);
        timeSpans[4].innerHTML=m%10;

        timeSpans[6].innerHTML=Math.floor(s/10);
        timeSpans[7].innerHTML=s%10;

        if(time<=0){
            clearInterval(timer);
        }

    }, 1000);

}