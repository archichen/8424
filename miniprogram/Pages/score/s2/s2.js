// miniprogram/Pages/score/score.js
import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorRange: ['历年成绩', '2019~2020 上学期', '2020~2021 下学期', '2021~2022 上学期'],
    selectIndex: 0,
    ec: {
      lazyLoad: true
    }
  },

  openSetting: function() {
    console.log("hello world")
  },

  doChange: function(e) {
    this.setData({
      selectIndex: e.detail.value
    });
    let scores = this.getScoresPie(this.data.selectorRange[e.detail.value]);
    let x = scores.map(e => e.name);
    let y = scores.map(e => e.value);
    this.chart.setOption({
      textStyle: {
        color: "#fff"
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: x,
        axisLabel: {
          rotate: 90
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: y,
        type: 'line',
        areaStyle: {}
      }] 
    });
  },

  next() {
    wx.navigateTo({
      url: '../s1/s1',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let termstr = [];
    let term = {};
    termstr.push("历年成绩");
    for (let i in app.globalData.studentInfo.score) {
      termstr.push(i + "学年");
      term[i] = app.globalData.studentInfo.score[i];
    }
    this.setData({
      selectorRange: [...termstr],
      term: term
    });
    this.chartEle = this.selectComponent("#mychart-dom-bar");
    this.chartEle.init((canvas, width, height) => {
      this.chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      let option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      };

      this.chart.setOption(option);
      return this.chart;
    });
  },

  getScores: function(time) {
    let result = {};
    if (time === "历年成绩") {
      for (let key in app.globalData.studentInfo.score) {
        result = { ...result, ...app.globalData.studentInfo.score[key] };
      }
    } else {
      time = time.substring(0, time.length - 2);
      result = app.globalData.studentInfo.score[time];
    }
    return result;
  },

  getScoresPie: function (time) {
    let result = [];
    if (time === "历年成绩") {
      for (let key in app.globalData.studentInfo.score) {
        for(let k in app.globalData.studentInfo.score[key]) {
          result.push({name: k, value: app.globalData.studentInfo.score[key][k]});
        }
      }
    } else {
      time = time.substring(0, time.length - 2);
      let tmp = app.globalData.studentInfo.score[time];
      for (let k in tmp) {
        result.push({ name: k, value: tmp[k] });
      }
    }
    return result;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.doChange({detail: {value: 0}});
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