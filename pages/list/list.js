Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeLists: [
      { "id": 0, "name": '耗儿鱼', "state": '运营中',"num":5 },
      { "id": 1, "name": '梁山鸡', "state": '已过期', "num": 20 },
      { "id": 2, "name": '霸道', "state": '运营中', "num": 2 },
      { "id": 3, "name": '大坪店', "state": '运营中', "num": 0 },
    ]
  },
  // 新增商户
  addCommercial: function() {
    wx.navigateTo({
      url: '../addCommercial/addCommercial',
    })
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