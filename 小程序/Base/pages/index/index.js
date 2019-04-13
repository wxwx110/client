//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      listMessage: ['美食','精品'],
      ifcheck:true,
      silderList:[],
      catalog:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //    wx 内置请求对象
    // wx.request({
    //     url: "https://locally.uieee.com/slides",

    //     // data:,
    //     header:{},
    //     // get需要大写，注意
    //     method :"GET",
    //     dataType:"json",
    //     success:function(res){
    //         console.log(res);
    //     },
    //     fail:function(res){
    //         console.log(res)
    //     },
    //     // 成功失败都会执行
    //     complete:function(){

    //         console.log(123)
    //     }


    // })
      wx.request({
          url: "https://locally.uieee.com/slides",
       
          success:  (res)=> {
            //   注意这个方式只更新数据不刷新视图
            //   this.data.silderList=res.data;
            //   console.log(this.data.silderList);
            // WX提供方法即更新视图也跟新data
            this.setData({
                silderList:res.data
            })
          },   
      });
      wx.request({
          url: 'https://locally.uieee.com/categories',
          success:(res)=>{
            
              this.setData({
                  catalog:res.data
              })
          }
      })


     
    

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
