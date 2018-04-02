<template>
    <div id="search" :style="{display:ss?'block':'none'}">
        <div class="top">
            <img :src="src" alt="" class="left" @click="hide">
            <input type="text" placeholder="搜索商品名称、品牌、功效">
            <a href="#">搜索</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                src: require("../../../img/left_arrow.png")
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
</style>