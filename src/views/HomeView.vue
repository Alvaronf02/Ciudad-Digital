<template>
  <div class="home">
    <!-- Imagen de fondo -->
    <div class="hero">
      <h1>Explorando la Ciudad Digital</h1>
      <p>Selecciona una categoría para experimentar diferentes barreras de accesibilidad.</p>
    </div>

    <!-- Sección de categorías -->
    <div class="categories">
      <div class="category-card" @click="$router.push('/visual')">
        <img src="../assets/bajavisionlogo.png" alt="Discapacidad Visual">
        <h3>Discapacidad Visual</h3>
        <p>Explora cómo las personas con discapacidad visual enfrentan barreras.</p>
      </div>

      <div class="category-card" @click="$router.push('/bajavision')">
        <img src="../assets/bajavisionlogo.png" alt="Baja Visión">
        <h3>Baja Visión</h3>
        <p>Explora las barreras a las que se enfrentan personas con baja visión.</p>
      </div>

      <div class="category-card" @click="$router.push('/auditiva')">
        <img src="../assets/auditivalogo.png" alt="Discapacidad Auditiva">
        <h3>Discapacidad Auditiva</h3>
        <p>Descubre barreras auditivas en el entorno urbano.</p>
      </div>

      <div class="category-card" @click="$router.push('/motriz')">
        <img src="../assets/motrizlogo.png" alt="Discapacidad Motriz">
        <h3>Discapacidad Motriz</h3>
        <p>Experimenta cómo afecta la movilidad al uso de diferentes aparatos electrónicos.</p>
      </div>

      <div class="category-card" @click="$router.push('/cognitiva')">
        <img src="../assets/cognitivalogo.png" alt="Discapacidad Cognitiva">
        <h3>Discapacidad Cognitiva</h3>
        <p>Aprende sobre los desafíos cognitivos.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
};
</script>

<style scoped>
/* Estilos Generales */
.home {
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

/* Hero Section */
.hero {
  background: url("../assets/ciudaddigital.jpg") center/cover no-repeat;
  color: white;
  padding: 60px 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
}

/* Sección de Categorías */
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 20px;
  gap: 20px;
}

/* Tarjetas de Categoría */
.category-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.category-card h3 {
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.category-card p {
  font-size: 1rem;
  color: #555;
}
</style>
