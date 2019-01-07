const userModel=require("../dao/yhDao");
const yhController={
    aa(req,resp){
        var sex=req.query.sex
        let fenNum=req.query.num;
        // console.log(fenNum)
      userModel.Aa([sex,fenNum])
          .then((data)=>{
              resp.send(data);
          })
    },
    leftBtn(req,resp){
        let leftColor=req.query.leftColor;
        let leftName=req.query.leftName;
        let num=req.query.num;
        // console.log(leftColor+leftName)
        userModel.leftBtn([leftName,leftColor,num])
            .then((data)=>{
                resp.send(data)
            })
    },
    shopping(req,resp){
            resp.render("shopping",{shopName:req.query.shopName,shopColor:req.query.shopColor});
            userModel.shopping([req.query.shopColor,req.query.shopName])
                .then((data)=>{
                    resp.send(data)
                })
    },
    shoppingcar(req,resp){
        let user=req.session.username;
        let shoesName=req.query.shoesName;
        let shoesColor=req.query.shoesColor;
        let shoesSize=req.query.shoesSize;
        if(user==undefined){
            resp.render("login");
        }else{
            let userID=req.session.user_id;
            console.log(userID)
            userModel.shoppingcar([userID,shoesName,shoesColor,shoesSize,shoesName,shoesColor,shoesSize])
                .then((data)=>{
                    resp.render(da)
                })

        }
    },
    goodsPic(req,resp){
        let goodsColor=req.query.shopColor;
        let goodsName=req.query.shopName;
        userModel.goodsPic([goodsName,goodsColor])
            .then((data)=>{
                resp.send(data)
            });
        // console.log(goodsColor,goodsName)
    },
    getSize(req,resp){
        let goodsColor=req.query.shopColor;
        let goodsName=req.query.shopName;
        userModel.getSize([goodsName,goodsColor])
            .then((data)=>{
                resp.send(data)
            })
    },
    dingxiang(req,resp){
        let dingdanhao=req.query.dingdanhao;
        userModel.dingxiang([dingdanhao])
            .then((data)=>{
                resp.send(data)
            })
    }

};
module.exports=yhController;