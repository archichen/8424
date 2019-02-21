// miniprogram/Pages/authorized/authorized.js
const apis = require('../../utils/apis.js').apis;

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
        url: '../overview/overview',
      })
    }).catch(err => {
      console.log('error')
      console.log(err)
      wx.showToast({
        title: '账号或密码错误',
        image: 'assets/failed.svg'
      })
    });
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
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    // wx.login({
    //   success: res => {
    //     wx.request({
    //       url: apis.login,
    //       data: {
    //         js_code: res.code
    //       }
    //     })
    //   }
    // })
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