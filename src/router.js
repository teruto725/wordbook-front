import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import Top from "./views/Top.vue"
import Store from '@/store/index.js'
import Signin from './views/Signin.vue'
import Wordbooks from "./views/Wordbooks.vue"
import Wordbook from "./views/Wordbook.vue"
import WordbookHome from "./views/WordbookHome.vue"
import WordbookStudy from "./views/WordbookStudy.vue"
import WordbookEdit from "./views/WordbookEdit.vue"
Vue.use(Router)
const routes = [
  {
    name:"login",
    path: "/login",
    component: Login
  },
  {
    name: 'top',
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
    name: "wordbooks",
    path: "/wordbooks",
    component: Wordbooks,
    meta: { requiresAuth: true},
  },
  {
    name: "wordbook",
    path: "/wordbooks/:id",
    component: Wordbook,
    meta: { requiresAuth: true},
    children: [
      {
        name: "wordbookHome",
        path: "",
        component: WordbookHome,
        meta: { requiresAuth: true},
      },
      {
        name: "wordbookEdit",
        path: "edit",
        component: WordbookEdit,
        meta: {requiresAuth: true}
      },
      {
        name: "wordbookStudy",
        path: "study",
        component: WordbookStudy,
        meta: {requiresAuth: true}
      }
    ]
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