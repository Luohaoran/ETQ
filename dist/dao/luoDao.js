const dbpool=require("../config/dbpoolconfig");
const userModel={
    loginUser(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM user WHERE user_name=? AND user_pw=?",
                params,
                (err,data)=>{
                    if(!err){
                        resolve(data)
                    }else {
                        reject(err);
                    }
                })
        })
    },
    newuser(params){
        return new Promise(((resolve, reject) => {
            dbpool.connect("insert into user values (?,?,?,?,?,?)",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        }))
    },
    Geren(params){
        return new Promise(((resolve, reject) => {
            dbpool.connect("select * from user where user_name=?",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        reject(err)
                    }})
        }))
    },
    Dizhi(params){
        return new Promise(((resolve, reject) => {
            // console.log(params);
            dbpool.connect("select * from user where user_name=?",
                params[0],
                (err,data)=>{
                    let userid=data[0].user_id;
                    dbpool.connect("INSERT INTO user_add VALUES (?,?,?,?,?,?,?,?)",
                        [null,userid,params[2],params[3],params[1],params[4],params[5],null],
                        (err,data)=>{
                            if(!err){
                                resolve(data)
                            }else {
                                reject(err)
                            }})
                })
        }))
    },
    Jiance(parmas){
        return new Promise(((resolve, reject) => {
            dbpool.connect("select * from user where user_name=?",
                parmas,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        reject(err);
                    }})
        }))
    },
    Updata(params){
        let sql="UPDATE user set";
        if (params[0]!=""){
            sql+=" user_name=?,";
            // params.push(user_name)
        }
        if (params[1]!=""){
            sql+=" user_pw=?,";
            // params.push(user_pw);
        }
        if (params[2]!=""){
            sql+=" user_mail=?,";
            // params.push(user_mail);
        }
        if (params[3]!=""){
            sql+=" user_phone=?,";
            // params.push(user_phone);
        }
        if (params[4]!=""){
            sql+=" user_sex=?";
            // params.push(user_sex);
        }
        sql+=" where user_name=?";
        for (i=0;i<params.length;i++){
            if (params[i]==""){
                params.splice(i,1);
                i=i-1;
            }
        }
        return new Promise(((resolve, reject) => {
            dbpool.connect(sql,
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        reject(err);
                    }
                }
            )
        }))
    },
    Gerendizhi(params){
        return new Promise(((resolve, reject) => {
            dbpool.connect("select * from user where user_name=?",
                params,
                (err,data)=>{
                    let user_id=data[0].user_id;
                    dbpool.connect("select * from user_add where user_id=?",
                        user_id,
                        (err,data)=>{
                            if (!err){
                                resolve(data)
                            } else {
                                reject(err);
                            }})
                })
        }))
    },
    Wangji(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update user set user_pw=? where user_phone=?",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        reject(err)
                    }})
        })
    },
    Denglu(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT *,user_id AS a,(SELECT count(shop_ID) FROM shopping_car WHERE user_id=a) AS car FROM USER WHERE user_name=? and user_pw=?",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
        })
    },
    Bianji(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from user_add where address=?",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        reject(data)
                    }
                })
        })
    },
    Xiugai(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from user_add where address=?",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        reject(err);
                    }
                }
            )
        })
    },
    Dizhi2(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update user_add set address=?, add_type=?, add_phone=?, add_default=?, add_name=? where add_name=?",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        reject(data);
                    }})
        })
    },
    Shanchu(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("delete from user_add where address=?",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        console.log(err);
                        reject(err);
                    }})
        })
    },
    Dingdan(params){
        return new Promise((resolve,reject)=>{
            console.log(params);
            dbpool.connect("SELECT DISTINCT din AS a,user_id AS b,(SELECT SUM(zongJia) FROM dindan WHERE din=a AND user_id=b) AS zongJia,(SELECT shiJian FROM dindan WHERE din=a AND user_id=b GROUP BY shiJian) as shiJian,(SELECT os_id FROM dindan WHERE din=a AND user_id=b GROUP BY os_id) AS c,(SELECT os_name FROM orderstate WHERE os_id=c) AS os_id  FROM dindan WHERE user_id=?",
                params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    } else {
                        console.log(err)
                        reject(err)
                    }})
        })
    }
};
module.exports=userModel;