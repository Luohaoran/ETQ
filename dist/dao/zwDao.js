const db=require("../config/dbpoolconfig");
const  storeDao= {
    getPagCustomizationMySql(params,callback) {
        db.connect("select * from productCustomization",
            params, (err, data) => {
                console.log(data);
                callback(data);
            })
    },
};
module.exports= storeDao;