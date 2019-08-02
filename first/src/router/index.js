import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// function isLogin (to, from, next) {
//   axios.get('/api/login/isLogin').then((res) => {
//     if (res.data) {
//       next()
//     } else {
//       next({path: '/registerLogin'});
//     }
// })
// next();
// }
const router = new Router({
    linkExactActiveClass: '',
  linkActiveClass: 'linkActive',
  routes: [
      {
          path :'/discuse/:id',
          name:'discuse',
          props:true,
          component: () =>import('../pages/Discuse.vue'),
          // beforeEnter: (to, from, next) => {
          //   isLogin(to, from, next);
          // }
      },
      {
        path :'/order',
        name:'order',
        component: () =>import('../pages/Order.vue')
      }
  ]
})

export default router;
