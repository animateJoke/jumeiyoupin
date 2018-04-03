<template>
	<div class="list">
        <a v-for="(a,index) in getList1" :data-id="index"  :href="'#/ginfo?id='+index">
        	<img :src="a.image"/>
            <div><span v-text="a.name_tag"></span><span v-text="a.name_s"></span></div>
            <p class="p">
                <span class="price"><i v-text="a.new_price"></i></span>
                <span class="oldprice"><i v-text="a.old_price"></i></span>
            </p>
            <p v-text="a.sig_price" class="desc"></p>
            <p>去开团</p>
        </a>
        <button @click="jiazai">加载更多</button>
    </div>
</template>

<script>
	import $ from "jquery"
    import getAjax1 from "../../../ajax1.js"
    export default {
        data(){
          return {
          }
        },
        mounted(){
			
        },
        computed : {
            getList1(){
                return this.$store.state.list1
            }
        },
        methods:{
            jiazai() {
                this.$store.state.num1++;
                getAjax1(this.$store.state.num1,function(arr){
                    this.$store.state.list1 =this.$store.state.list1.concat(arr);
                }.bind(this))
            },
        }
    }
</script>

<style scoped="">
    .list{
        padding-bottom:.5rem;
       
    }
    .list a{
        display:block;
        box-sizing:border-box;
        /*padding-left:1.6rem;*/
        width: 100%;
       margin-bottom: .08rem;
       background: white;
        
        line-height:.2rem;
        background-size:1rem 1rem;
    }
    img{
    	width: 1.5rem;
    	height: 1.5rem;
    	margin: .05rem 0 .05rem 1.2rem;
    	
    	
    }
    .list a[data-id] div{
       background: white;
        padding-left: .12rem;
    }
    .list a[data-id] div span:first-child{
        color:#fe4070;
    }
    .list a[data-id] div span{
        color:#666;
    }
    .list a[data-id] .p{
    	padding-top: .1rem;
    }
    
    .list a[data-id] p:last-child{
    	float: right;
    	width: .92rem;
    	height: .28rem;
    	text-align: center;
    	line-height: .28rem;
    	background: #fe4070;
    	color: white;
    	border-radius: .14rem;
    	margin-top: -.4rem;
    	margin-right: .1rem;
    }
    .price{
        color:#fe4070;
        padding-left: .12rem;
    }
    .price i{
        font-size:14px;
    }
    .oldprice i{
    	font-size:9px;
    }
    .oldprice{
        color:#ccc;
        
        text-decoration:line-through;
    }
    .desc{
        color:#ccc;
        padding-left: .12rem;
    }
</style>