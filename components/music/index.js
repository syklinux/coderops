// components/music/index.js
// 导入组件
import { blogBeh} from '../blog-beh.js'
Component({
  /**
   * 组件的属性列表
   */

  // 继承组件
  behaviors:[blogBeh],
  //多继承
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:"images/waiting.png",
    playSrc:"images/playing.png",
    img:"images/goodbye.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
