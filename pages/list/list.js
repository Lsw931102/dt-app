const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    IsAuth: app.globalData.IsAuth, // 用户是否授权
    storeLists: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStoreList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  // 新增商户
  addCommercial: function () {
    wx.navigateTo({
      url: '../addCommercial/addCommercial',
    })
  },
  // 获取商户列表信息
  getStoreList: function () {
    // app.request({
    // url: '',
    // data: {},
    // method: 'GET',
    // success: (res) => {
    this.setData({
      storeLists: [
        { "id": 0, "name": '耗儿鱼', "state": '运营中', "num": 5 },
        { "id": 1, "name": '梁山鸡', "state": '已过期', "num": 20 },
        { "id": 2, "name": '霸道', "state": '运营中', "num": 2 },
        { "id": 3, "name": '大坪店', "state": '运营中', "num": 0 },
      ]
    })
    // }
    // })
  }
})