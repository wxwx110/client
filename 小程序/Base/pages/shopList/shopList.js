// pages/shopList/shopList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopList:[],
        pageIndex:1,
        pageSize:10,
        cateId:0
    },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 通过options接受加载页面时的 参数
        console.log(options);
        this.data.cateId=options.cate;
        console.log(this.data.cateId);
        this.loadMore();
        wx.setNavigationBarTitle({
            title: options.title || '店铺'
        });
    },
    loadMore(pageIndex,pageSize){
        wx.request({
            url: 'https://locally.uieee.com/categories/' + this.data.cateId + '/shops',
            data: {
                _limit: pageSize||this.data.pageSize,
                _page: pageIndex||this.data.pageIndex
            },
            success: (res) => {
                this.setData({
                    shopList: this.data.shopList.concat(res.data)
                })
            }
        });
    },
    /**
       * 页面相关事件处理函数--监听用户下拉动作
       * window 中配置"enablePullDownRefresh": true  // 请注意是true，不是"true"字符串，
                               // 部分开发者发现设置了还是无效，
                               // 可能是因为设置的"enablePullDownRefresh": "true"
       */
    onPullDownRefresh: function () {
      console.log('111');
    },

    /**
    * 页面上拉触底事件的处理函数
        每次滚动到页底就会触发

  */
    onReachBottom: function () {

        this.loadMore(++this.data.pageIndex,this.data.pageSize);
      
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    

 

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})