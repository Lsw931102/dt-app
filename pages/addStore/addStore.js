Page({

  /**
   * 页面的初始数据
   */
  data: {
    belongStore: '',
    storeName: '',
    storePhone: '',
    address: '',
    category: '',
    picture: '',
    licence: '',
    safetyLicence: '',
    shoperPhone: '',
    shoperName: ''
  },
  // 获取input输入框的值
  getInputVal: function(e) {
    this.setData({
      [e.target.id]: e.detail.value
    })
  },
  // 提交
  formSubmit: function() {
    let warn = ''; // 警告提示信息
    let flag = true; // 是否需要弹窗
    if (this.data.belongStore == '') {
      warn = '所属商户不能为空~';
    } else if (this.data.storeName == '') {
      warn = '门店名称不能为空~';
    } else if (this.data.storePhone == '') {
      warn = '门店电话不能为空~';
    } else if (this.data.address == '') {
      warn = '门店地址不能为空~';
    } else if (this.data.picture == '') {
      warn = '店招照片不能为空~';
    } else if (this.data.licence == '') {
      warn = '营业执照不能为空~';
    } else if (this.data.safetyLicence == '') {
      warn = '食品安全许可不能为空~';
    } else if (this.data.shoperPhone == '') {
      warn = '店长手机号不能为空~';
    } else if (this.data.shoperName == '') {
      warn = '店长姓名不能为空~';
    } else {
      flag = false;
      let rangeNum = Math.random() * 10;
      if (rangeNum >= 5) {
        // 新增成功
        wx.redirectTo({
          url: '../addResult/addResult?name=' + this.data.storeName + 'result=1&type=1',
        })

      } else {
        // 新增失败
        wx.redirectTo({
          url: '../addResult/addResult?name=' + this.data.storeName + '&result=0&type=1',
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})