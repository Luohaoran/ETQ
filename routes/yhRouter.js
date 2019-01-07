const express=require("express");
const yhController=require("../controller/yhController"); //调用userController
const router=express.Router();//调用express对象提供的路由方法获取路由对象

router.get("/newCollection",function (req,resp) {   //新收藏ejs
    resp.render("newCollection");
});
router.get("/aa.do",yhController.aa);
router.get("/leftBtn.do",yhController.leftBtn);
router.get("/shopping.do",yhController.shopping);
router.get("/getGoodsPic",yhController.goodsPic);
router.get("/getSize",yhController.getSize);
router.get("/shoppingcar.do",yhController.shoppingcar)
router.get("/dingxiang.do",yhController.dingxiang)
// router.get("/nav",function () {
//     console.log("!11")
// })

module.exports=router;