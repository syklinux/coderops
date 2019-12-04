// pages/sortdetail.js
import { BlogModel } from '../../models/blog.js'

var blogmodel = new BlogModel()

Page({

  data: {
    page:1,
    img:"/pages/sortdetail/images/biaoqian.jpg",
    sortData:'',
    sortDetail:'',
    next:true,
    isRefreshing:false,
    hasMoreData:true,
    id:''
  },

  onReachBottom: function () {
    if (this.data.next != null) {
      this.getblog()
    } else {
      this.setData({ hasMoreData: false })
    }
  },

  onLoad: function (options) {
    let id = options.id
    blogmodel.getSort(id, this.data.page)
    .then(res =>{
      if(res.next){
        this.setData({ sortData: res.results,page:this.data.page + 1})
      }else{
        this.setData({ sortData: res.results, next: null, hasMoreData:false })
      }
      return blogmodel.getsortdetail(id)
    })
    .then(res =>{
      this.setData({ sortDetail: res,id:id })
    })
  },

  getblog: function () {
    blogmodel.getSort(this.data.id,this.data.page)
      .then(res => {
        if (res.next) {
          let _data = this.data.sortData.concat(res.results)
          this.setData({ sortData: _data, page: this.data.page + 1 })
        } else {
          let _data = this.data.sortData.concat(res.results)
          this.setData({ sortData: _data, next: null, hasMoreData:false })
        }
      })
  }

})