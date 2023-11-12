import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './components/NotFound.vue';


const routes = [
  { path: '/:pathMatch(.*)*', component: NotFound }, // Utilisez cette syntaxe pour la route 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
