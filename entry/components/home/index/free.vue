<template>
    <div class="free">
        <div class="header">
            <div>
                <i></i>
                <p>海外直供</p>
            </div>
            <div>
                <i></i>
                <p>原装正品</p>
            </div>
            <div>
                <i></i>
                <p>急速到货</p>
            </div>
            <div>
                <i></i>
                <p>轻松退货</p>
            </div>
        </div>
        <div class="list">
            <a v-for="a in getList" :style="{background:'url('+JSON.parse(a.g_img)['320']+') no-repeat'}" :href="'#/info?g_id='+a.g_id">
                <div>
                    <p v-text="a.g_name"></p>
                </div>
                <p>
                    <span class="price">￥<i v-text="a.g_price"></i></span>
                    <span class="oldprice">￥<i v-text="a.g_oldprice"></i></span>
                </p>
            </a>
            <span @click="jiazai" class="load">加载更多</span>
        </div>
    </div>
</template>

<script>
    const $=require("jquery");
    import getAjax from "../../../ajax.js"

    export default {
        data(){
            return {}
        },
        mounted(){

        },
        computed : {
            getList(){
                return this.$store.state.freeList
            }
        },
        methods : {
            jiazai(){
                this.$store.state.numFree++;
                getAjax("http://101.200.60.236:55555/home/list",this.$store.state.numFree, function(arr){
                    this.$store.state.freeList = this.$store.state.freeList.concat(arr);
                }.bind(this))
            },
        }
    }
</script>

<style scoped>
    .free{
        background-color:#eee;
    }
    .header{
        background-color:#fff;
        display:flex;
        height:1.06rem;
        margin-bottom:.08rem;
    }
    .header div{
        flex:1;
        text-align:center;
        padding-top:.2rem;
    }
    .header div i{
        display:inline-block;
        width:.5rem;
        height:.5rem;
        border-radius:50%;
    }
    .header div p{
        line-height:.3rem;
        color:#747474
    }
    .header div:nth-child(1) i{
        background:#fe4070 url(../../../img/interantion_shipping.png) no-repeat center;
    }
    .header div:nth-child(2) i{
        background:#fe4070 url(../../../img/genuine_guarantee.png) no-repeat center;
    }
    .header div:nth-child(3) i{
        background:#fe4070 url(../../../img/global_delivery.png) no-repeat center;
    }
    .header div:nth-child(4) i{
        background:#fe4070 url(../../../img/return_guarantee_7.png) no-repeat center;
    }
    .list{
        background-color:#fff;
        padding-bottom:.5rem;
    }
    .list a{
        display:block;
        box-sizing:border-box;
        padding-left:1.6rem;
        height:1.5rem;
        line-height:.2rem;
        background-size:cover;
    }
    .list a div{
        padding-top:.3rem;
        height:.7rem;
    }
    .list a div p{
        color:#666
    }
    .price{
        color:red;
    }
    .price i, .oldprice i{
        font-size:20px;
    }
    .oldprice{
        color:#ccc;
        text-decoration:line-through;
    }
    .list .load{
        display:block;
        text-align:center;
        color:#ccc;
        line-height:.5rem;
    }
</style>