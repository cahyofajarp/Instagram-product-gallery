import Vue from 'vue'

import InfiniteLoading from 'vue-infinite-loading';
Vue.use(InfiniteLoading);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const router = new VueRouter({
    routes :[
        {
            path:'/',
            name : 'home',
            component : ()=>
                import("@/views/Index.vue"),
        },
        {
            path:'/create',
            name : 'create',
            component : ()=>
                import("@/views/Create.vue"),
        },
        {
            path:'/preview',
            name : 'preview',
            component : ()=>
                import("@/views/Preview.vue"),
        },

    ],
    mode: 'history'
})

export default router