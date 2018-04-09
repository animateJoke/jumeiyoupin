<template>
    <div class="footer">
        <ul>
            <li>
                <a href="#/home/index1/index2" @click="fn('index1')" :class="{'active':index=='index1'}"><i class="iconfont">&#xe66c;</i><p>首页</p></a>
            </li>
            <li>
                <a href="#/home/group/rmd" @click="fn('group')" :class="{'active':index=='group'}"><i class="iconfont">&#xe63d;</i><p>拼团</p></a>
            </li>
            <li>
                <a href="#/home/cart" @click="fn('cart')" :class="{'active':index=='cart'}"><i class="iconfont">&#xe600;</i><p>购物车</p></a>
            </li>
            <li>
                <a href="#/home/center" @click="fn('center')" :class="{'active':index=='center'}"><i class="iconfont">&#xe63a;</i><p>我的</p></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                index:window.location.href.split("#")[1].split("/")[2]
            }
        },
        methods:{
            fn(str){
                this.index=str
            }
        }
    }
</script>

<style scoped>
    .footer{
        position:fixed;
        bottom:0;
        left: 0;
        height:.5rem;
        background-color:#fff;
        width:100%;
        border-top:1px solid #ccc;
    }
    .footer ul{
        display:flex;
        width:100%;
        height:100%;
    }
    .footer ul li{
        padding-top:.05rem;
        flex:1;
        line-height:.25rem;
        text-align:center;
    }
    .footer ul li a{
        display:block;
        color:#ccc;
        text-decoration:none;
    }
    .footer ul li a.active{
        color:red;
    }
</style>