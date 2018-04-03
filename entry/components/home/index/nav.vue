<template>
    <div class="nav">
        <ul>
            <li>
                <a href="#/home/index1/index2" @click="fn('index2')" :class="{'active':index=='index2'}">首页</a>
            </li>
            <li>
                <a href="#/home/index1/free" @click="fn('free')"  :class="{'active':index=='free'}">急速免税店</a>
            </li>
            <li>
                <a href="#/home/index1/mom" @click="fn('mom')"  :class="{'active':index=='mom'}">母婴</a>
            </li>
            <li>
                <a href="#/home/index1/luxurious"  @click="fn('luxurious')" :class="{'active':index=='luxurious'}">轻奢</a>
            </li>
            <li>
                <a href="#/home/index1/brand" @click="fn('brand')"  :class="{'active':index=='brand'}">名牌</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                index:window.location.href.split("index1")[1].split("/")[1]
            }
        },
        methods:{
            fn(str){
                this.index=str
            }
        }
    }
</script>

<style scoped="">
    .nav::-webkit-scrollbar{
        display:none;
    }
    .nav{
        width:100%;
        overflow:auto;
        border-bottom:.01rem solid #ccc;
    }
    .nav ul{
        width:150%;
        overflow:hidden;
    }
    .nav ul li{
        float:left;
        padding:0 .2rem;
        line-height:.3rem;
    }
    .nav ul li a{
        line-height:.4rem;
        display:block;
        color:#333;
        text-decoration:none;
    }
    .nav ul li a.active{
        color:#fe4086;
        border-bottom:.02rem solid #fe4086;
    }
</style>