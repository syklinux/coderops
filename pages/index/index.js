//index.js
//获取应用实例
import { BlogModel } from '../../models/blog.js'
var blog = new BlogModel()
const app = getApp()

Page({
  data: {
    count: 90
  },  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    blog.getBlog((res)=>{
      this.setData({
        blogDATA:res
      })
    })


    // this.fetchData()
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  // fetchData(){
  //   var that = this;
  //   wx.request({
  //     url: 'https://www.coderops.net/api/Blog/',
  //     method: 'GET',
  //     data: { page: that.data.page, search: that.data.search },
  //     success: (res) => {
  //       that.setData({ blog: res.data.results, count: res.data.count})
  //     }
  //   })
  // }
})
