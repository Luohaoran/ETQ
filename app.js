const express=require("express");//加载express
const logger=require("morgan");//日志模块
const favicon=require("serve-favicon");//小图标
const bodyParser=require("body-parser");//处理post数据
const session=require("express-session");//缓存
const cookieParser=require("cookie-parser");//缓存
const path=require("path");
//自己的模块
const luoroute=require("./routes/luoRouter");//
const zwroute=require("./routes/zwRouter");//
const chenroute=require("./routes/chenindexRouter");//
const yhrouter=require("./routes/yhRouter");

const app=express();//执行express的全局函数，返回一个express的服务器对象
app.use(logger("dev"));
app.use(cookieParser());
app.use(session({
    name:"demo168",
    secret:"123123123",
    cookie:{
        maxAge:1000*60*60*24*30//以毫秒为单位
    },
    resave:true,//更新session-cookie失效时间
    rolling:true,
    saveUninitialized:true
}));
//post数据读取
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//===============ejs 配置=================npm install ejs --save
//视图引擎
app.set("views",path.join(__dirname,"views"));//视图文件路径
app.set("view engine","ejs");//视图解析引擎

//post数据读取
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//使用路由
app.use(luoroute);
app.use(zwroute);
app.use(chenroute);
app.use(yhrouter);



app.use("/",(req,resp,next)=>{
    app.locals.username=req.session.username;//返回用户名
    app.locals.user_id=req.session.user_id;//返回id
    next();
});
// app.use("/login",(req,resp,next)=> {
//     if (app.locals.username){
//         resp.render("Myindex")
//     }else {
//         next()
//     }
//         });

// 1.设置静态资源路径
app.use(express.static(__dirname+"/public"));//__dirname指向当前文件根目录
app.use(express.static(__dirname+"/public/html"));

//小图标 ：npm install serve-favicon --save

app.use(favicon(__dirname+"/public/images/favicon.ico"));

app.set("views",path.join(__dirname,"views"));//视图文件路径
app.set("view engine","ejs");//视图解析引擎

app.set("port",8888);//设置端口
app.listen(8888,()=>{
   console.log("服务器已启动"+app.get("port"));
});