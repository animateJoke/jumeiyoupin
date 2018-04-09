<template>
    <div class="info">
        <div class="header">
            <a class="iconfont" @click="goBack">&#xe6b0;</a>
            <span v-text="flag?obj['g_title']:'正在加载中...'"></span>
            <a href="#/home/index1/index2" class="iconfont">&#xe66c;</a>
        </div>
        <div class="banner">
            <div @scroll="fn" @touchend="moveEnd">
                <ul :style="{width:(flag?JSON.parse(obj.g_imgList).length:0)*3.75+'rem',overflow:'hidden'}">
                    <li v-for="a in flag?JSON.parse(obj.g_imgList):[]">
                        <img :src="a" alt="">
                    </li>
                </ul>
            </div>
            <ol>
                <li v-for="(a,num) in flag?JSON.parse(obj.g_imgList):[]" :class="{'active':num==index}"></li>
            </ol>
        </div>
        <div class="content">
            <p>
                <span v-text="'￥'+(flag?obj.g_price:0)" class="price"></span>
                <span v-text="'￥'+(flag?obj.g_oldprice:0)" class="oldprice"></span>
                <span v-text="flag?obj.g_buynum:''"></span>
            </p>
            <p><span v-if="obj&&obj.g_type" v-text="flag?obj.g_type:''" class="type"></span>
                <span v-text="flag?obj.g_name:''" class="name"></span></p>
            <p style="padding-top: .1rem;overflow:hidden"><span class="left">分期</span><span v-text="flag?obj.g_stages:''" class="stages"></span></p>
            <p style="padding-top: .1rem;overflow:hidden">
                <span class="left">运费</span><span v-text="flag?obj.g_freight:''" class="freight"></span></p>
            <div style="padding-top: .1rem;overflow:hidden"><span class="left">说明</span>
                <div class="msg">
                    <span v-for="a in JSON.parse(flag?obj.g_msg:'[]')" v-text="flag?a.name:''"></span>
                </div>
            </div>
        </div>
        <div class="evaluate">
            <p class="top">买过的人这样说</p>
            <div v-for="a in flag?JSON.parse(obj.g_evaluate):[]" style="overflow:hidden;border-bottom:.01rem solid #ccc" class="evaluate_list">
                <div style="overflow:hidden">
                    <i class="face" :style="{background:'url('+a.u_face+') no-repeat center'}"></i>
                    <div class="u_info">
                        <p v-text="a.u_name"></p>
                        <p v-text="a.u_register_time"></p>
                    </div>
                </div>
                <p style="line-height: .2rem;">
                    <span v-for="b in JSON.parse(a.u_arr||'[]')" v-text="b.name" style="color:#507daf"></span>
                    <span v-text="a.u_str"></span>
                </p>
                <p style="line-height: .28rem;">
                    <span v-text="a.u_time" style="color:#a4a4a4"></span>&emsp;&emsp;<span style="color:#a4a4a4" v-text="a.u_bute"></span>
                </p>

                <div>
                    <img v-for="c in JSON.parse(a.u_imgList||'[]')" :src="c.small_img" alt="" style="width:1.08rem;margin-right:.1rem">
                </div>
                <p style="text-align: right; line-height: .4rem;">
                    <span><i class="iconfont">&#xe662;</i><i v-text="a.u_like" style="padding:0 .1rem"></i></span>
                    <span><i class="iconfont">&#xe609;</i><i v-text="a.u_reply" style="padding:0 .1rem"></i></span>
                </p>
            </div>
            <p style="text-align: center;line-height: .44rem;">查看全部评价</p>
        </div>
        <div class="box" v-html="flag?obj.g_html:''"></div>
        <div class="footer">
            <a href="#" class="store"><i class="iconfont">&#xe736;</i>
                <p>店铺</p>
            </a>
            <a href="#/home/cart" class="cart"><i class="iconfont">&#xe600;</i>
                <p>购物车 <i></i></p>
            </a>

            <a href="javascript:void(0)" @click="joinCart" class="joinCart">加入购物车</a>
            <a href="javascript:void(0)" class="buy">立即购买</a>

        </div>
    </div>
</template>

