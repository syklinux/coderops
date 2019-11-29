// components/blog/movie/index.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:String,
    content:{
      type: String,
      observer: function (newval,oldval){
        // let data = app.towxml.toJson(newval, 'markdown');
        // console.log(data)
        // this.setData({_content:data})
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    content:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
