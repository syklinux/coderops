// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type: Boolean,
      value: true,
      observer:function(){

      }
    },
    count:{
      type: Number,
      value: 10,
    },
    title:{
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    YesSrc: "images/like.png",
    NoSrc: "images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like
      let count = this.properties.count
      // 计算逻辑
      count = like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      })
    }

  }
})
