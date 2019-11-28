//index.js
//获取应用实例
import { BlogModel } from '../../models/blog.js'
import { LikeModel } from '../../models/like.js'
var blogmodel = new BlogModel()
var likemodle = new LikeModel()
const app = getApp()

Page({
  data: {
    count: 90,
    blogDATA:null,
    blogBOBY:null,
    navi:true,
    blogSort:null
  },  
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    blogmodel.getBlog(67,(res) => {
      this.setData({
        blogDATA: res
      })
    }),
    blogmodel.getAllSort((res) => {
      this.setData({
        blogSort:res
      })
    })
  },
  onLike: function(event){
    let behavior = event.detail.behavior
    likemodle.like(behavior,this.data.blogDATA.id)
  }
})
