<template>
  <div>
    <div class="container-fluid">
      <div class="row mt-md-5 mt-sm-5 mt-xs-5">
        <div
          v-for="(art, indice) of datos"
          :key="art.id"
          class="col-lg-6 col-xs-12 border"
        >
          <div v-if="indice <= 3">
            <div class="d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import axios from 'axios';
export default {
     mounted() {
     axios.get('articulo/list')
    .then(response => (this.datos = response.data));

    },
    
} */
</script>
