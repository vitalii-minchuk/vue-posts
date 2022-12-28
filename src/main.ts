import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import baseUIComponents from './components/ui';

const app = createApp(App);

baseUIComponents.forEach((el) => {
  app.component(el.name, el.component);
});

app.use(router);
app.use(store);

app.mount('#app');
