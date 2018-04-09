<template>
    <div class="cart">
        <div class="head">
            <a href="#" @click="goBack"><img :src="src" alt="" class="pic"></a>
            购物车
            <a href="#/home/index1/index2"><img :src="src1" alt="" class="pic2"></a>
        </div>
        <div class="main" v-if="!list.length">
            <p>您的购物车中没有商品,请先去挑选心爱的商品吧!</p>
            <a href="#/home/index1/index2" class="btn">去逛逛</a>
        </div>

        <div class="carlist" v-else>
            <div class="daojishi">
                <p><span><img :src="src2" alt="" class="pic3"> 19:09:09 </span> 结算时间结束后, 商品可能被抢空, 请尽快结算</p>
            </div>

            <div class="list">
                <div class="tt">
                    <span @click="check" class="check" :style="{backgroundImage:bool?'url('+src4+')':'url('+src5+')'}"></span>
                    聚美优品发货
                </div>
                <ul>
                    <li class="dd" v-for="a in list" :style="{backgroundImage:'url('+JSON.parse(a.g_img)['320']+')'}" >
                        <div class="left">
                            <span class="check1" @click="check(Number(a.g_id),Number(a.g_price*a.num))" :style="{backgroundImage:arr.indexOf(Number(a.g_id))==-1?'url('+src4+')':'url('+src5+')'}"></span>
                        </div>

                        <a class="right" :href="'#/info?g_id='+a.g_id">
                            <p class="p" v-text="a.g_name">
                            </p>
                            <p class="p2" v-html="a.g_title+' <span>x'+a.num+'</span>'">
                            </p>
                            <p class="p3">
                                <span v-text="'￥'+a.g_price*a.num"></span>
                                <a href="#">删除</a>
                            </p>
                        </a>
                    </li>
                </ul>
                <div class="d1">
                    <span class="check2">免</span>
                    <i class="i">已享新用户满39元包邮</i>
                </div>

                <div class="pay">
                    <span class="check" @click="checkAll" :style="{backgroundImage:arr.length!=list.length?'url('+src4+')':'url('+src5+')'}"></span>
                    <span class="sp">全选</span>
                    <span class="sp2">合计</span>
                    <span class="sp3" v-text="'￥'+price"></span>
                    <a href="#" class="a1"> 去结算( <span v-text="arr.length"></span> )</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    require("../../jquery.cookie");
    export default {
        data() {
            return {
                src: require("../../img/left_arrow.png"),
                src1: require("../../img/home.png"),
                src2: require("../../img/time.png"),
                src3: require("../../img/p.jpg"),
                src4:require("../../img/check.png"),
                src5:require("../../img/check1.png"),
                bool:true,
                arr:[],
                list:[],
                price:0
            }
        },
        methods:{
            goBack(){
                window.history.back()
            },
            check(num,price){
                if(this.arr.indexOf(num)==-1){
                    this.arr.push(num);
                    this.price+=price
                }else {
                    this.arr.splice(this.arr.indexOf(num),1);
                    this.price-=price
                }
                console.log(this.arr);
            },
            checkAll(){
                this.arr=[];
                this.price=0
                for(var i=0; i<this.list.length; i++){
                    this.price+=this.list[i].g_price*this.list[i].num;
                    this.arr.push(this.list[i].g_id)
                }
            }
        },
        mounted(){
            if(sessionStorage.getItem("user")==null){
                if(JSON.parse($.cookie("cart")||'[]').length==0){
                }else {
                    this.list=JSON.parse($.cookie("cart")||'[]');
                }
            }else {
                var self=this;
                $.ajax({
                    url:"http://localhost:55555/home/getCart",
                    type:"post",
                    dataType:"json",
                    data:{
                        u_id:sessionStorage.getItem("user")
                    }
                }).then(function(res){
                    self.list=res;
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
    .cart{
        overflow-y:auto;
        margin-bottom:1rem;
    }
    .head {
        height: .41rem;
        border-bottom: 1px solid #e3e3e4;
        padding: 0 .14rem;
        box-sizing: border-box;
        text-align: center;
        line-height: .41rem;
        font-size: .14rem;
        color: #333;
    }

    .pic {
        width: .07rem;
        height: .13rem;
        margin-top: .14rem;
        float: left;
    }

    .pic2 {
        float: right;
        width: .18rem;
        height: .18rem;
        margin-top: .12rem;
    }

    .main {
        height: 100%;
        background: url("../../img/cart_03.jpg") no-repeat center 2.03rem;
        text-align: center;
        box-sizing: border-box;
        padding-top: 3rem;
        /*display: none;*/
    }

    .main p {
        font-size: .13rem;
        color: #333;
    }

    .btn {
        width: 1.25rem;
        height: .36rem;
        display: inline-block;
        text-align: center;
        background: #fe4070;
        color: #fff;
        border-radius: .18rem;
        line-height: .36rem;
        margin-top: .24rem;
    }

    .daojishi {
        height: .37rem;
        box-sizing: border-box;
        padding-left: .08rem;
        line-height: .37rem;
    }

    .daojishi p {
        color: #999;
    }

    .daojishi span {
        color: #fe4070;
    }

    .pic3 {
        width: .19rem;
        height: .19rem;
        position: relative;
        top: .04rem;
    }

    .list {
        background: #f5f5f5;
        overflow: hidden;
        height: 100%;
    }

    .tt {
        padding: 0 .08rem;
        background: #fff;
        margin-top: .08rem;
        height: .4rem;
        border-bottom: 1px solid #e3e3e4;
        line-height: .4rem;
        color: #333;
    }

    .check {
        display: inline-block;
        width: .2rem;
        height: .2rem;

        background-size: .2rem;
        position: relative;
        top: .06rem;
        margin-right: .06rem;
    }

    .check1 {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        background: url("../../img/check.png");
        background-size: .2rem;
        position: relative;
        top: .3rem;
    }

    .dd {
        padding: .08rem;
        /*height: 1.04rem;*/
        border-bottom: 1px solid #e3e3e4;
        background-size: contain;
        background-repeat:no-repeat;
        background-color:#fff;
        background-position:.1rem 0;
        overflow: hidden;
        display:block;
    }

    .pic4 {
        width: .84rem;
        height: .84rem;
        margin-top: .1rem;
    }

    .left {
        float: left;
    }

    .right {
        float: left;
        margin-top: .1rem;
        padding-left:1.5rem;
    }

    .right .p {
        margin-top: .12rem;
    }

    .right .p span, .p3 span {
        color: #fe4070;
    }

    .right .p2 {
        color: #999;
        margin-top: .06rem;
    }

    .p2 span, .p3 a {
        float: right;
    }

    .p3 {
        margin-top: .1rem;
    }

    .p3 a {
        color: #333;
    }

    .d1 {
        padding: 0 .08rem;
        height: .36rem;
        background: #fff;
        color: #fe4070;

    }

    .check2 {
        display: inline-block;
        width: .18rem;
        height: .18rem;
        box-sizing: border-box;
        border: 1px solid #fe4070;
        border-radius: 50%;
        text-align: center;
        margin-right: .08rem;
    }

    .i {
        line-height: .36rem;
        display: inline-block;
    }
    .pay{
        height: .49rem;
        width:100%;
        box-sizing:border-box;
        background: #fff;
        padding: 0 .08rem;
        position:fixed;
        bottom: .5rem;
        line-height: .49rem;
    }
    .sp{
        color: #333;
        margin-right: .1rem;
    }
    .sp2{
        color: #999;
        margin-right: .05rem;
    }
    .sp3{
        color: #fe4070;
    }
    .a1{
        display: inline-block;
        float: right;
        width: 1.25rem;
        height: .36rem;
        line-height: .36rem;
        background: #fe4070;
        color: #fff;
        text-align: center;
        border-radius: .18rem;
        margin-top: .07rem;
    }
</style>