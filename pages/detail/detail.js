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
  }
})