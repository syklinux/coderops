import {HTTP} from '../utils/http.js'

export class BlogModel extends HTTP{
  getBlog(id,sCallback){
    this.request({
      url: '/api/Blog/' + id,
      method: 'GET',
      success: (res) => {
        sCallback(res)
      }
    })
  }
  getAllBlog(sCallback) {
    this.request({
      url: '/api/Blog/',
      method: 'GET',
      success: (res) => {
        sCallback(res)
      }
    })
  }
  getAllSort(sCallback){
    this.request({
      url: '/api/Sort/',
      method: 'GET',
      success: (res) => {
        sCallback(res)
      }
    })
  }
  getSortBlog(id,sCallback) {
    this.request({
      url: '/api/Blog/?sort=' + id,
      method: 'GET',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}