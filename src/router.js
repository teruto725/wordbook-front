import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import Top from "./views/Top.vue"
import Store from '@/store/index.js'
import Signin from './views/Signin.vue'
import Register from './views/Register.vue'
import Review from './views/Review.vue'
Vue.use(Router)
const routes = [
  {
    name:"Login",
    path: "/login",
    component: Login
  },
  {
    name: 'Top',
    path: '/',
    component: Top,
    meta: { requiresAuth: true }
  },
  {
    name: 'signin',
    path: '/signin',
    component: Signin
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    meta: {requiresAuth: true}
  },
  {
    name: "review",
    path: "/review",
    component: Review,
    meta: { requiresAuth: true}
  }

]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// すべてのルーティングでrequiresAuthならloginに飛ばされる
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.userToken) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router