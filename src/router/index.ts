import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue'),
    },
    {
      path: '/posts/:id',
      name: 'single-post',
      props: true,
      component: () => import('../views/SinglePost.vue'),
    },
  ],
  linkActiveClass: 'active-route-link',
});

router.beforeEach((to, from, next) => {
  if (!store.state.posts.length && to.name === 'single-post') {
    next('/posts');
  } else {
    next();
  }
});

export default router;
