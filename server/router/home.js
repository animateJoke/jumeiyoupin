const express = require('express');
const router = express.Router();
const mysql=require("../mysql");

router.post('/test', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "insert into `list` set ?";
    mysql(str,req.body,function(results){
        res.send("成功")
    })
});

router.post('/list', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `list` order by g_id desc LIMIT ?,20";
    mysql(str,[req.body.index*20],function(results){
        res.json(results)
    })
});
router.get('/job', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `job` where j_status=1 order by j_id desc LIMIT ?,7";
    mysql(str,[req.query.index*7],function(results){
        res.json(results)
    })
});

module.exports = router;