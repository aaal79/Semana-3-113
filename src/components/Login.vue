<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 lg5 x14 mt-2>
      <v-card>
        <v-toolbar dark color="silver blue">
          <v-toolbar-title> Usuario </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="email"
            autofocus
            color="accent"
            label="Email"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            color="accent"
            label="Password"
            required
          >
          </v-text-field>
          <v-flex class="red--text" v-if="errorM">
            {{ errorM }}
          </v-flex>
        </v-card-text>
        <v-card-actions class="px-3 pb-3">
          <v-flex text-xs-right>
            <v-btn @click="ingresar()" color="primary">Ingresar</v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      errorM: null,
    };
  },

  methods: {
    ingresar() {
      axios
        .post("auth/signin", { email: this.email, password: this.password })
        .then((respuesta) => {
          console.log("data: " + respuesta.data);
          return respuesta.data;
        })
        .then((data) => {
          console.log("dispatch: " + data.accessToken);
          this.$store.dispatch("guardarToken", data.accessToken);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          //console.log(eror);
          this.errorM = null;
          console.log(error.response.status);
          if (error.response.status == 401) {
            console.log("hola");
            this.errorM = "Las credenciales son incorrectas";
          } else if (error.response.status == 404) {
            this.errorM = "El usuario no existe";
          } else {
            this.errorM = "Ocurrió un error con el servidor";
          }
        });
    },
  },
};
</script>
