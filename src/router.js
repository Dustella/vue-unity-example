import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: ()=>import("./App.vue"),
    },
    {
        path:"/about",
        component : ()=>import("./views/VeryAbout.vue"),
    }
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route;