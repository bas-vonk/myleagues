import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import LeaguePage from "./pages/LeaguePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/home",
      component: HomePage
    },
    {
      path: "/league/:id",
      component: LeaguePage,
      props: true
    },
    {
      path: "/:notFound(.*)",
      component: NotFound
    }
  ]
});

// router.beforeEach(function(to, _, next) {
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next("/auth");
//   } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
//     next("/coaches");
//   } else {
//     next();
//   }
// });

export default router;
