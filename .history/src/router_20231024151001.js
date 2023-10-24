import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./HomePage/HomePage.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router;