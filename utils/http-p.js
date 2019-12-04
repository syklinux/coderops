// var config = require('../config.js')
import { config } from '../config.js'

const tips = {
  1: '抱歉，出现一个错误',
  1005: 'appkey 无效',
  3000: '不存在',
  500: '500错误，联系网站管理员'
}

export class HTTP {
  request(url,data={},method='GET') {
      return new Promise((resolve,reject)=>{
        this._request(url,resolve,reject,data,method)
    })
  }
  _request(url, resolve, reject,data = {}, method = 'GET') {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'applicarion/json',
        //  'appkey':config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString() // code 是数字，不是字符串，不能被startsWith判断
        if (code.startsWith('2')) {
          resolve(res.data)
        }
        else {
          reject()
          this._show_error(code)
        }
      },
      fail: (err) => {
        reject()
        this._show_error(code)
      }
    })
  }

  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}