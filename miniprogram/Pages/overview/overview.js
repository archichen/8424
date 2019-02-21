// miniprogram/Pages/overview/overview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canGraduate: true,
    comments: [
      "不能正常毕业",
      "可以正常毕业"
    ],
    studentInfo: {
      head_url: 'assets/head_girl.jpeg',
      name: '李宇春',
      year: 2015,
      major: '计算机科学与技术',
      scores: {
        credit: 32,
        gpa: 3.7,
        volunteer_time: 23,
        subject_scores: [
          {
            subject: '计算机科学与技术',
            score: '76'
          },
          {
            subject: '数据结构',
            score: '43'
          },
          {
            subject: 'Java程序设计',
            score: '87'
          },
          {
            subject: 'Web程序设计',
            score: '90'
          },
          {
            subject: '马哲',
            score: '21'
          },
          {
            subject: '长的帅',
            score: '100'
          },
        ]
      }
    }
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