// components/blog/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:String,
    content:String,
    title:String,
    sort:String,
    views:Number,
    user:String,
    time:{
      type:String,
      observer: function (newVal, oldVal, changePath) {
        let val = newVal.split('T')[0]
        this.setData({
          _time: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _time: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
