<template>
<div class="contenedor-main">
    <div v-if="estado">
      <a class="btn btn-outline-success" v-on:click="ingresar" href="# "
                  ><b>Ingresar</b> <span class="sr-only">(current)</span></a
                >
    </div>
    <div v-else>
      <v-app id="app">
        <v-app-bar
          :clipped-left="$vuetify.breakpoint.lgAndUp"
          app
          color="silver darken-3"
          dark
        >   
          <v-btn @click="salir()" icon v-if="logueado" class="ml-5">
            <v-icon>logout</v-icon> Salir
          </v-btn>
          <v-btn :to="{ name: 'login' }" icon v-else> <v-icon>apps</v-icon> Login </v-btn>
        </v-app-bar>
        <v-content>
          <v-container>
            <v-slide-y-transition mode="out-in">
              <router-view />
            </v-slide-y-transition>
          </v-container>
        </v-content>
        <v-footer height="auto">
          <v-layout justify-center>
            <!-- <v-flex text-xs-center> -->
              <v-card flat tile color="primary" class="white--text">
                <v-card-text id="" class="black--text pt-2 justify-content-center">
                  Semana-3-113 Frontend
                </v-card-text>
              </v-card>
            <!-- </v-flex> -->
          </v-layout>
        </v-footer>
      </v-app>
    </div>
</div>  
</template>

<script>

import Login from './components/Login.vue';

export default {
  components: { Login },
  name: 'App',

    data () {
      return {
      drawer: false,
      estado: 1
      }
    },

  computed:{
    logueado(){
      return this.$store.state.usuario;
    },
  },
  created(){
    this.$store.dispatch("autoLogin");
  },
  methods:{
    salir(){
      this.$store.dispatch("salir");
      this.estado=1
    },

    ingresar(){
      this.estado=0
    },

    home(){
      this.estado=1

    }
  }
};
</script>
