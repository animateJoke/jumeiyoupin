<template>
    <div id="search" :style="{display:ss?'block':'none'}">
        <div class="top">
            <img :src="src" alt="" class="left" @click="hide">
            <input type="text" placeholder="搜索商品名称、品牌、功效" v-model="name">
            <a href="#" @click="sea">搜索</a>
        </div>

        <div class="list1">
            <a v-for="(a,index) in arr5" :style="{background:'url('+JSON.parse(a.g_img)['320']+') no-repeat'}" :href="'#/info?g_id='+index">
                <div><p v-text="a.g_name"></p></div>
                <p>
                    <span class="price">￥<i v-text="a.g_price"></i></span>
                    <span class="oldprice">￥<i v-text="a.g_oldprice"></i></span>
                </p>
                <p v-text="a.g_product_desc" class="desc"></p>
            </a>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"
    export default {
        data() {
            return {
                src: require("../../../img/left_arrow.png"),
                name:"",
                arr5:[]
            }
        },
        computed: {
            ss() {
                return this.$store.state.isShow2
            }
        },
        methods:{
            hide(){
                this.$store.state.isShow2 = false;
            },
            sea(){
                var self=this
                $.ajax({
                    type:"POST",
                    url:"http://101.200.60.236:55555/home/search",
                    data:{
                        name:self.name
                    }
                }).then(function (res) {
                    self.arr5=res
                })
            }
        }
    }
</script>

<style scoped>
    #search {
        border: 1px solid #e2e2e3;
        position: fixed;
        z-index: 9999;
        top: 0;
        background: #fff;
        height: 10rem;
        padding: 0 .12rem;
        width: 100%;
        overflow:auto;
    }

    .top {
        width: 3.75rem;
        height: .44rem;
        border-bottom: 1px solid #e2e2e3;
    }

    .left {
        width: .08rem;
        height: .14rem;
        margin-top: .15rem;
        margin-left: .11rem;
    }

    input {
        width: 2.65rem;
        height: .29rem;
        border-radius: .14rem;
        border: 0;
        background: url("../../../img/search_btn.png") no-repeat 0.15rem center #f5f5f5;
        background-size: .12rem;
        margin-left: .2rem;
        font-size: 0.13rem;
        color: #a9a9a9;
        padding-left: .33rem;
        box-sizing: border-box;
    }

    a {
        font-size: .13rem;
        color: #999;
        margin-left: .12rem;
    }

    .list1{
        padding-bottom:.5rem;
    }
    .list1 a{
        display:block;
        box-sizing:border-box;
        padding-left:1.6rem;
        height:1.5rem;
        line-height:.2rem;
        background-size:cover;
        border-bottom: 1px solid #e3e3e4;
    }
    .list1 a div{
        padding-top:.3rem;
        height:.7rem;
    }
    .list1 a div p{
        color:#666
    }
    .price{
        color:red;
    }
    .price i,.oldprice i{
        font-size:20px;
    }
    .oldprice{
        color:#ccc;
        text-decoration:line-through;
    }
    .desc{
        color:#ccc;
    }
</style>