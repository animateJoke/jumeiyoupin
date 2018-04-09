<template>
    <div>
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