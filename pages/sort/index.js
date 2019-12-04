//index.js
//获取应用实例

import { BlogModel } from '../../models/blog.js'

var blogmodel = new BlogModel()

Page({
  data: {
    sort:''
  },

  onLoad: function () {
    blogmodel.getAllSort()
    .then( res =>{
      this.setData({
        sort:res
      })
    })
  },

  sortview:function(e){
    var index = parseInt(e.currentTarget.dataset.bindex)
    wx.navigateTo({
      url: '/pages/sortdetail/index?id=' + index,
    })
  }

})
