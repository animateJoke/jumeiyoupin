<template>
    <div class="list">
        <a v-for="a in getList" :style="{background:'url('+JSON.parse(a.g_img)['320']+') no-repeat'}" :href="'#/info?g_id='+a.g_id">
            <div><p v-text="a.g_name"></p></div>
            <p>
                <span class="price">￥<i v-text="a.g_price"></i></span>
                <span class="oldprice">￥<i v-text="a.g_oldprice"></i></span>
            </p>
            <p v-text="a.g_product_desc" class="desc"></p>
        </a>
        <span @click="jiazai" class="load">加载更多</span>
    </div>
</template>

<script>
    import $ from "jquery"
    import getAjax from "../../../ajax.js"
    export default {
        data(){
          return {
          }
        },
        mounted(){
//            console.log(this.$store.state.isLogin);
        },
        computed : {
            getList(){
                return this.$store.state.list
            }
        },
        methods:{
            jiazai() {
                this.$store.state.num++;
                getAjax("http://localhost:55555/home/list",this.$store.state.num,function(arr){
                    this.$store.state.list =this.$store.state.list.concat(arr);
                }.bind(this))
            },
        }
    }


</script>

<style scoped>
    .list{
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
    .price i{
        font-size:.2rem;
    }
    .oldprice i{
        font-size:.14rem;
    }
    .oldprice{
        color:#ccc;
        text-decoration:line-through;
    }
    .desc{
        color:#ccc;
    }
    .load{
        display:block;
        text-align:center;
        color:#ccc;
        line-height:.5rem;
    }
</style>