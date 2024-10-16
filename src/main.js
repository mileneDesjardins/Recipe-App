import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Pas besoin de PiniaVuePlugin avec Vue 3

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app');
