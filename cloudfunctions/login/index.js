// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => new Promise((resolve, reject) => {
  // resolve(event)
  let model = db.collection('users').where({
    student_id: event.student_id,
    password: event.password
  });
  // model.update({
  //   data: {
  //     open_id: event.open_id
  //   }
  // });
  model.get().then(res => {
    if (res.data.length !== 0 && res.data[0].student_id === event.student_id && res.data[0].password === event.password) {
      resolve('success');
    } else {
      reject('Account or password is wrong.')
    }
  }).catch(err => reject(err));
});