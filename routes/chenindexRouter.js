const express=require("express");
const studentController=require("../controller/stores"); //调用userController
const router=express.Router();//调用express对象提供的路由方法获取路由对象

router.get("/storesETQ",function (req,resp) {   //门店ejs
    resp.render("storesETQ");
});
// router.post("/myLogin.do",userController.postUser);//罗
router.get("/ejs.do",function (req,resp) {//罗
    resp.render("login")
});


// router.post("/newuser.do",userController.newUser);

router.post("/ShowAll.do",studentController.ShowAll);//查询所有

router.get("/ShowAllq.do",studentController.lines);//显示几条

router.get("/ShowAllqq.do",studentController.liness);//显示几条

router.get("/search.do",studentController.search); //搜索信息

router.get("/TotalPages.do",studentController.TotalPages); //总页


router.get("/chuan.do",studentController.chuan); //定制

router.get("/TotalPagess.do",studentController.TotalPagess); //总页

router.post("/gouwu.do",studentController.gouwu); //购物

router.get("/shanchu1.do",studentController.shanchu); //删除订单

router.post("/dindan.do",studentController.dindan); //提交订单
router.get("/qingkong.do",studentController.qingkong); //订单提交后清空购物车
// router.post("/order1",studentController.dindan); //订单


module.exports=router;