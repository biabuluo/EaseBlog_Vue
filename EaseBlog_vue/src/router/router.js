import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
    {path:"/test",component: ()=> import("../views/Test.vue")},
    {path:"/login",component: ()=> import("../views/Login.vue")}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export {router, routes};