<template>
    <div class="cognitiva">
      <h1>Barrera de Accesibilidad: Discapacidad Cognitiva</h1>
      <p>
        En la ciudad digital, muchas personas con discapacidad cognitiva encuentran difícil usar interfaces sobrecargadas, con información confusa o poco intuitiva.
      </p>
  
      <!-- BARRERA 1: Máquina de billetes con información sobrecargada -->
      <div class="barrier-container">
        <h3>Máquina de billetes complicada</h3>
        <p>
          Intenta comprar un billete en esta pantalla con exceso de información.
        </p>
        <div class="ticket-machine">
          <p class="big-text">BIENVENIDO AL TRANSPORTE DIGITAL</p>
          <p class="flashing-text">OFERTAS SOLO HOY: VIAJE 20% MÁS CARO  </p>
          <button class="fake-button">Comprar con tarjeta</button>
          <button class="fake-button">Pagar en efectivo</button>
          <button class="correct-button" @click="showSuccess">Comprar billete</button>
          <p v-if="successMessage" class="success-message"> ¡Compraste el billete! Pero, ¿fue intuitivo?</p>
        </div>
      </div>
  
      <!-- BARRERA 2: Panel de información urbana confuso -->
      <div class="barrier-container">
        <h3>Panel de información urbana con instrucciones contradictorias</h3>
        <p>Encuentra la parada correcta entre las opciones confusas:</p>
        <select v-model="selectedOption">
          <option disabled selected>Selecciona tu destino</option>
          <option>Centro - Pero no aquí</option>
          <option>Estación Norte - También es Sur</option>
          <option>Parada Principal (Secundaria)</option>
          <option value="correcto">Plaza Central</option>
        </select>
        <button @click="checkOption">Confirmar</button>
        <p v-if="incorrectMessage" class="error-message">❌ ¿Demasiado confuso? Inténtalo de nuevo.</p>
        <p v-if="correctMessage" class="success-message">✅ ¡Bien! Pero imagina lidiar con esto todos los días.</p>
      </div>
  
      <!-- Botón de navegación -->
      <b-button variant="primary" @click="$router.push('/')">Volver al inicio</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: "CognitivaView",
    data() {
      return {
        successMessage: false,
        selectedOption: "",
        incorrectMessage: false,
        correctMessage: false,
      };
    },
    methods: {
      showSuccess() {
        this.successMessage = true;
      },
      checkOption() {
        if (this.selectedOption === "correcto") {
          this.correctMessage = true;
          this.incorrectMessage = false;
        } else {
          this.incorrectMessage = true;
          this.correctMessage = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .cognitiva {
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
  
  .flashing-text {
    font-size: 18px;
    color: red;
    font-weight: bold;
    animation: flash 1s infinite;
  }
  
  @keyframes flash {
    50% {
      opacity: 0;
    }
  }
  
  .fake-button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  .correct-button {
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  /* Mensajes */
  .error-message {
    font-size: 14px;
    color: #a94442;
    font-style: italic;
  }
  
  .success-message {
    font-size: 14px;
    color: #28a745;
    font-weight: bold;
  }
  </style>
  