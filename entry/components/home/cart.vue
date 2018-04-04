<template>
    <div class="cart">
        <div class="head">
            <a href="#"><img :src="src" alt="" class="pic"></a>
                购物车
            <a href="#"><img :src="src1" alt="" class="pic2"></a>
        </div>
        <div class="main">
            <p>您的购物车中没有商品,请先去挑选心爱的商品吧!</p>
            <a href="#" class="btn">去逛逛</a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                src:require("../../img/left_arrow.png"),
                src1:require("../../img/home.png")
            }
        }
    }
</script>

<style scoped>
    .head{
        height: .41rem;
        border-bottom: 1px solid #e3e3e4;
        padding: 0 .14rem;
        box-sizing: border-box;
        text-align: center;
        line-height: .41rem;
        font-size: .14rem;
        color: #333;
    }
    .pic{
        width: .07rem;
        height: .13rem;
        margin-top: .14rem;
        float: left;
    }
    .pic2{
        float: right;
        width: .18rem;
        height: .18rem;
        margin-top: .12rem;
    }
    .main{
        height: 5.72rem;
        background: url("../../img/cart_03.jpg") no-repeat center 2.03rem;
        text-align: center;
        box-sizing: border-box;
        padding-top: 3rem;
    }
    .main p{
        font-size: .13rem;
        color: #333;
    }
    .btn{
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
</style>