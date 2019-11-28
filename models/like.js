import { HTTP } from '../utils/http.js'

export class LikeModel extends HTTP{
  like(behavior, artID){
    let url = behavior == 'like'?'/like':'/like/cancel'
    this.request({
      url:url,
      method:'POST',
      data:{
        id:artID
      }
    })
  }
}