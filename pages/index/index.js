//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    phone: '',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    
  },
  unLogin: function() {
    wx.navigateTo({
      url: '../unLogin/unLogin',
    })
  },
  // 获取input输入框的值
  getInputVal: function (e) {
    this.setData({
      [e.target.id]: e.detail.value
    })
  },
  // 用户绑定
  formSubmit: function() {
    console.log(app.validPhone(this.data.phone))
    if(this.data.phone == '') {
      wx.showModal({
        title: '提示',
        content: '手机号为必填信息~~'
      })
    } else if (!app.validPhone(this.data.phone)) {
      wx.showModal({
        title: '提示',
        content: '请填写正确的手机号码~~'
      })
    } else {
      // 登录
      app.login(res => {
        console.log(res)
      })
      // wx.login({
      //   success: res => {
      //     // 获取openid
      //     let code = res.code;
      //     // 传code值给后端获取openid等信息
      //     // app.request({
      //     //   url: '',
      //     //   data: {},
      //     //   method: 'GET',
      //     //   success: (res) => {
      //     //     console.log(res);
          wx.redirectTo({
            url: '../list/list',
          })
      //     //   }
      //     // })
      //   }
      // })
    }
  }
})
