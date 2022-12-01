import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Home from '/src/views/Home.vue';
import Room from '/src/views/Room.vue';
import BBQ from '/src/views/BBQ.vue';
import NotFound from '/src/views/NotFound.vue';
import NewsPost from '/src/views/NewsPost.vue';
import NewsAll from '/src/views/NewsAll.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/room',
    name: 'Room',
    component: Room,
  },
  {
    path: '/bbq',
    name: 'BBQ',
    component: BBQ,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }, 
  {
    path: '/news/:id',
    name: 'NewsPost',
    component: NewsPost
  }, 
  {
    path: '/news',
    name: 'NewsAll',
    component: NewsAll
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) { 
      return savedPosition
    } else { 
      return { 
        top: 0,
        behavior:'smooth'
      }
    }
  }
});
export default router;