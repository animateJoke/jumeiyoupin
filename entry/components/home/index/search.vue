<template>
    <div class="search">
        <input type="text" @click="showSearch2" placeholder="搜索商品 分类 功效" class=""/>
        <!--<input type="button" value="搜索"/>-->
        <span @click="showSearch"><img :src="src" alt=""></span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                src:require("../../../img/search_list2.png")
            }
        },
        methods:{
            showSearch(){
                this.$store.state.isShow = true;
            },
            showSearch2(){
                this.$store.state.isShow2 = true;
            }
        }
    }
</script>

<style scoped>
    .search{
        padding: 0 .2rem;
    }
    input{
        width: 3rem;
        height: .28rem;
        border-radius:.14rem;
        outline: none;
        border: 0;
        background: url("../../../img/search_btn.png") no-repeat 0.8rem center #f5f5f5;
        background-size: .13rem .15rem;
        margin-top: .08rem;
        padding-left: .98rem;
        box-sizing: border-box;
    }
    img{
        width: 0.24rem;
        height: 0.17rem;
        position: relative;
        top: .04rem;
        margin-left: 0.07rem;
    }
</style>