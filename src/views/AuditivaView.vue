<template>
    <div class="auditiva">
      <h1>Barrera de Accesibilidad: Discapacidad Auditiva</h1>
      <p>
        Imagina caminar por la ciudad sin poder escuchar anuncios importantes o señales de advertencia.
        Aquí experimentaremos cómo la falta de alternativas visuales dificulta la navegación en la ciudad digital.
      </p>
  
      <!-- Simulación de una alerta sonora sin alternativa visual -->
      <div class="audio-barrier">
        <p><strong>Señal de advertencia: 🚦⚠️</strong></p>
        <p class="hidden-message">(Aquí debería haber un sonido de alerta, pero no hay alternativa visual clara).</p>
      </div>
  
      <!-- Video sin subtítulos -->
      <div class="video-container">
        <p>Este video contiene instrucciones importantes, pero no tiene subtítulos.</p>
        <video controls>
          <source src="../assets/sample-video.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
  
      <!-- Botón de navegación -->
      <b-button variant="primary" @click="$router.push('/')">Volver al inicio</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuditivaView'
  }
  </script>
  
  <style scoped>
  .auditiva {
    text-align: center;
    padding: 20px;
  }
  
  .audio-barrier {
    background: #ffcccb;
    padding: 15px;
    margin: 20px auto;
    max-width: 600px;
    border-radius: 5px;
    font-weight: bold;
  }
  
  .hidden-message {
    font-size: 14px;
    color: #a0a0a0;
    font-style: italic;
  }
  
  .video-container {
    margin-top: 20px;
  }
  </style>
  