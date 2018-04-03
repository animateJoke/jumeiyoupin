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
            <p><span v-text="flag?obj.g_stages:''" class="stages"></span></p>
            <p style="padding-top: .1rem;overflow:hidden">
                <span class="left">运费</span><span v-text="flag?obj.g_freight:''" class="freight"></span></p>
            <div style="padding-top: .1rem;overflow:hidden"><span class="left">说明</span>
                <div class="msg">
                    <span v-for="a in JSON.parse(flag?obj.g_msg:'[]')" v-text="flag?a.name:''"></span>
                </div>
            </div>
        </div>
        <div class="box" v-html="flag?obj.g_html:''"></div>
        <div class="footer">
            <a href="#" class="store"><i class="iconfont">&#xe736;</i>
                <p>店铺</p>
            </a>
            <a href="#/home/cart" class="cart"><i class="iconfont">&#xe600;</i>
                <p>购物车</p>
            </a>
            <a href="#" class="joinCart">加入购物车</a>
            <a href="#" class="buy">立即购买</a>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"

    export default {
        data(){
            return {
                id : window.location.href.split("?")[1].split("=")[1],
                ele : null,
                index : 0,
                obj : {},
                flag:false
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
                console.log(this.index * document.body.clientWidth, this.ele.scrollLeft());
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
                self.flag=true;
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
        color:#fe4070
    }
    .footer .buy{
        background:linear-gradient(142deg, #ff5593, #fe4070);
        color:#fff;
    }
</style>