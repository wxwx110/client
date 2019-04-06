window.onload=()=>{
    // 区域滚动效果
    // 条件：一个容器装着另一个容器html结构
    // 大容器jd_cateLeft;
    // 产生滑动效果的条件，子容器大于父容器
    new IScroll(document.querySelector(".jd_cateLeft") ,{
        scrollx:false,
        scrollY:true
        }   
    );
    new IScroll(document.querySelector(".jd_cateRight") ,{
        scrollx:false,
        scrollY:true
        }   
    );
}