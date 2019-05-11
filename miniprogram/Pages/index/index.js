// miniprogram/Pages/index/index.js
import * as echarts from '../../ec-canvas/echarts.js';
let chartLine;

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      ecLine: {
        onInit: function(canvas, width, height) {
          chartLine = echarts.init(canvas, null, {
            width: height,
            height: height
          });
          canvas.setChart(chartLine);
          chartLine.setOption({
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }]
          });
        }
      },
      cardCur: 0,
      swiperImgs: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557073286313&di=0aa828866fab4f1cc076ec8023928548&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Flbsugc%2Fpic%2Fitem%2Ff9198618367adab46e54cb198ed4b31c8601e4e0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557074816535&di=11df1c2872328a37baec6dc1f47240e2&imgtype=jpg&src=http%3A%2F%2Fszlg.just.edu.cn%2Fportals%2F0%2Fimages%2Fpic%2F02.jpg",
        "http://a2.att.hudong.com/45/97/01300001205730131641973105961.jpg",
        "http://news.usts.edu.cn/news/uploadfiles/201703/20170330155822647.jpg",
        "http://news.usts.edu.cn/news/uploadfiles/201706/20170615104831546.jpg"
      ]
  },


  loadOverViewPage() {
    wx.navigateTo({
      url: '../overview/overview',
    });
  },

  loadYucePage() {
    wx.navigateTo({
      url: '../yuce/yuce',
    })
  },

  loadYujingPage() {
    wx.navigateTo({
      url: '../yujing/yujing',
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

  },

  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },

})