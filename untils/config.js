var mongoose = require('mongoose');
// 邮箱验证使用的模块
// var nodemailer = require('nodemailer')

var Mongoose = {
    url: 'mongodb://localhost:27017/maimai',
    connect(){
        mongoose.connect(this.url,{ useUnifiedTopology: true }, (err)=>{
            if(err){
                console.log('数据库连接失败');
                return;
            }
            console.log('数据库连接成功');
        });
    }
};

// var Email = {
//     config: {
//         host: "smtp.qq.com",
//         port: 587,
//         auth: {
//           user: '549753947@qq.com', // generated ethereal user
//           pass: '123123', // generated ethereal password
//         }
//     },
//     get transporter(){
//         return nodemailer.createTestAccount(this.config)
//     },
//     get verify(){
//         return Math.random().toString().substring(2,6);
//     }
// };

module.exports = {
    Mongoose,
    // Email
};