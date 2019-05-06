// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => new Promise((resolve, reject) => {
  // resolve(event)
  let model = db.collection('students').where({
    student_id: event.student_id
  });
  model.get().then(res => {
    resolve(res);
  }).catch(err => reject(err));
});