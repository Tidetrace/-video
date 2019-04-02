Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    adShow: false,
    view_counts:109,
    time: "2005",
    title: "喜洋洋与灰太狼",
    mgs: "《喜羊羊与灰太狼》是由广东原创动力文化传播有限公司制作的原创动画系列作品，截止2016年，共完结TV动画15部，动画电影9部，其中真人版动画电影2部。",
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    that.setData({
      id : options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
