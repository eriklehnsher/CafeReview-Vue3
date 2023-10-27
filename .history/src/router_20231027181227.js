import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./HomePage/HomePage.vue";
// import LoginPage from '@/pages/LoginPage';
// import RegisterPage from '@/pages/RegisterPage';

const routes = [
  {
    path: "/",
    component: HomePage,

  },
  {
    path: "/login",
    component: () => import ("../src/pages/LoginPage.vue") ,

  },
  {
    path: "/register",
    component: () => import ("../src/pages/RegisterPage.vue") ,

  },
  {
    path: "/userInfor",
    component: () => import ("../src/pages/Portfolio/UserInfo.vue") ,

  },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    
})

export default router;