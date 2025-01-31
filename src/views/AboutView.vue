<template>
  <div class="about">
    <h1>Sobre el Proyecto</h1>
    <p class="intro-text">
      "Explorando la Ciudad Digital" es un proyecto que busca concienciar sobre las barreras de accesibilidad que enfrentan las personas con discapacidad en entornos digitales urbanos. 
      A través de experiencias interactivas, queremos que los usuarios sin discapacidad experimenten de primera mano los desafíos que otros enfrentan a diario.
    </p>

    <div class="content-section">
      <h2>📌 ¿Por qué esta web?</h2>
      <p>
        La tecnología es parte fundamental de la vida en la ciudad: desde comprar un billete de metro hasta usar un cajero automático o navegar en una web del ayuntamiento.
        Sin embargo, muchas interfaces digitales no están diseñadas para ser inclusivas. 
        Aquí, te invitamos a experimentar estas dificultades y reflexionar sobre cómo mejorar la accesibilidad.
      </p>
    </div>

    <div class="content-section">
      <h2>🔍 ¿Qué encontrarás aquí?</h2>
      <p>
        Cada sección de la web presenta una discapacidad diferente (visual, auditiva, motriz y cognitiva) junto con **dos barreras digitales** representadas en escenarios cotidianos. 
        Estas barreras han sido diseñadas intencionalmente para que experimentes cómo afecta la falta de accesibilidad a la navegación digital.
      </p>
    </div>

    <div class="content-section">
      <h2>♿ Barreras de accesibilidad presentadas</h2>
      <ul class="barriers-list">
        <li>👁️ <strong>Discapacidad Visual:</strong> Texto mal contrastado, sin compatibilidad con lectores de pantalla.</li>
        <li>🦻 <strong>Discapacidad Auditiva:</strong> Videos sin subtítulos, alertas sin avisos visuales.</li>
        <li>🦿 <strong>Discapacidad Motriz:</strong> Interfaces táctiles difíciles de usar, navegación sin teclado.</li>
        <li>🧠 <strong>Discapacidad Cognitiva:</strong> Información desordenada, instrucciones confusas.</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>💡 Reflexión sobre el proyecto</h2>
      <p>
        Queremos fomentar la empatía digital. La accesibilidad no solo beneficia a personas con discapacidad, sino que también mejora la experiencia de todos los usuarios.
        Esperamos que esta web te haga reflexionar sobre la importancia de la accesibilidad y el diseño inclusivo.
      </p>
    </div>

    <!-- Botón de navegación -->
    <b-button variant="primary" @click="$router.push('/')">Volver al inicio</b-button>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.intro-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 20px;
}

.content-section {
  background: #f8f8f8;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8rem;
  color: #222;
}

p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

.barriers-list {
  list-style: none;
  padding: 0;
}

.barriers-list li {
  font-size: 1.1rem;
  padding: 5px 0;
  text-align: left;
}

b-button {
  margin-top: 20px;
}
</style>
