// miniprogram/Pages/score/score.js
import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      lazyLoad: true
    },
    type: 'ky'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type === 'ky') {
      wx.setNavigationBarTitle({
        title: '考研成功率预测'
      })
    } else {
      wx.setNavigationBarTitle({
        title: '入党推优成功率预测'
      })
    }
    this.setData({
      type: options.type
    });

    this.chart1Init();
    this.chart2Init();
  },

  getChart1Option() {
    let x = [];
    let y = [];
    let title;
    if (this.data.type === 'ky') {
      app.globalData.yuce['ky'].forEach(item => {
        x.push(item.schooltype + "院校");
        y.push(item.probability);
      });
      title = "考研情况预测";
    } else {
      app.globalData.yuce['rd'].forEach(item => {
        x.push("入党");
        y.push(item.probability);
      });
      title = "入党推优情况预测";
    }
    var option = {
      title: {
        text: title
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['准确率']
      },
      xAxis: {
        data: x
      },
      yAxis: {
        name: '成功率（%）'
      },
      series: [{
        name: '成功率',
        type: 'bar',
        data: y,
        barWidth: 75,
        barGap: 40,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: 'black',
                fontSize: 16
              }
            }

          }
        }
      }]
    };
    return option;
  },

  getChart2Option() {
    var radar_option = {
      title: {
        text: '因子影响百分比',
        subtext: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
        data: ["因子"]
      },
      polar: [{
        indicator: [{
          text: '平均绩点',
          max: 100
        },
        {
          text: '高等数学',
          max: 100
        },
        {
          text: '英语',
          max: 100
        },
        {
          text: '学科竞赛',
          max: 100
        },
        {
          text: '奖学金',
          max: 100
        }
        ]
      }],
      calculable: true,
      series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: 'black',
                fontSize: 16
              }
            }
          }
        },
        data: [{
          value: [80, 43, 52, 19, 38],
          name: '因子'
        }]

      }]
    };
    return radar_option;
  },

  chart1Init() {
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
    this.chartEle1 = this.selectComponent("#chart1");
    this.chartEle1.init((canvas, width, height) => {
      this.chart1 = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      let option = this.getChart1Option();

      this.chart1.setOption(option);
      return this.chart1;
    });
  },

  chart2Init() {
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
    this.chartEle2 = this.selectComponent("#chart2");
    this.chartEle2.init((canvas, width, height) => {
      this.chart2 = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      let option = this.getChart2Option();

      this.chart2.setOption(option);
      return this.chart2;
    });
  },

  loadAnalysisPage() {
    wx.navigateTo({
      url: '../analysis/analysis?type=' + this.data.type,
    })
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