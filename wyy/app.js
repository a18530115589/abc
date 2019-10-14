const express=require("express");
const bodyParser=require("body-Parser");
const userRouter=require("./routes/user.js");
var app=express();
app.listen(8080);
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(express.static("./public"));
app.use(express.static("./css"));
app.use(express.static("./js"));
app.use("/user",userRouter);