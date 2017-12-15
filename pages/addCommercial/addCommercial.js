const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    logo: '',
    managerName: '',
    managerPhone: ''
  },
  // 获取input输入框的值
  getInputVal: function (e) {
    this.setData({
      [e.target.id]: e.detail.value
    })
  },
  // 提交
  formSubmit: function () {
    let warn = ''; // 警告提示信息
    let flag = true; // 是否需要弹窗
    if(this.data.name == '') {
      warn = '商户名称不能为空~';
    } else if(this.data.managerName == '') {
      warn = '商户管理员姓名不能为空~';
    } else if (this.data.managerPhone == '') {
      warn = '商户管理员手机号不能为空~';
    } else if (!app.validPhone(this.data.managerPhone)) {
      warn = '请填入合法的商户管理员手机号~';
    } else {
      // 信息都填写完整
      // 备份信息
      wx.setStorage({
        key: "commerName",
        data: this.data.name
      })
      wx.setStorage({
        key: "commerManagerName",
        data: this.data.name
      })
      wx.setStorage({
        key: "commerLogo",
        data: this.data.logo
      })
      wx.setStorage({
        key: "commerManagerPhone",
        data: this.data.managerPhone
      })
      flag = false;
      let rangeNum = Math.random() * 10;
      if (rangeNum >= 5) {
        // 新增成功
        wx.redirectTo({
          url: '../addResult/addResult?name=' + this.data.name + '&result=1&type=0',
        })
      } else {
        // 新增失败
        wx.redirectTo({
          url: '../addResult/addResult?name=' + this.data.name + '&result=0&type=0',
        })
      }
    }
    if (flag) {
      wx.showModal({
        title: '提示',
        content: warn
      }) 
    }
  },
  // 重置
  formReset: function() {
    this.setData({
      name: '',
      logo: '',
      managerName: '',
      managerPhone: ''
    })
  },
  // Logo上传
  upFile: function() {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，后期需改动 todo
          filePath: tempFilePaths[0],
          name: 'logo',
          formData: {
            // 'user': 'test'
          },
          success: (res) => {
            var data = res.data
            //do something
          },
          fail: (res) => {
            console.log(res);
            console.log('上传失败：' + res)
          }
        })
      }
    })
  }
  
})