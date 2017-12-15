//app.js
// 服务器地址配置
let url_prefix = 'https://app.fast.wangziqing.cc'; // 线上环境
if (wx.getSystemInfoSync().platform == "devtools") {
  url_prefix = 'https://app.fast.wangziqing.cc'; // 开发环境
}
const Loading = require('utils/loading');
const oauth = require('utils/oauth');
oauth.url_prefix = url_prefix;
App({
  globalData: {
    openid: '',
    sessionkey: '',
    userInfo: null,
    IsAuth: false // 用户是否已经授权
  },
  onShow: function () {
    // 验证用户登陆状态是否已经过期
    wx.checkSession({
      success: () => {
        console.log('登陆未过期');
        // 验证是否已经授权
        wx.getSetting({
          success: (res) => {
            console.log(res)
            if (!res.authSetting['scope.userInfo']) {
              // 未授权
                // 未授权
                wx.showModal({
                  title: '提示',
                  content: '若不登陆授权获取用户信息，则无法使用该小程序；请在微信【发现】——【小程序】——删除【地推小程序】，重新搜索登陆授权即可使用',
                  mask: true,
                  duration: 2000,
                  success: (res) => {
                    wx.navigateBack({
                      delta: 1
                    })
                  }
                })
              this.globalData.IsAuth = false;
            } else {
              // 已授权
              wx.redirectTo({
                url: '/pages/list/list',
              })
              this.globalData.IsAuth = true;
            }
          }
        })
      },
      fail: () => {
        console.log('登陆已过期')
        // 重新登陆， 跳转到登陆页面
        wx.redirectTo({
          url: '/pages/index/index',
        })
      }
    })
    // 验证用户是否已经授权
  },
  // 调取接口方法封装
  request: function(obj, mark) {
    // obj为传入参数，mark为loading是否显示
    oauth.request(obj, mark);
  },
  login: function (cd, fail) {
    return oauth.login(cd, fail);
  },
  // 手机号验证
  validPhone: function (phone) {
    if (!/^1[0-9]{10}$/.test(phone)) {
      return false
    } else {
      return true
    }
  }
})