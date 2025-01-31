<template>
  <div id="app">
    <b-navbar toggleable="lg" variant="dark" type="dark" >
      <b-navbar-brand href="/">Ciudad Digital</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Inicio</b-nav-item>
        <b-nav-item to="/about">Sobre el proyecto</b-nav-item>
        <b-nav-item to="/visual-total">Visual</b-nav-item>
        <b-nav-item to="/baja-vision">Baja visión</b-nav-item>
        <b-nav-item to="/auditiva">Auditiva</b-nav-item>
        <b-nav-item to="/motriz">Motriz</b-nav-item>
        <b-nav-item to="/cognitiva">Cognitiva</b-nav-item>
        <b-nav-item to="/datos">Datos de Accesibilidad</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>