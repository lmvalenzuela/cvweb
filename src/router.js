import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import English from "./views/English.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/english",
      name: "english",
      component: English
    },
  ]
});
