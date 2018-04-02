<template>
    <div class="info">
        <div class="header">
            <a class="iconfont" @click="goBack">&#xe6b0;</a>
            <span v-text="getList?getList['g_title']:'正在加载中...'"></span>
            <a href="#/home/index1/index2" class="iconfont">&#xe66c;</a>
        </div>
        <div class="banner">
            <ul :style="{width:(getList?JSON.parse(getList.g_imgList).length:0)*3.75+'rem',overflow:'hidden'}">
                <li v-for="a in getList?JSON.parse(getList.g_imgList):[]">
                    <img :src="a" alt="">
                </li>
            </ul>
        </div>
        <div class="content">
            <p>
                <span v-text="'￥'+(getList?getList.g_price:0)" class="price"></span>
                <span v-text="'￥'+(getList?getList.g_oldprice:0)" class="oldprice"></span>
                <span v-text="getList?getList.g_buynum:''"></span>
            </p>
            <p><span v-text="getList?getList.g_type:''" class="type"></span> <span v-text="getList?getList.g_name:''" class="name"></span></p>
            <p><span v-text="getList?getList.g_stages:''" class="stages"></span></p>
            <p style="padding-top: .1rem;overflow:hidden"><span class="left">运费</span><span v-text="getList?getList.g_freight:''" class="freight"></span></p>
            <div style="padding-top: .1rem;overflow:hidden"><span class="left">说明</span>
                <div class="msg"><span v-for="a in JSON.parse(getList?getList.g_msg:'[]')" v-text="getList?a.name:''"></span></div>
            </div>
        </div>
        <div class="box" v-html="getList?getList.g_html:''"></div>
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
                id : window.location.href.split("?")[1].split("=")[1]
            }
        },
        computed : {
            getList(){
                console.log(this.$store.state.list[this.id]);
                return this.$store.state.list[this.id]
            }
        },
        methods : {
            goBack(){
                window.history.back()
            }
        }
    }
</script>

<style scoped="">
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
    .banner{
        overflow:hidden;
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
    .content .name{
        line-height:.24rem;
    }
    .content .left{
        float:left;
        width:.75rem;
        color:#999
    }
    .content .msg,.freight{
        float:right;
        width:2.7rem;
        color:#333
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
        background:linear-gradient(142deg,#ff5593,#fe4070);
        color: #fff;
    }
</style>