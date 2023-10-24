import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./HomePage/HomePage.vue";
import LoginPage from '@/pages/LoginPage'
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router;