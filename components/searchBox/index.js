Component({
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表

   */
  methods: {
    //搜索框右侧按钮事件
    addhandle(res){
      let search = res.detail
      this.triggerEvent('search', {
        behavior: search
      }, {})
    }
  }
})