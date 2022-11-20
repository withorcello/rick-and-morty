import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: () => import("@/views/PageWelcome.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/PageHome.vue"),
    },
  ],
});

export default router;
