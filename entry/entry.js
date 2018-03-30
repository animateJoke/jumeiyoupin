import Vue from "vue";

require("./css/reset.css");
//状态管理
import Vuex from 'vuex'

Vue.use(Vuex);
//路由管理
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import home from "./components/home.vue";

import index from "./components/home/index.vue";
import group from "./components/home/group.vue";
import cart from "./components/home/cart.vue";
import center from "./components/home/center.vue";

const router = new VueRouter({
    routes : [{
        path : "/home",
        component : home,
        children : [{
            path : "index",
            component : index
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