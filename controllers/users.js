// var { Email } = require('../untils/config.js');
var UserModel = require('../models/users.js');


var login = async (req,res,next)=>{
    var { username, password } = req.body;

    var result = await UserModel.findLogin({
        username,
        password
    });

    if(result){
        req.session.username = username;

        res.send({
            msg: '登录成功',
            status: 0
        })
    }else{
        res.send({
            msg: '登录失败',
            status: -1
        });
    }
};
var register = async (req,res,next)=>{
    var { username, password } = req.body;
    var result = await UserModel.save({
        username,
        password
    });
    if (result){
        res.send({
            msg: '注册成功',
            status: 0
        });        
    }else{
        res.send({
            msg: '注册失败',
            status: -2
        });
    }
};
// var verify = async (req,res,next)=>{

//     var email = req.query.email;

//     var mailOptions = {
//         from: 'maimai网 549753947@qq.com', // sender address
//         to: email, // list of receivers
//         subject: "maimai网邮箱验证码", // Subject line
//         text: "验证码" + Email.verify, // plain text body
//       };

//       Email.transporter.sendMail(mailOptions,(err)=>{
//         if(err){
//             res.send({
//                 msg: '验证码发送失败',
//                 status: -1
//             })
//         }else{
//             res.send({
//                 msg: '验证码发送成功',
//                 status: 0
//             })
//         }
//       })

// };
var logout = async (req,res,next)=>{
    req.session.username = '';
    res.send({
        msg: '退出成功',
        status: 0
    });
};
var getUser = async (req,res,next)=>{
    if(req.session.username){
        res.send({
            msg: '获取用户信息成功',
            status: 0,
            data: {
                username: req.session.username
            }
        });
    }else{
        res.send({
            msg: '获取用户信息失败',
            status: -1
        });
    }
};
var findPassword = async (req,res,next)=>{

};

module.exports = {
    login,
    register,
    // verify,
    logout,
    getUser,
    findPassword
}