<template>
    <div class="container">
      <h1 class="mt-4">Datos sobre Barreras de Accesibilidad</h1>
  
      <b-table 
        striped 
        hover 
        bordered
        responsive 
        :items="barreras" 
        :fields="campos">
      </b-table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DatosView',
    data() {
      return {
        barreras: [],
        campos: [
          { key: 'tipo', label: 'Tipo de Discapacidad', sortable: true },
          { key: 'barrera', label: 'Barrera de Accesibilidad', sortable: true },
          { key: 'impacto', label: 'Impacto', sortable: true }
        ]
      };
    },
    mounted() {
      axios.get('/data.json')
        .then(response => {
          this.barreras = response.data;
        })
        .catch(error => {
          console.error('❌ Error cargando los datos:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    font-weight: bold;
  }
  
  .container {
    max-width: 900px;
    margin: auto;
    padding: 20px;
  }
  </style>
  