import Vue from "vue";
import Vuex from "vuex";
import decode from "jwt-decode";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: null,
        usuario: null
    },
    mutations: {
        setToken(state, token) {
            state.accessToken = token;
        },
        setUsuario(state, usuario) {
            state.usuario = usuario;
        }
    },
    actions: {
        guardarToken({ commit }, token) {
            commit("setToken", token)
            commit("setUsuario", decode(token))
            localStorage.setItem("accessToken", token)
        },
        autoLogin({ commit }) {
            console.log("autologin");
            let token = localStorage.getItem("accessToken");
            if (token) {
                commit("setToken", token);
                commit("setUsuario", decode(token));
            }
            router.push({ name: 'home' }).catch(() => {});

        },
        salir({ commit }) {
            commit("setToken", null);
            commit("setUsuario", null);
            localStorage.removeItem("accessToken");
            router.push({ name: 'login' });
        }
    },
    modules: {}
});