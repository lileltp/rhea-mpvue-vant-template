import axios from '../../node_modules/axios/dist/axios'
axios.defaults.adapter = function (config) {
  let baseURL = 'https://api.rushimei.com'
  // 发交易之前显示加载中
  wx.showLoading({
    title: '拼命加载中...'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      url: baseURL + config.url,
      data: config.params,
      success: res => {
        if (res.statusCode < 200 || res.statusCode > 300) {
          return reject(res.data || {})
        }
        return resolve(res.data || {})
      },
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}
export default axios
