<template>
    <div class="visual-total">
      <h1>Explorando la Ciudad Digital - Discapacidad Visual Total</h1>
      <p>
        Imagina intentar moverte por la ciudad usando herramientas digitales que no están adaptadas.
      </p>
      <p style="color: #333">
        Aquí presentamos una simulación de un <strong>mapa de transporte público</strong> sin descripciones accesibles para lectores de pantalla.
      </p>
  
      <!-- Mapa inaccesible -->
      <div class="map-container">
        <img src="../assets/plano.jpg" alt="" class="map-image" />
        <p class="hidden-description" aria-hidden="true">
          (Descripción oculta de la imagen para simular falta de accesibilidad)
        </p>
      </div>
  
      <p>
        Los usuarios con discapacidad visual no pueden interpretar la información si no existe un 
        <strong>texto alternativo adecuado.</strong> 
      </p>
  
      <!-- Botón de navegación -->
      <b-button variant="primary" @click="$router.push('/')">Volver al inicio</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VisualTotalView'
  }
  </script>
  
  <style scoped>
  .visual-total {
    text-align: center;
    padding: 20px;
  }
  
  .map-container {
    border: 2px solid #ccc;
    padding: 15px;
    max-width: 600px;
    margin: 20px auto;
    background: #f5f5f5;
  }
  
  .map-image {
    width: 100%;
    filter: grayscale(100%);
  }
  
  .hidden-description {
    visibility: hidden;
    font-size: 0.9em;
    color: red;
  }
  </style>
  