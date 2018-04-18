<template>
    <div class="mom">
        <a href="#" class="coupon">
            <img src="../../../img/item_8052_2048_512-ipad2048_1515383163.png" alt="">
        </a>
        <div class="sale">
            <h2><img src="../../../img/icon_title.png" alt=""><span>特惠价！ 仅限今日</span></h2>
            <a href="#">
                <img src="../../../img/item_7710_2048_1024-ipad2048_1522319724.jpeg" alt="" style="width:3.75rem">
            </a>
            <a href="#">
                <img src="../../../img/item_7710_2048_1024-ipad2048_1522722261.jpeg" alt="" style="width:3.75rem">
            </a>
        </div>
        <div style="margin:.1rem 0">
            <a href="#">
                <img src="../../../img/item_5518_1024_512-ipad2048_1520495419.png" alt="" style="width:1.85rem">
            </a>
            <a href="#">
                <img src="../../../img/item_5518_1024_512-ipad2048_1522287773.jpeg" alt="" style="width:1.85rem">
            </a>
        </div>
        <div style="margin:.1rem 0;overflow:hidden" class="sale">
            <h2><img src="../../../img/icon_title.png" alt=""><span>今日特惠！ 活动推荐</span></h2>
            <a href="#" style="float: left;">
                <img src="../../../img/item_5640_1024_1024-ipad2048_1522721635.jpeg" alt="" style="width:1.87rem;display:block">
            </a>
            <a href="#" style="float: left;">
                <img src="../../../img/item_5640_1024_1024-ipad2048_1522314469.jpeg" alt="" style="width:1.87rem;display:block">
            </a>
            <a href="#" style="float: left;">
                <img src="../../../img/item_5640_1024_1024-ipad2048_1522140278.jpeg" alt="" style="width:1.87rem;display:block">
            </a>
            <a href="#" style="float: left;">
                <img src="../../../img/item_5640_1024_1024-ipad2048_1522057115.jpeg" alt="" style="width:1.87rem;display:block">
            </a>
        </div>
        <div class="sale">
            <h2><img src="../../../img/icon_title.png" alt=""><span>疯抢专场 早10点上新！</span></h2>
        </div>
        <a class="items" v-for="a in flag?arr:[]" :href="a.url">
            <img :src="a.main" alt="" class="main">
            <div class="title">
                <p v-text="a.title"></p>
                <span>仅剩 <i v-text="parseInt(a.end_time/1000/3600/24)">00</i>天 <i v-text="parseInt(a.end_time/1000/60/60)%24">00</i> 时 <i v-text="parseInt(a.end_time/1000/60)%60">00</i> 分</span>
            </div>
            <img :src="a.logo" alt="" class="logo">
        </a>
        <div class="footer">
            <a href="#">
                <img src="../../../img/footer_bg.jpg" alt="">
            </a>
        </div>
        <p class="copy">©2016 聚美优品 Jumei.com</p>
    </div>
</template>

<script>
    const $=require("jquery");
    export default {
        data(){
            return {
                arr:[],
                flag:false
            }
        },
        mounted(){
            var self=this;
            $.ajax({
                url:"http://101.200.60.236:55555/home/mom",
                type:"get"
            }).then(function(res){
                self.arr=res;
                self.flag=true;
                setInterval(function(){
                    for(var i=0; i<self.arr.length; i++){
                        self.arr[i].end_time=self.arr[i].end_time-1000
                    }
                },1000)
            })
        }
    }
</script>

<style scoped>
    .mom{
        background-color:#eee;
        margin-bottom:.5rem;
    }
    .mom div{
        background-color:#fff;
    }
    .coupon{
        display:block;
        background-color:#fff;
    }
    .coupon img{
        width:3.75rem;
    }
    .sale{
        background-color:#fff;
    }
    .sale h2{
        text-align:center;
        font-weight:normal;
        line-height:.5rem;
    }
    .sale h2 img{
        width:.2rem;
    }
    .sale h2 span{
        padding-left:.3rem;
        color:#333;
        font-size:.2rem;
    }
    .items{
        display:block;
        overflow:hidden;
        background-color:#fff;
    }
    .items .main{
        display:block;
        width:3.75rem;
    }
    .items .title{
        float:left;
        height:.8rem;
        line-height:.3rem;
        padding-top:.1rem;
        padding-left:.2rem;
    }
    .items .title p{
        color:#333;
    }
    .items .title span{
        color:#999;
    }
    .items .logo{
        float:right;
        height:.4rem;
        padding:.2rem;
    }
    .footer{
        background-color:#fff;
        margin-top:.1rem;
    }
    .footer img{
        width:3.75rem;
    }
    .copy{
        line-height:.5rem;
        text-align:center;
        background-color:#fff;
    }
</style>