<script>
    import $ from "jquery"
    require("../jquery.cookie");
    export default {
        data(){
            return {
                id : window.location.href.split("g_id=")[1],
                ele : null,
                index : 0,
                obj : {},
                flag : false
            }
        },
        methods : {
            goBack(){
                window.history.back()
            },
            fn(){
                this.ele.scrollLeft();
            },
            moveEnd(){
                this.index = Math.round(this.ele.scrollLeft() / document.body.clientWidth);

                this.ele.scrollLeft(this.index * document.body.clientWidth);


            },
            joinCart(){
                var arr=JSON.parse($.cookie("cart")||'[]');
                if(sessionStorage.getItem('user')==null){
                    this.obj.num=1;
                    var obj={
                        g_img:this.obj.g_img,
                        num:1,
                        g_id:this.obj.g_id,
                        g_price:this.obj.g_price,
                        g_name:this.obj.g_name,
                        g_title:this.obj.g_title,
                    }

                    var flag=true;
                    for(var i=0; i<arr.length; i++){
                        if(arr[i].g_id==obj.g_id){
                            arr[i].num=arr[i].num+obj.num;
                            flag=false;
                            break;
                        }
                    }
                    if(flag){
                        arr.push(obj);
                    }

                    $.cookie("cart",JSON.stringify(arr))

                }else {
                    console.log(1);
                    $.ajax({
                        url:"http://localhost:55555/home/cart",
                        type:"post",
                        data:{
                            g_id:this.id,
                            num:1,
                            u_id:sessionStorage.getItem('user')
                        }
                    }).then(function(res){
                        console.log(res);
                    })
                }
            }
        },
        mounted(){
            this.ele = $(".banner div");
            var self = this;
            $.ajax({
                url : "http://localhost:55555/home/info",
                type : "post",
                data : {
                    id : this.id
                }
            }).then(function(res){
                self.flag = true;
                self.obj = res[0]
            })
        }
    }
</script>

<style scoped>
    .info{
        background-color:#f5f5f5;
    }
    .header{
        height:.44rem;
        line-height:.44rem;
        border-bottom:.01rem solid #ccc;
    }
    .header a{
        color:#666;
        display:inline-block;
        width:.44rem;
        text-align:center;
        font-size:.18rem;
        text-decoration:none;
    }
    .header span{
        display:inline-block;
        width:2.77rem;
        text-align:center;
        color:#333;
    }
    .banner div::-webkit-scrollbar{
        display:none;
    }
    .banner div{
        overflow-y:hidden;
        overflow-x:auto;
    }
    .banner{
        position:relative;
    }
    .banner ol{
        width:3.75rem;
        position:absolute;
        bottom:.3rem;
        text-align:center;
    }
    .banner ol li{
        display:inline-block;
        width:.1rem;
        height:.1rem;
        background-color:#ccc;
        border-radius:50%;
        margin-left:.1rem;
    }
    .banner ol li.active{
        background-color:yellow;
    }
    .banner ul{
        position:relative;
    }
    .banner ul li{
        float:left;
    }
    .banner ul li img{
        width:3.75rem;
    }
    .content{
        margin-bottom:.2rem;
        padding:0 .15rem;
        background-color:#fff;
    }
    .content .price{
        color:red;
        font-size:.2rem;
        line-height:.4rem;
    }
    .content .oldprice{
        color:#ccc;
        text-decoration:line-through;
        font-size:.1rem;
        line-height:.4rem;
    }
    .content .type{
        background:#fe4070;
        border-radius:.03rem;
        color:#fff;
        padding:0 .05rem;
    }
    .content .name{
        line-height:.24rem;
    }
    .content .left{
        float:left;
        width:.75rem;
        color:#999
    }
    .content .msg, .freight{
        float:right;
        width:2.7rem;
        color:#333;
        overflow:hidden;
    }
    .content .msg span{
        background:url(../img/pic.png) no-repeat 0 center;
        background-size:.16rem;
        padding-right:.3rem;
        float:left;
        padding-left:.2rem;
        line-height:.3rem;
    }
    .evaluate{
        padding:.1rem;
        background-color:#fff;
        margin-bottom:.1rem;
    }
    .evaluate .top{
        line-height:.5rem;
        border-bottom:.01rem solid #eee;
    }
    .evaluate_list{
        padding-top:.2rem;
    }
    .evaluate .face{
        float:left;
        width:.3rem;
        height:.3rem;
        border-radius:50%;
    }
    .evaluate .u_info{
        float:left;
        padding-left:.1rem;
        line-height:.18rem;
    }
    .evaluate .u_info p:nth-child(1){
        color:#333;
    }
    .evaluate .u_info p:nth-child(2){
        color:#ccc;
    }
    .box{
        width:3.75rem;
    }
    .box p{
        width:3.75rem;
    }
    .box p img{
        width:3.75rem
    }
    .footer{
        width:3.75rem;
        background-color:#fff;
        height:.48rem;
        position:fixed;
        bottom:0;
        border-top:1px solid #ccc;
    }
    .footer a{
        float:left;
    }
    .footer .store, .footer .cart{
        width:.6rem;
        color:#9a9797;
        text-align:center;
        padding-top:.1rem;
    }
    .footer .store{
        border-right:1px solid #ccc;
    }
    .footer .joinCart, .footer .buy{
        width:1.26rem;
        text-align:center;
        line-height:.48rem;
    }
    .footer .joinCart{
        background:linear-gradient(210deg, #ffcfdf, #fff1f6 98%);
        color:#fe4070;
        text-decoration:none;
    }
    .footer .buy{
        background:linear-gradient(142deg, #ff5593, #fe4070);
        color:#fff;
    }
</style>