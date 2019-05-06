// miniprogram/Pages/score/score.js
import * as echarts from '../../ec-canvas/echarts';
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
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      this.chart.setOption(this.getOption());
      return this.chart;
    });
  },

  getOption() {
    let json = app.globalData.yujing;
    let option = {
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [{
        type: 'graph',
        layout: 'force',
        draggable: true,
        force: {
          //线的长度
          repulsion: 400
        },
        data: json.nodes.map(function (node) {
          return {
            id: node.id,
            name: node.label,
            symbolSize: 18,
            itemStyle: {
              normal: {
                color: node.color
              }
            }
          };
        }),
        edges: json.edges.map(function (edge) {
          return {
            source: edge.sourceID,
            target: edge.targetID
          };
        }),
        label: {
          emphasis: {
            position: 'right',
            show: true
          },
          normal: {
            position: 'right',
            show: true
          }
        },
        roam: true,
        edgeSymbol: ['circular', 'arrow'],
        //箭头大小
        edgeSymbolSize: [2, 8],
        focusNodeAdjacency: true,
        lineStyle: {
          normal: {
            //线的宽度
            width: 1,
            //线的完全度
            curveness: 0.3,
            //线的不透明度
            opacity: 1
          }
        }
      }]
    };
    return option;
  },

  loadYujingfenxiPage() {
    wx.navigateTo({
      url: './yujingfenxi/yujingfenxi',
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