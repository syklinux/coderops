import {HTTP} from '../utils/http-p.js'

export class BlogModel extends HTTP{
  getAllBlog(page){
    let _url = '/api/Blog/?page=' + page
    return this.request(_url)
  }

  getBlog(id) {
    let _url =  '/api/Blog/' + id
    return this.request(_url)
  }

  getNewFiveBlog() {
    let _url = '/api/FiveBlog'
    return this.request(_url)
  }

  getAllSort() {
    let _url = '/api/Sort'
    return this.request(_url)
  }

  getSort(id,page) {
    let _url = '/api/Blog/?sort=' + id + '&page=' + page
    return this.request(_url)
  }

  getsortdetail(id){
    let _url = '/api/Sort/' + id
    return this.request(_url)
  }

  getSearch(search,page){
    let _url = '/api/Blog/?search=' + search + '&page=' + page
    return this.request(_url)
  }
}