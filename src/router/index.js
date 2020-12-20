import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../components/Login.vue';
import store from '../store/index';


Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            public: true
        }
    },
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            public: true
        }

    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.public)) {
        next();
    } else if (store.state.usuario) {
        if (to.matched.some(record => record.meta.auth)) {
            console.log(store.state.usuario);
            next();
        }
    } else {
        next({ name: 'login' });
    }
})

export default router;