import {HTTP} from '../utils/http.js'

export class BlogModel extends HTTP{
  getBlog(sCallback){
    this.request({
      url: '/api/Blog/67',
      method: 'GET',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}