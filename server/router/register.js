const express = require('express');
const router = express.Router();
const mysql = require("../mysql");

router.post('/register', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `userinfo` where u_name=?";
    mysql(str,[req.body.u_name],function( results){
    	
			if(results.length>0){
				res.send("用户名已存在");
			}
			else{
				mysql("INSERT INTO userinfo(`u_name`,`u_pwd`,`u_tel`,`u_status`) VALUES('"+req.body.u_name+"','"+req.body.u_pwd+"','"+req.body.u_tel+"',1)",{},function(results){
					res.send("注册成功");
				})
			}
        
    })
});

router.post('/login', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
   console.log(1111);
    var str = "select * from `userinfo` where u_name=? and u_pwd=?";
    mysql(str,[req.body.u_name,req.body.u_pwd],function( results){
        res.json(results)
    })
});

module.exports = router;
