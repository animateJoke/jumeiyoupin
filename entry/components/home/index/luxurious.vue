<template>
    <div class="box1">
       <div class="banner">
           <div id="box">
               <ul>
                   <li>
                       <a href="#"><img src="../../../img/item_562_2048_838-ipad2048_1522837005.jpeg" alt=""></a>
                   </li>
                   <li>
                       <a href="#"><img src="../../../img/item_562_2048_838-ipad2048_1522837072.jpeg" alt=""></a>
                   </li>
               </ul>
               <ol>
                   <li :class="{'active':index==0}"></li>
                   <li :class="{'active':index==1}"></li>
               </ol>
           </div>
       </div>
        <div class="menu">
            <img src="../../../img/item_44819_512_512-ipad2048_1459308366.jpg" alt="">
            <img src="../../../img/item_44820_512_512-ipad2048_1459308381.jpg" alt="">
            <img src="../../../img/item_44822_512_512-ipad2048_1458815156.jpg" alt="">
            <img src="../../../img/item_44824_512_512-ipad2048_1458815202.jpg" alt="">
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
    import $ from "jquery"
    export default {
        data(){
            return {
                arr:[],
                index:0,
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
    .box1{
        margin-bottom:.5rem;
    }
    .banner{
        width:3.75rem;
        position:relative;
    }
    .banner div::-webkit-scrollbar{
        display:none;
    }
    .banner div{

        overflow-x:auto;
    }
    .banner ul{
        width:7.5rem;
        overflow:hidden;
    }
    .banner ul li{
        width:3.75rem;
        float:left;
    }
    .banner ul li a{
        display:block;
        width:3.75rem;
    }
    .banner ul li img{
        display:block;
        width:3.75rem;
    }
    .banner ol{
        position:absolute;
        right:.1rem;
        bottom:.1rem;
    }
    .banner ol li{
        float:left;
        margin:.1rem;
        width:.1rem;
        height:.1rem;
        border-radius: 50%;
        background-color:#fff;
    }
    .banner ol li.active{
        background-color:red;
    }
    .menu img{
        float:left;
        width:25%;
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