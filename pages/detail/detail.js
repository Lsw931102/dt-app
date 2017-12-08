// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '', // 门店名称
    lists: [],
    allList: [[{ "name": '大坪店', "contact": '周瑜', "phone": '1323234324' }, { "name": '南坪店', "contact": '黄盖', "phone": '1323234724' },], [{ "name": '大坪店', "contact": '关羽', "phone": '1323234324' }, { "name": '南坪店', "contact": '张飞', "phone": '1323234724' },]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let list = [];
    if(options&&options.id) {
      // 根据所传的id请求对应的门店列表信息
      list = this.data.allList[parseInt(options.id)];
    } else {
      list = [];
    }
    this.setData({
      name: options.name,
      lists: list
    })
  },
  // 新增门店
  addStore:function() {
    wx.navigateTo({
      url: '../addStore/addStore',
    })
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