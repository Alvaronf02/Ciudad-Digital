<template>
    <div class="baja-vision">
      <h1>Barrera de Accesibilidad: Discapacidad de Baja Visión</h1>
      <p>
        En esta sección, experimentaremos dificultades de contraste y tamaño de texto, como ocurre en 
        muchas interfaces urbanas mal diseñadas.
      </p>
  
      <!-- Simulación de información poco accesible -->
      <div class="info-panel">
        <p class="low-contrast-text">
          Información de horarios de autobuses: <br />
          Línea 1 - 10:30 AM / Línea 2 - 11:00 AM / Línea 3 - 11:15 AM
        </p>
      </div>
  
      <p>
        Las personas con baja visión pueden tener problemas para leer textos con poco contraste 
        o con tamaño reducido. 
      </p>
  
      <!-- Botón de navegación -->
      <b-button variant="primary" @click="$router.push('/')">Volver al inicio</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BajaVisionView'
  }
  </script>
  
  <style scoped>
  .baja-vision {
    text-align: center;
    padding: 20px;
  }
  
  .info-panel {
    background: #e0e0e0;
    padding: 15px;
    margin: 20px auto;
    max-width: 600px;
    border-radius: 5px;
  }
  
  .low-contrast-text {
    font-size: 12px;
    color: #c0c0c0; /* Texto de bajo contraste */
    letter-spacing: 0.5px;
  }
  </style>
  