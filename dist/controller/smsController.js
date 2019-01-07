const AV=require("leancloud-storage");
const APP_ID='vbU2I8KkeYzx3lB5IsqszBWR-gzGzoHsz';
const APP_KEY='8s7UKSMGJl4T8jvDyjf5tBw6';
//模块初始化
AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});

const smsController={
    sendCode(req,resp){
        console.log(req.body.phone);
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber:req.body.phone,
            name:'请在二分钟内输入验证码',//正在使用xxx服务
            op:'登录',//进行的操作 注册，登录 密码重置
            ttl:2//当前验证码有效时间
        }).then(function () {
            //调用成功
            resp.send("验证码发送成功");
        }, function (err) {

            resp.send("验证码发送失败，请检查手机号");
        })
    },
    verifyCode(req,resp){
        AV.Cloud.verifySmsCode(req.body.code,req.body.phone)
            .then(function () {
                //验证成功
                resp.send("验证成功")
            },function (err) {
                //验证失败
                resp.send(err);
            })
    },
};
module.exports=smsController;