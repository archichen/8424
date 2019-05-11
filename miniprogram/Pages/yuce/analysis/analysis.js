// miniprogram/Pages/yuce/analysis/analysis.js
let type = 'rd';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let d = [];
    if (options.type === "ky") {
      app.globalData.yuce['ky'].forEach(item => {
        d.push({ name: item['schooltype'], courses: item['courses']});
      });
    } else {
      app.globalData.yuce['rd'].forEach(item => {
        d.push({ name: '入党推优', courses: item['courses'] });
      });
    }
    this.setData({
      _data: d
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