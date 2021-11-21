import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/covidlist",
      name: "covidlist",
      component: () => import("./components/CovidList")
    },
    {
      path: "/covid/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/covid",
      name: "covid",
      component: () => import("./components/AddCovid")
    }
  ]
});