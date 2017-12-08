Page({

  /**
   * 页面的初始数据
   */
  data: {
    title1: '',
    titile2: '',
    btnText: '',
    addType: '' // 新增的是商户还是门店,0为商户，1为门店
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.data.addType = options.type;
    if (options.type==1) {
      // 添加门店
      if(options.result==1){
        // 添加成功
        this.setData({
          title1: '已成功添加门店',
          title2: options.name,
          btnText: '继续添加门店'
        })
      }else {
        // 添加失败
        this.setData({
          title1: '添加失败',
          title2: '',
          btnText: '重新添加门店'
        })
      }
    } else {
      // 添加商户
      if (options.result == 1) {
        // 添加成功
        this.setData({
          title1: '已成功添加商户',
          title2: options.name,
          btnText: '添加商户'
        })
      } else {
        // 添加失败
        this.setData({
          title1: '添加失败',
          title2: '',
          btnText: '重新添加商户'
        })
      }
    }
  },

  // 重新/继续添加
  addAgain: function () {
    if (this.data.addType == 0) {
      // 添加商户
      wx.redirectTo({
        url: '../addCommercial/addCommercial',
      })
    } else {
      // 添加门店
      wx.redirectTo({
        url: '../addStore/addStore',
      })
    }
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