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
      
      
        searchBox.style.background='rgba(201,21,35,'+opacity+')'
    
      // searchBox.style.background='red';
    }
}

var banner=function(){

}
var downTime=function(){

}