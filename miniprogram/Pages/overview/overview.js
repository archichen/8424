// miniprogram/Pages/overview/overview.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canGraduate: true,
    comments: [
      "不能正常毕业",
      "可以正常毕业"
    ]
  },

  loadScorePage: function(e) {
    wx.navigateTo({
      url: '../score/score',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      studentInfo: app.globalData.studentInfo,
      canGraduate: app.globalData.studentInfo.gpa >= 2.0 ? true: false
    });
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