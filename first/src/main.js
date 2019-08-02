import Vue from 'vue';
// import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router'
import './assets/icon/iconfont.css';

Vue.config.productionTip = false
// import Collection from './compenets/common/Collection/index.js'
// import Discusion from './compenets/common/Discusion/index.js'
// import Registion from './compenets/common/Registion/index.js'
// Vue.use(Collection);
// Vue.use(Discusion);
// Vue.use(Registion);

new Vue({
    render: h => h(App),
    components: {
      },
      router,
  }).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })