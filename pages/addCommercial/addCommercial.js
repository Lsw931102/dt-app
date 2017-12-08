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
    } else {
      // 信息都填写完整
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