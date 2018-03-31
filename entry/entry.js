import Vue from "vue";

require("./css/reset.css");
//状态管理
import Vuex from 'vuex'

Vue.use(Vuex);
//路由管理
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 一级路由
import home from "./components/home.vue";

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




//路由注册
const router = new VueRouter({
    routes : [{
        path : "/home",
        component : home,
        children : [{
            path : "index1",
            component : index1,
            children:[{
                path:"index2",
                component : index2,
            },{
                path:"free",
                component : free,
            },{
                path:"mom",
                component : mom,
            },{
                path:"luxurious",
                component : luxurious,
            },{
                path:"brand",
                component : brand,
            }]
        }, {
            path : "group",
            component : group
        }, {
            path : "cart",
            component : cart
        }, {
            path : "center",
            component : center
        }]
    }]
});
new Vue({
    el : "#app",
    template : `
        <div>
            <router-view></router-view>
        </div>
    `,
    router

});