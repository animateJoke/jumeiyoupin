<template>
    <div class="list">
        <a v-for="(a,index) in arr" :data-id="index" :style="{background:'url('+JSON.parse(a.g_img)['320']+') no-repeat'}" :href="'#/info?g_id='+a.g_id">
            <div><p v-text="a.g_name"></p></div>
            <p>
                <span class="price">￥<i v-text="a.g_price"></i></span>
                <span class="oldprice">￥<i v-text="a.g_oldprice"></i></span>
            </p>
            <p v-text="a.g_product_desc" class="desc"></p>
        </a>
    </div>
</template>

<script>
    import $ from "jquery"

    export default {
        data(){
            return {
                arr : []
            }
        },
        mounted(){
            var self = this;
            $.ajax({
                url : "http://localhost:55555/home/list",
                type : "post",
                dataType : "json",
                data : {
                    index : 0
                }
            }).then(function(res){
                self.arr = res;
                console.log(res);
            })
        },
        computed : {}
    }
</script>

<style scoped="">
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
    .list a[data-id] div{
        padding-top:.3rem;
        height:.7rem;
    }
    .list a[data-id] div p{
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