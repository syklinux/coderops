//index.js
//获取应用实例
import { BlogModel } from '../../models/blog.js'

var blogmodel = new BlogModel()


Page({
  data: {
    blogDATA:{},
    page:1,
    next:true,
    newfiveDATA:null,
    hasMoreData: true,
    isRefreshing: false,
  },

  onLoad: function () {

    const fiveblog = blogmodel.getNewFiveBlog()
    const allblog = blogmodel.getAllBlog(this.data.page)
    // 合并请求
    Promise.all([fiveblog,allblog]).then((res) => {
      this.setData({ newfiveDATA: res[0], blogDATA: res[1].results, page: this.data.page + 1})
    })

  },
  /**
   * 页面相关事件处理函数-上滑加载
   */
  onReachBottom: function () {
    if (this.data.next != null) {
      this.getblog()
    }else{
      this.setData({ hasMoreData: false })
    }
  },

  onsearch: function (event){
    let search = event.detail.behavior
    if(search){
      wx.navigateTo({
        url: '/pages/search/index?search=' + search,
      })
    }else{
      return
    }
  },

  // 下拉刷新
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh();
    this.setData({
      isRefreshing:true,
      hasMoreData:false,
      next:null
    })
    const fiveblog = blogmodel.getNewFiveBlog()
    const allblog = blogmodel.getAllBlog(1)

    // 合并请求
    Promise.all([fiveblog, allblog]).then((res) => {
      this.setData({ newfiveDATA: res[0], blogDATA: res[1].results, page: 2 })
    })
    this.setData({
      isRefreshing: false,
      hasMoreData:true,
      next:true
    })

  },

  getblog:function(){
    blogmodel.getAllBlog(this.data.page)
      .then(res => {
        if(res.next){
          let _data = this.data.blogDATA.concat(res.results)
          this.setData({ blogDATA: _data, page: this.data.page + 1 })
        }else{
          let _data = this.data.blogDATA.concat(res.results)
          this.setData({ blogDATA: _data, next:null})
        }
      })
  }
})