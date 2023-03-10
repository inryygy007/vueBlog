import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("../layout/layout.vue"),
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: HomeView,
        },
        {
          path: "/category/:id",
          name: "category",
          component: ()=> import('../views/CategoryView.vue'),
        },
        {
          path: "/article/:id",
          name: "article",
          component: ()=> import('../views/ArticleDetail.vue'),
        },
        {
          path: "/search",
          name: "search",
          component: ()=> import('../views/SearchView.vue'),
        }
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
