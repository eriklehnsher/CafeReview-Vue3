import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./HomePage/HomePage.vue";
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
const routes = [
  {
    path: "/",
    component: HomePage,
    meta: { transition: 'slide-left' },
  },
  {
    path: "/login",
    component: LoginPage,
    meta: { transition: 'slide-left' },
  },
  {
    path: "/register",
    component: RegisterPage,
    meta: { transition: 'slide-left' },
  },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router;