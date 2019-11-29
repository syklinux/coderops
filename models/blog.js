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
  getAllBlog(page,sCallback) {
    this.request({
      url: '/api/Blog/?page=' + page,
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
  getSortBlog(page,id,sCallback) {
    this.request({
      url: '/api/Blog/?page=' + page + '&sort=' + id,
      method: 'GET',
      success: (res) => {
        sCallback(res)
      }
    })
  }

  getNewFiveBlog(sCallback) {
    this.request({
      url: '/api/FiveBlog/',
      method: 'GET',
      success: (res) => {
        sCallback(res)
      }
    })
  }

}