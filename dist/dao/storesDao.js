const db=require("../config/dbpoolconfig");
const  storeDao= {
    DaoAll(params,callback){
        db.connect("select * from stores",
            params,(err,data)=>{
                callback(data);
            })
    },
    //=====总页
    DaoTotalPages(params,callback) {
        let pageCount = 8;
        db.connect("select count(*) as totalcount from stores",
            params, (err, data) => {
                console.log(data[0].totalcount+"==============");
                let result = Math.ceil(data[0].totalcount / pageCount);
                // console.log(result+"------------");
                result = String(result);
                // console.log(typeof result);
                callback(result);
            })
    },
    DaoTotalPagess(params,callback) {
        let pageCount = 8;
        db.connect("select count(*) as totalcount from stores WHERE 1=1 AND sheng LIKE '"+params[0]+"' AND shi='"+params[1]+"'AND qu='"+params[2]+"'",
            params, (err, data) => {
                // console.log(data[0].totalcount+"==============");
                let result = Math.ceil(data[0].totalcount / pageCount);
                // console.log(result+"------------");
                result = String(result);
                // console.log(typeof result);
                callback(result);
            })
    },
    //每页显示多少信息
    Daolines(params,callback) {
        // console.log(params[1]+"=====")
        db.connect("select * from stores limit ?,?",
            params, (err, data) => {
                // console.log(data+"11111111111");
                callback(data);
            })
    },
    // Daoliness(params,callback) {
    //     console.log(params[0]+".................");
    //     db.connect("SELECT * FROM stores WHERE 1=1 AND sheng LIKE '"+params[0]+"' AND shi='"+params[1]+"' AND qu='"+params[2]+"' LIMIT "+params[3]+","+params[4]+"",
    //         [params], (err, data) => {
    //             console.log("SELECT * FROM stores WHERE 1=1 AND sheng LIKE '"+params[0]+"' AND shi='"+params[1]+"' AND qu='"+params[2]+"' LIMIT "+params[3]+","+params[4]+"");
    //             callback(data);
    //         })
    // }
    Daogouwu(params,callback) {
        // console.log(params[1]+"=====")
        db.connect("SELECT *,goods_id AS a,(SELECT g_n_id FROM goods WHERE goods_id=a) AS name1,(SELECT g_c_id FROM goods WHERE goods_id=a) AS color1,(SELECT g_z_id FROM goods WHERE goods_id=a) AS size1,(SELECT pic_path FROM goods_pic WHERE g_n_id=name1 AND g_c_id=color1 AND pic_num=1) AS pic_path,(SELECT g_name FROM goods_name WHERE g_n_id=name1) AS g_name,(SELECT color_name FROM goods_color WHERE g_c_ID=color1) AS g_color,(SELECT size_code FROM goods_size WHERE g_s_id=size1) AS size_code,COUNT,(SELECT price FROM goods WHERE goods_id=a) AS price FROM shopping_car WHERE user_id=?",
            params,(err,data)=>{
            // console.log(data);
                callback(data);
            })
    },
    Daoshanchu(params,callback) {
        // console.log(params[1]+"=====")
        db.connect("DELETE FROM shopping_car WHERE shop_ID=?",
            params,(err,data)=>{
                // console.log(params)
                callback(data);
            })
    },
    Daodindan(params,callback) {
        let id=params[0]
        let img = params[1];
        let name = params[2];
        let yanSe = params[3];
        let daXiao = params[4];
        let shu = params[5];
        let danJia = params[6];
        let zongJia = params[7];
        let shiJian = params[8];
        let din = params[9];
        let user_id=params[10];
        let os=params[11]
        let myD;
        if(name[1].length==1){
            // myD=999+","+img+","+name+","+yanSe+","+daXiao+","+shu+","+danJia+","+zongJia+","+shiJian+","+din+","+user_id;
            // console.log(myD);
            db.connect("INSERT INTO dindan VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                params,(err,data)=>{
                console.log(err)
                })
        }else{
            for(let i=0;i<params[1].length;i++){
                myD=[id,img[i],name[i],yanSe[i],daXiao[i],shu[i],danJia[i],zongJia[i],shiJian,din,user_id,os];
                // console.log("111"+myD)
                db.connect("INSERT INTO dindan VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                    myD,(err,data)=>{
                    console.log(err)
                    })
            }
        }
        //
        // console.log(params.length)
        // console.log(params)
        // console.log(name[1].length)


    },
    qingkong(params,callback){
        let pa=params[0]
        // console.log(pa)
        // console.log(params)
        let myP
        for(var i=0;i<pa[0].length;i++){
            // console.log(pa[i])
            myP=pa[i]
            db.connect("delete from shopping_car where shop_ID=?",
                myP, (err,data)=>{

                })

        }

    },
    chuan(params,callback) {
        console.log(params+"=====")
        db.connect("select * from productcustomization where id=?",
            params,(err,data)=>{
            // console.log(data)
                db.connect("INSERT INTO dindan VALUES (NULL,(SELECT img FROM productcustomization WHERE id=?),(SELECT p_name FROM productcustomization WHERE id=?),(SELECT p_color FROM productcustomization WHERE id=?),(SELECT p_size FROM productcustomization WHERE id=?),1,(SELECT p_price FROM productcustomization WHERE id=?),(SELECT p_price FROM productcustomization WHERE id=?),?,?,?,1)",
                    params,(err,data)=>{
                        // console.log(err)
                        // callback(data);
                    })
            })
    }


};
module.exports= storeDao;