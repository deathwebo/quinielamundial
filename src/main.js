// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Header,
  Container,
  Main,
  Table,
  TableColumn,
  Progress,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Header);
Vue.use(Container);
Vue.use(Main);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Progress);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
});
