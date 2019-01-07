const db=require("../config/dbpoolconfig");//调用连接池
const  zwDao=require("../dao/zwDao");//连接dao

const zwController= {
    getPagCustomization(req,resp){
        let pageCount=18;
        let currentPage=req.body.currentPage;
        let sql="select * from productCustomization limit ?,?";
        // console.log(currentPage)

        db.connect(sql,[(currentPage-1)*pageCount,pageCount],(err,data)=>{
            // console.log(data);
            resp.send(data);
        })
    },
    pagingCustomization(req,resp){
        let pageCount=18;
        db.connect("select count(*) as totalcount from productCustomization",[],(err,data)=>{
            // console.log(data[0].totalcount);
            let result=Math.ceil(data[0].totalcount/pageCount);
            result=String(result);
            // console.log(typeof result);
            resp.send(result);
        })
    },
    //系列
    queryData(req,resp){
        // let Essence=req.query.Essence;
        db.connect("SELECT * FROM productCustomization WHERE p_name LIKE '%ES%'",
            [],
            (err,data)=>{
            // console.log(data);
            resp.send(data);
            })
    },
    queryDataCB(req,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_name LIKE '%CB%'",[],(err,data)=>{
            // console.log(data);
            resp.send(data);
        })
    },
    queryDataMT(req,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_name LIKE '%MT%'",[],(err,data)=>{
            // console.log(data);
            resp.send(data);
        })
    },
    //材质
    queryMaterialES(req,resp) {
        db.connect("SELECT * FROM productCustomization WHERE p_material LIKE '%天然材质%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryMaterialCB(req,resp) {
        db.connect("SELECT * FROM productCustomization WHERE p_material LIKE '%PU革材质%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryMaterialMT(req,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_material LIKE '%超细纤维%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    //颜色
    queryColorBS(req,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%白%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorHS(req,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%黑%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorRed(req,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%红%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorZS(req,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%棕%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorLS(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%绿%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorNS(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%蓝%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorYS(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%金%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorQS(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%青%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorQL(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%浅蓝%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorFS(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%粉色%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorSL(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%深蓝%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorHB(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%海白%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    queryColorZH(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_color LIKE '%紫黑%'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    //尺码
    querySize_35(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='35'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_36(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='36'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_37(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='37'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_38(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='38'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_39(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='39'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_40(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='40'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_41(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='41'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_42(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='42'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_43(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='43'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_44(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='44'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_445(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='44.5'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_45(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='45'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_455(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='45.5'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_46(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='46'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_465(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='46.5'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_47(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='47'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_475(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='47.5'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_48(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='48'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_49(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='49'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },
    querySize_50(res,resp){
        db.connect("SELECT * FROM productCustomization WHERE p_size='50'", [], (err, data) => {
            // console.log(data);
            resp.send(data);
        })
    },

    //
    queryDelete(res,resp){
        let id=res.query.id;
        console.log(id)
    }





};
module.exports=zwController ;