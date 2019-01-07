const path=require("path");
const userModel=require("../dao/luoDao");
const luoController={
    // postUser(req,resp){
    //     let username=req.body.username;
    //     let password=req.body.pwd;
    //     userModel.loginUser([username,password])
    //         .then((data)=>{
    //             if (data.length>0){
    //                 req.session.username=data[0].user_name;
    //                 resp.render("index",{username:req.session.username})
    //             }else {
    //                 resp.send("错误")
    //             }
    //         })
    // },
    newUser(req,resp){
        let username=req.body.username;
        let password=req.body.pwd;
        let useremail=req.body.email;
        let sex=req.body.sex;
        let phone=req.body.phone1;
        userModel.newuser([null,username,password,useremail,phone,sex])
            .then((data)=>{
                if(data){
                    resp.send("正确")
                }else {
                    resp.send("错误")
                }
            })
    },
    geren(req,resp){
        userModel.Geren([req.session.username])
            .then((data)=>{
                resp.send(data)
            })
    },
    dizhi(req,resp){
        let addname=req.body.addname;//名字
        let addsheng=(req.body.addsheng+" ");
        let addshi=(req.body.addshi+" ");
        let addxian=(req.body.addxian);
        let adddizhi=(addsheng+addshi+addxian);//地址
        let addjiedao=req.body.addjiedao;//街道地址
        let addphone=req.body.addphone;//电话号码
        let addyoubian=req.body.addyoubian;
        let username=req.session.username;
        userModel.Dizhi([username,addname,adddizhi,addjiedao,addphone,addyoubian])
            .then((data)=>{
                resp.render("Myindex")
            })
    },
    dizhi2(req,resp){
        let addname=req.body.addname;//名字
        let addsheng=(req.body.addsheng+" ");
        let addshi=(req.body.addshi+" ");
        let addxian=(req.body.addxian);
        let adddizhi=(addsheng+addshi+addxian);//地址
        let addjiedao=req.body.addjiedao;//街道地址
        let addphone=req.body.addphone;//电话号码
        let addyoubian=req.body.addyoubian;
        // let username=req.session.username;
        userModel.Dizhi2([adddizhi,addjiedao,addphone,addyoubian,addname,addname])
            .then((data)=>{
                resp.render("Myindex",{sheng:addsheng,shi:addshi,xian:addxian})
            })
    },
    updata(req,resp){
        let upname=req.body.upname||"";
        let pwd=req.body.pwd3||"";
        let email=req.body.email||"";
        let phone=req.body.phone1||"";
        let sex=req.body.sex||"";
        let username=req.session.username;
        userModel.Updata([upname,pwd,email,phone,sex,username])
            .then((data)=>{
                resp.render("Myindex")
            })
    },
    jiance(req,resp){
        let username=req.session.username;
        userModel.Jiance([username])
            .then((data)=>{
                // console.log(data);
                resp.send(data);
            })

    },
    gerendizhi(req,resp){
        let username=req.session.username;
        userModel.Gerendizhi([username])
            .then((data)=>{
                resp.send(data);
            })
    },
    wangji(req,resp){
        let phone=req.body.phone;
        let pwd=req.body.pwd;
        userModel.Wangji([pwd,phone])
            .then((err,data)=>{
                if (!err){
                    resp.send(data)
                } else {
                    resp.send(err);
                }
            })

    },
    denglu(req,resp){
        let username=req.body.username;
        let pwd=req.body.pwd;
        userModel.Denglu([username,pwd])
            .then((data)=>{
                if (data.length>0){
                    req.session.username=data[0].user_name;
                    req.session.user_id=data[0].user_id;
                    resp.send("正确");
                } else {
                    resp.send("错误");
                }
            })
    },
    // bianji(req,resp){
    //   let dizhi=req.body.chuandizhi;
    //   userModel.Bianji([dizhi])
    //       .then((data)=>{
    //           resp.send(data);
    //       })
    // },
    xiugai(req,resp){
        userModel.Xiugai([req.body.dizhi])
            .then((data)=>{
                resp.send(data);
            })
    },
    shanchu(req,resp){
        userModel.Shanchu([req.query.dizhi])
            .then((data)=>{
                resp.render("Myindex")
            })
    },
    dingdan(req,resp){
        // console.log(req.query.id);
        userModel.Dingdan([req.query.id])
            .then((data)=>{
                resp.send(data);
            })
    }
};
module.exports=luoController;