const express=require("express");
const zwController=require("../controller/zwController"); //调用Controller
const router=express.Router();//调用express对象提供的路由方法获取路由对象


//显示数据
router.post("/getPagCustomization.do",zwController.getPagCustomization);
router.post("/pagingCustomization.do",zwController.pagingCustomization);

//查询
//系列
router.post("/queryData.do",zwController.queryData);
router.post("/queryDataCB.do",zwController.queryDataCB);
router.post("/queryDataMT.do",zwController.queryDataMT);

//材质
router.post("/queryMaterialES.do",zwController.queryMaterialES);
router.post("/queryMaterialCB.do",zwController.queryMaterialCB);
router.post("/queryMaterialMT.do",zwController.queryMaterialMT);

//颜色
router.post("/queryColorBS.do",zwController.queryColorBS);
router.post("/queryColorHS.do",zwController.queryColorHS);
router.post("/queryColorRed.do",zwController.queryColorRed);
router.post("/queryColorZS.do",zwController.queryColorZS);
router.post("/queryColorLS.do",zwController.queryColorLS);
router.post("/queryColorNS.do",zwController.queryColorNS);
router.post("/queryColorYS.do",zwController.queryColorYS);
router.post("/queryColorQS.do",zwController.queryColorQS);
router.post("/queryColorQL.do",zwController.queryColorQL);
router.post("/queryColorFS.do",zwController.queryColorFS);
router.post("/queryColorSL.do",zwController.queryColorSL);
router.post("/queryColorHB.do",zwController.queryColorHB);
router.post("/queryColorZH.do",zwController.queryColorZH);

//尺码
router.post("/querySize_35.do",zwController.querySize_35);
router.post("/querySize_36.do",zwController.querySize_36);
router.post("/querySize_37.do",zwController.querySize_37);
router.post("/querySize_38.do",zwController.querySize_38);
router.post("/querySize_39.do",zwController.querySize_39);
router.post("/querySize_40.do",zwController.querySize_40);
router.post("/querySize_41.do",zwController.querySize_41);
router.post("/querySize_42.do",zwController.querySize_42);
router.post("/querySize_43.do",zwController.querySize_43);
router.post("/querySize_44.do",zwController.querySize_44);
router.post("/querySize_445.do",zwController.querySize_445);
router.post("/querySize_45.do",zwController.querySize_45);
router.post("/querySize_455.do",zwController.querySize_455);
router.post("/querySize_46.do",zwController.querySize_46);
router.post("/querySize_465.do",zwController.querySize_465);
router.post("/querySize_47.do",zwController.querySize_47);
router.post("/querySize_475.do",zwController.querySize_475);
router.post("/querySize_48.do",zwController.querySize_48);
router.post("/querySize_49.do",zwController.querySize_49);
router.post("/querySize_50.do",zwController.querySize_50);


//购买跳转页
router.get("/productCustomization_nan.do",function (req,resp) {
    resp.render("productCustomization_nan")
});
router.get("/productCustomization_nv.do",function (req,resp) {
    resp.render("productCustomization_nv")
});

router.get("/page.do",function (req,resp) {//罗
    // console.log(req.query.id);
    resp.render("delete",{id:req.query.id})
});



module.exports=router;