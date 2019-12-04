//index.js
//获取应用实例
import { LikeModel } from '../../models/like.js'
import { BlogModel } from '../../models/blog.js'
var blogmodel = new BlogModel()
var likemodle = new LikeModel()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    blog:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    blogmodel.getBlog(id)
      .then(res => {
        this.setData({ blog: res })
      })
  },

  // onLike: function (event) {
  //   let behavior = event.detail.behavior
  //   likemodle.like(behavior, this.data.blogDATA.id)
  // },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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