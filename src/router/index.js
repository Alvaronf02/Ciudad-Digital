import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import VisualTotalView from '../views/VisualTotalView.vue';
import BajaVisionView from '../views/BajaVisionView.vue';
import AuditivaView from '../views/AuditivaView.vue';
import MotrizView from '../views/MotrizView.vue';
import CognitivaView from '../views/CognitivaView.vue';
import DatosView from "../views/DatosView.vue"; 


Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'AboutPage', component: AboutView },
  { path: '/visual-total', name: 'VisualTotal', component: VisualTotalView },
  { path: '/baja-vision', name: 'BajaVision', component: BajaVisionView },
  { path: '/auditiva', name: 'Auditiva', component: AuditivaView },
  { path: '/motriz', name: 'Motriz', component: MotrizView },
  { path: '/cognitiva', name: 'Cognitiva', component: CognitivaView },
  { path: "/datos", name: "Datos", component: DatosView }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
