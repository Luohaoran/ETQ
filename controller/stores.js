const db=require("../config/dbpoolconfig");//调用连接池
const  storeDao=require("../dao/storesDao");//连接dao
const stores= {
    ShowAll(req, resp) {
        storeDao.DaoAll([], function (result) {
            // console.log(result);
            resp.send(result)
        })
    },
    search(req,resp){
        let selF=req.query.selF;
        let selT=req.query.selT;
        let selC=req.query.selC;
        let params=[];
        let sql="select * from stores where 1=1";
        if(selF!="请选择"){
            sql+=" and sheng like '"+selF+"' ";
            selF="%"+selF+"%";
            params.push(selF);
            // console.log(params.push(selF))
        }
        if(selT!="请选择"){
            sql+=" and shi='"+selT+"'";
            params.push(selT);
            // console.log(params.push(selT))
        }
        if(selC!="请选择"){
            sql+=" and qu='"+selC+"'";
            params.push(selC);
            // console.log(params.push(selC))
        }
        console.log(sql);
        db.connect(sql,params,(err,data)=>{
            resp.send(data);
            // console.log(data)
        })
    },
    //========总共页数
    TotalPages(req,resp) {
        storeDao.DaoTotalPages([],
            function (result) {
                // console.log("--------------------");
                resp.send(result)
            })
    },
    TotalPagess(req,resp) {
        // let selF=req.query.selF;
        // let selT=req.query.selT;
        // let selC=req.query.selC;
        // storeDao.DaoTotalPagess([selF,selT,selC],
        //     function (result) {
        //         console.log("--------------------");
                // resp.send(result)
        // /    })

        let selF=req.query.selF;
        let selT=req.query.selT;
        let selC=req.query.selC;
        let pageCount = 8;//每页展示8条信息
        let currentPage = req.query.currentPage;//当前展示第几页
        let params=[];
        let sql="select count(*) as totalcount from stores WHERE 1=1";
        if(selF!="请选择"){
            sql+=" and sheng like '"+selF+"' ";
            selF="%"+selF+"%";
            params.push(selF);
            // console.log(params.push(selF))
        }
        if(selT!="请选择"){
            sql+=" and shi='"+selT+"'";
            params.push(selT);
            // console.log(params.push(selT))
        }
        if(selC!="请选择"){
            sql+=" and qu='"+selC+"'";
            params.push(selC);
            // console.log(params.push(selC))
        }
        console.log(sql+"=======")
        db.connect(sql,params,(err,data)=>{
            let result = Math.ceil(data[0].totalcount / pageCount);
            // console.log(result+"------------");
            result = String(result);
            // console.log(typeof result);
            // callback(result);

            resp.send(result);
            console.log(data)
        })




    },
    //每页展示多少条信息
    lines(req,resp) {
        let pageCount = 8;//每页展示8条信息
        let currentPage = req.query.currentPage;//当前展示第几页
        // console.log(currentPage+"======")
        storeDao.Daolines([(currentPage - 1) * pageCount ,pageCount], function (result) {
            // console.log(result+"=---")
            resp.send(result)
        })
    },
    liness(req,resp) {
        // // console.log(currentPage);
        // let selF=req.query.selF;
        // let selT=req.query.selT;
        // let selC=req.query.selC;
        // let pageCount = 8;//每页展示8条信息
        // let currentPage = req.query.currentPage;//当前展示第几页
        // // console.log(currentPage);
        // // console.log(currentPage+"=1111111111");
        // storeDao.Daoliness([selF,selT,selC,(currentPage - 1) * pageCount, pageCount], function (result) {
        //     console.log(result)
        //     resp.send(result)
        // })

        let selF=req.query.selF;
        let selT=req.query.selT;
        let selC=req.query.selC;
        let pageCount = 8;//每页展示8条信息
        let currentPage = req.query.currentPage;//当前展示第几页
        let params=[];
        let sql="select * from stores where 1=1 ";
        if(selF!="请选择"){
            sql+=" and sheng like '"+selF+"' ";
            selF="%"+selF+"%";
            params.push(selF);
            // console.log(params.push(selF))
        }
        if(selT!="请选择"){
            sql+=" and shi='"+selT+"'";
            params.push(selT);
            // console.log(params.push(selT))
        }
        if(selC!="请选择"){
            sql+=" and qu='"+selC+"'";
            params.push(selC);
            // console.log(params.push(selC))
        }
        db.connect(sql+''+"LIMIT "+(currentPage - 1) * pageCount+","+pageCount+"",params,(err,data)=>{
            console.log(sql+"LIMIT "+(currentPage - 1) * pageCount+","+pageCount+"")
            resp.send(data);
            console.log(data+"====212111")
        })
    },
    gouwu(req,resp) {
        let id = req.body.id;//当前展示第几页
        let userid=req.session.user_id;
        // console.log(userid+"1111")
        // console.log(id+ "==============")
        storeDao.Daogouwu([userid], function (result) {
            resp.send(result)
        })
    },
    shanchu(req,resp) {
        let id = req.query.id;//当前展示第几页
        storeDao.Daoshanchu([id], function (result) {
            resp.send(result)
            // console.log("con"+id)
        })
    },
    dindan(req,resp) { //订单
        // console.log(req.body.imgsrc)
        let id=null;
        let img = req.body.imgsrc;
        let name = req.body.name;
        let yanSe = req.body.color;
        let daXiao = req.body.size;
        let shu = req.body.count;
        let danJia = req.body.price;
        let zongJia = req.body.totalprice;
        let shiJian = req.body.shijian;
        let din = req.body.din+req.session.user_id;
        let user_id=req.session.user_id;
        let os=2
        // console.log(img,name+998)
        storeDao.Daodindan([id,img,name,yanSe,daXiao,shu,danJia,zongJia,shiJian,din,user_id,os], function (result) {
            // console.log(result+"狗儿子")
            resp.render(result)
        })
    },
    qingkong(req,resp){
        let carID=req.query.carid;
        // console.log(carID)
        storeDao.qingkong([carID],function (result) {
            resp.render(result)
        })
    },
    chuan(req,resp){
        let carID=req.query.id;
        let shi=req.query.shi;
        let din=req.query.din;
        let user=req.session.user_id;
        console.log(user)
        storeDao.chuan([carID,carID,carID,carID,carID,carID,shi,din,user],function (result) {
            resp.render(result)
        })
    },
};
module.exports=stores ;
