import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import baseUIComponents from './components/ui';
import VFocus from './directives/VFocus';

const app = createApp(App);

baseUIComponents.forEach((el) => {
  app.component(el.name, el.component);
});

app.use(router);
app.use(store);

app.directive('focus', VFocus);

app.mount('#app');
