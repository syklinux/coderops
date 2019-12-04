// pages/search/index.js
import { BlogModel } from '../../models/blog.js'

var blogmodel = new BlogModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/pages/sortdetail/images/biaoqian.jpg",
    searchData:'',
    next:true,
    page:1,
    isRefreshing: false,
    hasMoreData: true,
    title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let search = options.search
    blogmodel.getSearch(search,this.data.page)
    .then(res =>{
      if(res.next){
        this.setData({ searchData: res.results, page: this.data.page + 1, title: search})
      }else{
        this.setData({ searchData: res.results, next: null, title: search, hasMoreData:false})
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.next != null) {
      this.getblog()
    } else {
      this.setData({ hasMoreData: false })
    }
  },

  getblog: function () {
    blogmodel.getSearch(this.data.title, this.data.page)
      .then(res => {
        if (res.next) {
          let _data = this.data.searchData.concat(res.results)
          this.setData({ searchData: _data, page: this.data.page + 1 })
        } else {
          let _data = this.data.searchData.concat(res.results)
          this.setData({ searchData: _data, next: null, hasMoreData: false })
        }
      })
  }

})