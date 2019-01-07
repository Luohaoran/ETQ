const dbpool=require("../config/dbpoolconfig");
const userModel={
    Aa(params){
        console.log(params[1])
        if(params[0]=="sex"){
            let myP=params[1]
            console.log(myP)
            return new Promise((resolve,reject)=>{
                dbpool.connect("SELECT pic_id,g_n_id AS a,g_c_id AS b,pic_path,(SELECT DISTINCT price FROM goods WHERE g_n_id=a AND g_c_id=b) AS price,(SELECT color_name FROM goods_color WHERE g_c_id=b) AS color_name,(SELECT g_name FROM goods_name WHERE g_n_id=a) AS g_name FROM goods_pic WHERE pic_num=1 AND g_n_id IN(SELECT DISTINCT g_n_id FROM goods) ORDER BY pic_id DESC LIMIT "+params[1]+",10",
                    myP,
                    (err,data)=>{
                    console.log(err)
                        resolve(data);
                    })
            })
        }else{
            return new Promise((resolve,reject)=>{
                dbpool.connect("SELECT pic_id,g_n_id AS a,g_c_id AS b,pic_path,(SELECT DISTINCT price FROM goods WHERE g_n_id=a AND g_c_id=b) AS price,(SELECT color_name FROM goods_color WHERE g_c_id=b) AS color_name,(SELECT g_name FROM goods_name WHERE g_n_id=a) AS g_name FROM goods_pic WHERE pic_num=1 AND g_n_id IN(SELECT DISTINCT g_n_id FROM goods WHERE sex=?) ORDER BY pic_id DESC LIMIT "+params[1]+",10",
                    params,
                    (err,data)=>{
                    console.log(err)
                        resolve(data);
                    })
            })
        }
    },
    leftBtn(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods_pic WHERE g_n_id=(SELECT g_n_id FROM goods_name WHERE g_name=?) AND g_c_id=(SELECT g_c_id FROM goods_color WHERE color_name=?) AND pic_num=?",
                params,
                (err,data)=>{
                resolve(data)
                })

        })
    },
    shopping(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods WHERE g_n_id=(SELECT g_n_id FROM goods_name WHERE g_name=?) AND g_c_id=(SELECT g_c_id FROM goods_color WHERE color_name=?)",
                params,
                (err,data)=>{
                resolve(data)
                })
        })
    },
    goodsPic(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM goods_pic WHERE g_n_id=(SELECT g_n_id FROM goods_name WHERE g_name=?) AND g_c_id=(SELECT g_c_id FROM goods_color WHERE color_name=?)",
                params,
                (err,data)=>{
                // console.log(data)
                resolve(data)
                })
        })
    },
    getSize(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT *,g_z_id as a,(select size_code from goods_size where g_s_id=a) as size FROM goods WHERE g_n_id=(SELECT g_n_id FROM goods_name WHERE g_name=?) AND g_c_id=(SELECT g_c_id FROM goods_color WHERE color_name=?)",
                params,
                (err,data)=>{
                resolve(data)
                })
        })
    },
    shoppingcar(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("INSERT INTO shopping_car VALUES (default,?,(SELECT goods_id FROM goods WHERE g_n_id=(SELECT g_n_id  FROM goods_name WHERE g_name=?) AND g_c_id=(SELECT g_c_id FROM goods_color WHERE color_name=?) AND g_z_id=(SELECT g_s_id FROM goods_size WHERE size_code=?)),1,(SELECT price FROM goods WHERE g_n_id=(SELECT g_n_id  FROM goods_name WHERE g_name=?) AND g_c_id=(SELECT g_c_id FROM goods_color WHERE color_name=?) AND g_z_id=(SELECT g_s_id FROM goods_size WHERE size_code=?)))",
                params,
                (err,data)=>{
                var shoppingcar=true
                resolve(shoppingcar)
                })
        })
    },
    dingxiang(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from dindan where din=?",
                params,
                (err,data)=>{
                resolve(data)
                })
        })
    }

};

module.exports=userModel;