// miniprogram/Pages/authorized/authorized.js

const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    wxAuthorized: false,
  },

  userAuthorized: function ({ detail }) {
    if (detail.errMsg !== 'getUserInfo:fail auth deny') {
      this.setData({
        wxAuthorized: true
      });
      app.globalData.userInfo = detail;
    } else {
      wx.showToast({
        title: '请重新点击授权',
        image: 'assets/failed.svg'
      })
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo'] === true) {
          this.setData({
            wxAuthorized: true
          });
        }
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})