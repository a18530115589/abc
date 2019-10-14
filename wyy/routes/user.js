const express=require('express');
const pool=require('../pool.js');

var router=express.Router();

router.post('/v1/login',function(req,res){
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	console.log($uname,$upwd);
	pool.query(`SELECT * FROM xz_user WHERE uname=? and upwd=?`,[$uname,$upwd],function(err,result){
		if (err){ throw err;}
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");	
		}
	});
});

//用户注册
router.post("/api/v1/reg",(req,res)=>{
	var obj=req.body;
	var sql="insert into xz_user set ?";
	pool.query(sql,[obj],(err,result)=>{
		if(result.affectedRows>0)
			res.send("1");
		else
			res.send("0");
	});
	
});



//用户重名
router.get("/api/v1/isReg/:phone",(req,res)=>{
	var $phone=req.params.phone;
	var sql="select * from xz_user where phone=?";
	pool.query(sql,[$phone],(err,result)=>{
		if(result.length>0)
			res.send("0");
		else
			res.send("1");
	});
});


module.exports=router;
