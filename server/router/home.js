const express = require('express');
const router = express.Router();
const mysql = require("../mysql");
const request = require("request");
var cheerio = require('cheerio');


/*router.post('/test', function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    request.get({
        url : "http://h5.jumei.com/product/ajaxStaticDetail?item_id="+req.body.id+"&type="+req.body.type
    }, function optionalCallback(err, httpResponse, body){
        /!*setTimeout(function(){
            var $=cheerio.load("body");
            console.log($(".swiper-wrapper img"));
        },1000)*!/
        // console.log(body.data);
        var obj=JSON.parse(body).data;
        var arr=[];
        for(var i=0; i<obj.image_url_set.single_many.length; i++){
            arr.push(obj.image_url_set.single_many[i]["320"])
        };
        req.body.g_imgList=JSON.stringify(arr);
        req.body.g_html=obj.description_info.description+obj.description_info.description_images+obj.description_info.description_usage;
        request.get({
            url:"http://m.jumei.com/product/ajaxDynamicDetail?item_id="+req.body.id2+"&type=jumei_mall"
        }, function optionalCallback(err, httpResponse, body){
            delete req.body.id;
            delete req.body.id2;
            delete req.body.type;

            var obj2=JSON.parse(body).data.result;
            // res.json(obj2)
            req.body.g_buynum=obj2.product_desc;
            req.body.g_type=obj2.shop_info.is_proprietary;
            req.body.g_stages=obj2.fen_qi.sale_msg;
            req.body.g_freight=obj2.freight.text;
            req.body.g_msg=JSON.stringify(obj2.icon_tag);


            var str = "insert into `list` set ?";
            mysql(str, req.body, function(results){
                res.send("成功")
            })
        })


    })

});
router.get('/test1', function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    request.get({
        /!*url : "http://m.jumei.com/product/ajaxDynamicDetail?item_id="+req.body.id+"&type="+req.body.type*!/
        url:"http://m.jumei.com/product/ajaxDynamicDetail?item_id=4085286&type=jumei_mall"
    }, function optionalCallback(err, httpResponse, body){
        /!*setTimeout(function(){
            var $=cheerio.load("body");
            console.log($(".swiper-wrapper img"));
        },1000)*!/
        /!*!// console.log(body.data);

        var data={};
        data.g_imgList=[];
        for(var i=0; i<obj.image_url_set.single_many.length; i++){
            data.g_imgList[i]=obj.image_url_set.single_many[i]["320"]
        };
        data.g_html=obj.description_info.description+obj.description_info.description_images+obj.description_info.description_usage;*!/
        var obj=JSON.parse(body).data;
        res.json(obj)

    })
    // res.send(1);
    /!*var str = "insert into `list` set ?";
    mysql(str, req.body, function(results){

    })*!/
});
router.post('/test2', function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    var num = parseInt(Math.random()*45)
    var str = "UPDATE LIST SET p_id=? WHERE g_id=?"
    mysql(str,[num,req.body.id],function(){
        res.send("ok")
    })

});*/

router.post('/list', function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from `list` order by g_id desc LIMIT ?,20";
    mysql(str, [req.body.index * 20], function(results){
        res.json(results)
    })
});
router.post('/info', function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from `list` where g_id=?";
    mysql(str, [req.body.id], function(results){
        res.json(results)
    })
});


router.get('/job', function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from `job` where j_status=1 order by j_id desc LIMIT ?,7";
    mysql(str, [req.query.index * 7], function(results){
        res.json(results)
    })
});

router.post('/fenye', function(req, res, next){
    console.log(req);
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from `list` where p_id="+req.body.id;
    mysql(str,[], function(results){
        res.json(results)
    })
});



module.exports = router;