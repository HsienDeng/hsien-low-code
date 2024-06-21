import { createApp } from 'vue';
import App from './App.vue';

import './styles/index.less';
import 'uno.css';
import 'virtual:svg-icons-register';

import router from '@/router';
import { setupStore } from '@/store';
import { setupLocales } from '@/locales/setupLocales';
import { setupAppComponent, setupEcharts } from '@/plugins';

function boostrap() {
  const app = createApp(App);

  /* 挂载全局组件 */
  setupAppComponent(app);

  /* 挂载pinia */
  setupStore(app);

  /* 挂载i18n */
  setupLocales(app);

  /* echarts */
  setupEcharts(app);

  /* router */
  app.use(router);

  app.mount('#app');
}

void boostrap();
