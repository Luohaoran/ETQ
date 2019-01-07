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
router.get("/chima",function (req,resp) {   //门店ejs
    resp.render("chima");
});
router.get("/information",function (req,resp) {   //门店ejs
    resp.render("information");
});
router.get("/pifa",function (req,resp) {   //门店ejs
    resp.render("pifa");
});
router.get("/songhuo.do",function (req,resp) {   //门店ejs
    resp.render("songho");
});
router.get("/tuihuo",function (req,resp) {   //门店ejs
    resp.render("tuihuo");
});
router.get("/wenti",function (req,resp) {   //门店ejs
    resp.render("wneti");
});
router.post("/ShowAll.do",studentController.ShowAll);//查询所有

router.get("/ShowAllq.do",studentController.lines);//显示几条

router.get("/ShowAllqq.do",studentController.liness);//显示几条

router.get("/search.do",studentController.search); //搜索信息

router.get("/TotalPages.do",studentController.TotalPages); //总页

router.get("/TotalPagess.do",studentController.TotalPagess); //总页


module.exports=router;