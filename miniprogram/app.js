//app.js
App({
  globalData: {
    userInfo: null,
    studentInfo: { "_id": "3e2dce96-7fdd-49f2-904b-e9a9a1f57d1f", "gpa": 2.5, "volunteer": "54", "score": { "2014-2015": { "毛泽东思想和中国特色社会主义理论体系概论": 60.0, "思想政治理论课综合社会实践(三)": 84.0, "大学英语(三)": 74.0, "入学教育": 76.0, "算法与程序设计基础": 65.0, "面向对象技术": 43.0, "数据库原理": 76.0, "Web应用开发技术基础": 23.0 }, "2015-2016": { "高等数学A(一)": 83.0, "大学物理B(二)": 74.0, "物理实验B": 95.0, "体育(三)": 79.0, "数据结构A": 86.0, "德语入门": 63.0 }, "2016-2017": { "数字逻辑实验": 64.0, "JAVA EE开发技术基础": 74.0, "算法与程序设计基础课程设计": 71.0, "面向对象技术课程设计": 72.0, "软件工程基础实践": 81.0, "马克思主义基本原理概论": 26.0, "软件工程": 74.0, "数字逻辑": 60.0 }, "2017-2018": { "操作系统": 61.0, "环境保护与可持续发展": 72.0, "算法与程序设计基础": 73.0, "C++程序设计基础": 15.0, "计算机网络A": 73.0, "计算机组成原理": 84.0, "计算机组成原理实验": 72.0, "软件建模与分析": 83.0, "体育(四)": 52.0 } }, "studentname": "王小明", "graduate": "2014", "major": "计算机科学与技术", "credit": "64", "avatar": "https://timgsa.baidu.com/timg?image\u0026quality=80\u0026size=b9999_10000\u0026sec=1557083051676\u0026di=4c8cb42cafdb0c96c3c69a371b562f87\u0026imgtype=0\u0026src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.800%2Ftc.service.weibo.com%2Fdingyue_nosdn_127_net%2F16a8665952e6f2cf25d7c65c56d2abbc.jpg", "student_id": "152040135100" },
    yuce: {
     "ky": [
       { "schooltype": "211", "probability": 43, "courses": ["数学", "英语", "物理", "计算机"]},
       { "schooltype": "985", "probability": 32, "courses": ["体育", "Java程序设计", "操作系统", "计算机"] },
       { "schooltype": "普通", "probability": 78, "courses": ["数学"] },
     ],
     "rd": [
       { "probability": 43, "courses": ["数学", "英语", "物理", "计算机"]}
     ],
    },
    yujing: {
      "nodes": [{
        "color": "#69c719",
        "label": "操作系统",
        "attributes": "",
        "id": "操作系统",
        "size": 10
      }, {
        "color": "#19c79f",
        "label": "软件工程",
        "attributes": "",
        "id": "软件工程",
        "size": 10
      }, {
        "color": "#c73419",
        "label": "计算机组成原理实验",
        "attributes": "",
        "id": "计算机组成原理实验",
        "size": 10
      }, {
        "color": "#c76919",
        "label": "编译原理",
        "attributes": "",
        "id": "编译原理",
        "size": 10
      }, {
        "color": "#84c719",
        "label": "数据结构A",
        "attributes": "",
        "id": "数据结构A",
        "size": 10
      }, {
        "color": "#19c74f",
        "label": "面向对象技术",
        "attributes": "",
        "id": "面向对象技术",
        "size": 10
      }, {
        "color": "#c7194f",
        "label": "算法与程序设计基础",
        "attributes": "",
        "id": "算法与程序设计基础",
        "size": 10
      }, {
        "color": "#c71934",
        "label": "计算机网络A",
        "attributes": "",
        "id": "计算机网络A",
        "size": 10
      }, {
        "color": "#3419c7",
        "label": "计算机组成原理",
        "attributes": "",
        "id": "计算机组成原理",
        "size": 10
      }, {
        "color": "#199fc7",
        "label": "数据库原理",
        "attributes": "",
        "id": "数据库原理",
        "size": 10
      }, {
        "color": "#c78419",
        "label": "离散数学A",
        "attributes": "",
        "id": "离散数学A",
        "size": 10
      }],
      "edges": [{
        "sourceID": "数据库原理",
        "attributes": "",
        "targetID": "软件工程",
        "size": 1
      }, {
        "sourceID": "面向对象技术",
        "attributes": "",
        "targetID": "计算机组成原理实验",
        "size": 1
      }, {
        "sourceID": "软件工程",
        "attributes": "",
        "targetID": "操作系统",
        "size": 1
      }, {
        "sourceID": "操作系统",
        "attributes": "",
        "targetID": "编译原理",
        "size": 1
      }, {
        "sourceID": "算法与程序设计基础",
        "attributes": "",
        "targetID": "操作系统",
        "size": 1
      }, {
        "sourceID": "计算机组成原理",
        "attributes": "",
        "targetID": "编译原理",
        "size": 1
      }, {
        "sourceID": "计算机网络A",
        "attributes": "",
        "targetID": "编译原理",
        "size": 1
      }, {
        "sourceID": "数据结构A",
        "attributes": "",
        "targetID": "计算机组成原理实验",
        "size": 1
      }, {
        "sourceID": "计算机组成原理实验",
        "attributes": "",
        "targetID": "编译原理",
        "size": 1
      }, {
        "sourceID": "离散数学A",
        "attributes": "",
        "targetID": "操作系统",
        "size": 1
      }]
    }
  },

  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  }
})
