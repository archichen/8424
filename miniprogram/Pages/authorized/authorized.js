// miniprogram/Pages/authorized/authorized.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    wxAuthorized: false,
    student_id: null,
    password: null
  },

  userAuthorized: function ({ detail }) {
    if (detail.errMsg !== 'getUserInfo:fail auth deny') {
      this.setData({
        wxAuthorized: true
      });
      app.globalData.userInfo = detail;
      console.log(detail)
    } else {
      wx.showToast({
        title: '请重新点击授权',
        image: 'assets/failed.svg'
      })
    }
  },

  login: function() {
    wx.cloud.callFunction({
      name: 'login',
      data: {
        student_id: this.data.student_id,
        password: this.data.password
      }
    }).then(res => {
      console.log('success')
      console.log(res)
      wx.redirectTo({
        url: '../index/index',
      })
    }).catch(err => {
      console.log('error')
      console.log(err)
      wx.showToast({
        title: '账号或密码错误',
        image: 'assets/failed.svg'
      })
    });
    // wx.redirectTo({
    //   url: '../overview/overview',
    // })
  },

  input_student_id: function(e) {
    this.setData({
      student_id: e.detail.value
    });
  },

  input_password: function(e) {
    this.setData({
      password: e.detail.value
    });
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
    wx.cloud.callFunction({
      name: 'getStuentInfo',
      data: {
        student_id: "152040135100" 
      }
    }).then(res => {
      app.globalData.studentInfo = res.result.data[0];
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