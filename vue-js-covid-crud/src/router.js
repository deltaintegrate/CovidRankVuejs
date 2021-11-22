import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/covid",
    name: "covid",
    component: () => import("./components/CovidList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddCovid")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;