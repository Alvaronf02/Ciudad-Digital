<template>
    <div class="motriz">
      <h1>Barrera de Accesibilidad: Discapacidad Motriz</h1>
      <p>
        En una ciudad digital, muchas personas con movilidad reducida encuentran complicado interactuar con pantallas táctiles o sistemas digitales sin opciones alternativas.
      </p>
  
      <!-- BARRERA 1: Pantalla táctil inaccesible -->
      <div class="barrier-container">
        <h3>Pantalla de compra de billetes sin opción de accesibilidad</h3>
        <p>
          Intenta hacer clic en los botones de la pantalla. Algunos no responden bien o están mal ubicados para usuarios con movilidad reducida.
        </p>
        <div class="ticket-machine">
          <p class="big-text">Compra tu billete</p>
          <button class="fake-button">Tarjeta</button>
          <button class="fake-button">Efectivo</button>
          <button class="fake-button disabled">Confirmar (No funciona)</button>
          <p v-if="errorMessage" class="error-message">❌ ¿Frustrante? Así es para muchos usuarios.</p>
        </div>
        <button @click="showError">Intentar Confirmar</button>
      </div>
  
      <!-- BARRERA 2: Navegación solo con teclado -->
      <div class="barrier-container">
        <h3>Navega sin usar el ratón</h3>
        <p>Intenta moverte solo con el teclado. Algunas opciones no son accesibles.</p>
        <input type="text" placeholder="Escribe tu destino" class="input-field">
        <button class="fake-button" disabled>Buscar</button>
        <p class="info-text">Este botón no puede activarse con la tecla "Enter".</p>
      </div>
  
      <!-- Botón de navegación -->
      <b-button variant="primary" @click="$router.push('/')">Volver al inicio</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: "MotrizView",
    data() {
      return {
        errorMessage: false,
      };
    },
    methods: {
      showError() {
        this.errorMessage = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .motriz {
    text-align: center;
    padding: 20px;
  }
  
  /* Barreras */
  .barrier-container {
    background: #f8d7da;
    padding: 15px;
    margin: 20px auto;
    max-width: 600px;
    border-radius: 5px;
  }
  
  /* Máquina de billetes */
  .ticket-machine {
    background: #e3e3e3;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
  }
  
  .big-text {
    font-size: 20px;
    font-weight: bold;
  }
  
  .fake-button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  .fake-button.disabled {
    background-color: grey;
    cursor: not-allowed;
  }
  
  .error-message {
    font-size: 14px;
    color: #a94442;
    font-style: italic;
  }
  </style>
  