//index.js
//获取应用实例
import { BlogModel } from '../../models/blog.js'

var blogmodel = new BlogModel()

const app = getApp()

Page({
  data: {
    blogDATA:null,
    page:1,
    newfiveDATA:null
  },
  onLoad: function () {
    blogmodel.getNewFiveBlog((res) => {
      this.setData({ newfiveDATA: res })
    }),
    blogmodel.getAllBlog(this.data.page, (res) => {
      this.setData({ blogDATA:res.results })
      })
  },
  
  // changeTabs: function(event){
  //   let behavior = event.detail.behavior
  //   let page = this.data.page
  //   if(behavior != 0){
  //     console.log(page)
  //     blogmodel.getSortBlog(page,behavior,(res) => {
  //       console.log(res)
  //     })
  //   }
  //   else{
  //     blogmodel.getAllBlog(page,(res) => {
  //       console.log(res)
  //     })
  //   }
  // }
})
