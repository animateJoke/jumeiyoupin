import Vue from "vue";

require("./css/reset.css");
require("./css/iconfont/iconfont.css");

import $ from "jquery"
require('./jquery.cookie')
import getAjax from "./ajax.js"

//状态管理
import Vuex from 'vuex'

Vue.use(Vuex);
//路由管理
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 一级路由
import home from "./components/home.vue";
import info from "./components/info.vue";
import register from "./components/register.vue";
import login from "./components/login.vue";

import ginfo from "./components/ginfo.vue";
import minfo from "./components/minfo.vue";
import binfo from "./components/binfo.vue";
import jinfo from "./components/jinfo.vue";
import finfo from "./components/finfo.vue";

import fenye from "./components/fenye.vue"


// 二级路由
import index1 from "./components/home/index.vue";
import group from "./components/home/group.vue";
import cart from "./components/home/cart.vue";
import center from "./components/home/center.vue";

// 首页的三级级路由
import index2 from "./components/home/index/index.vue";
import free from "./components/home/index/free.vue";
import mom from "./components/home/index/mom.vue";
import luxurious from "./components/home/index/luxurious.vue";
import brand from "./components/home/index/brand.vue";
import nav from "./components/home/group/nav.vue";
import rmd from "./components/home/group/rmd.vue";
import mama from "./components/home/group/mama.vue";
import beauti from "./components/home/group/beauti.vue";
import food from "./components/home/group/food.vue";
import jiaju from "./components/home/group/jiaju.vue";

const store = new Vuex.Store({
    //消息

    state: {
        num:0,
        numFree:0,
        num1:0,
        isLogin:false,
 		numMama:0,
 		numBea:0,
 		numFod:0,
 		numJj:0,
        list:[],
        freeList:[],
        list1:[],
        mama:[],
        beauti:[],
        food:[],
        jiaju:[],
        isShow:false,
        isShow2:false,
        cartNum:0
    },
    //获取值得方法
    getters : {
        getList(state){
            //处理数据
            return state.list
        },
        getList1(state) {
            //处理数据
            return state.list1
        }
       
    }
});

//路由注册
const router = new VueRouter({
    routes : [{
        path : "/home",
        component : home,
        children : [{
            path : "index1",
            component : index1,
            children : [{
                path : "index2",
                component : index2,
            }, {
                path : "free",
                component : free,
            }, {
                path : "mom",
                component : mom,
            }, {
                path : "luxurious",
                component : luxurious,
            }, {
                path : "brand",
                component : brand,
            }]
        }, {
            path : "group",
            component : group,
            children:[{
            	path:"nav",
            	component : nav,
            },{
            	path:"rmd",
            	component : rmd,
            },{
            	path:"mama",
            	component : mama,
            },{
            	path:"beauti",
            	component : beauti,
            },{
            	path:"food",
            	component : food,
            },{
            	path:"jiaju",
            	component : jiaju,
            }]
        }, {
            path : "cart",
            component : cart
        }, {
            path : "center",
            component : center
        }]
    }, {
        path : "/info",
        component : info
    },{
        path:"/ginfo",
        component : ginfo
	},{
        path:"/minfo",
        component : minfo
	},{
        path:"/binfo",
        component : binfo
	},{
        path:"/jinfo",
        component : jinfo
	},{
        path:"/finfo",
        component : finfo
	},{
        path:"/fenye",
        component : fenye
    },{
    	path:"/register",
        component : register
    },{
    	path:"/login",
        component : login
    },{
        path: '/',
        redirect: '/home/index1/index2'
    }]
});
new Vue({
    el : "#app",
    template : `
        <div>
            <router-view></router-view>
        </div>
    `,
    router,
    store,
    beforeCreate(){
        (function(self){
            if(sessionStorage.getItem('user')==null){
                var arr=JSON.parse($.cookie('cart')||'[]');
                for(var i=0; i<arr.length; i++){
                    self.$store.state.cartNum+=parseInt(arr[i].num)
                }
            }else {
                $.ajax({
                    url : "http://101.200.60.236:55555/home/getCart",
                    type : "post",
                    dataType : "json",
                    data : {
                        u_id : sessionStorage.getItem("user")
                    }
                }).then(function(res){
                    for(var i=0; i<res.length; i++){
                        self.$store.state.cartNum+=parseInt(res[i].num)
                    }
                })

            }
        })(this);
        getAjax("http://101.200.60.236:55555/home/list",this.$store.state.num,function(arr){
            this.$store.state.list =this.$store.state.list.concat(arr);
        }.bind(this));
        getAjax("http://101.200.60.236:55555/home/list",this.$store.state.numFree,function(arr){
            this.$store.state.freeList =this.$store.state.freeList.concat(arr);
        }.bind(this));
        getAjax("http://101.200.60.236:55555/group/good",this.$store.state.num1,function(arr){
            this.$store.state.list1 =this.$store.state.list1.concat(arr);
        }.bind(this));
        getAjax("http://101.200.60.236:55555/group/mama",this.$store.state.numMama,function(arr){
            this.$store.state.mama =this.$store.state.mama.concat(arr);
        }.bind(this));
        getAjax("http://101.200.60.236:55555/group/beauti",this.$store.state.numBea,function(arr){
            this.$store.state.beauti =this.$store.state.beauti.concat(arr);
        }.bind(this));
        getAjax("http://101.200.60.236:55555/group/food",this.$store.state.numFod,function(arr){
            this.$store.state.food =this.$store.state.food.concat(arr);
        }.bind(this));
        getAjax("http://101.200.60.236:55555/group/jiaju",this.$store.state.numJj,function(arr){
            this.$store.state.jiaju =this.$store.state.jiaju.concat(arr);
        }.bind(this))
        
    }

});