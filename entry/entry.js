import Vue from "vue";

require("./css/reset.css");
require("./css/iconfont/iconfont.css");
import $ from "jquery"
import getAjax from "./ajax.js"
import getAjax1 from "./ajax1.js"

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



const store = new Vuex.Store({
    //消息

    state: {
        num:0,
        num1:0,
 
        list:[],
        list1:[],
        
        isShow:false,
        isShow2:false

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
        path:"/fenye",
        component : fenye

    },{
    	path:"/register",
        component : register
    },{
    	path:"/login",
        component : login
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

        getAjax(this.$store.state.num,function(arr){
            this.$store.state.list =this.$store.state.list.concat(arr);
        }.bind(this)),
        getAjax1(this.$store.state.num1,function(arr){
            this.$store.state.list1 =this.$store.state.list1.concat(arr);
        }.bind(this))
        
    }

});