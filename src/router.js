import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import BannerActive from "./views/BannerActive/Home.vue";
Vue.use(Router);

export default new Router({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/index.vue")
    },
    {
      path: "/BannerActive",
      name: "普道首页",
      component: BannerActive
    },
    {
      path: "/PaatTechnology",
      name: "普道介绍",
      component: () => import("@/views/Detailspage/PaatTechnology.vue")
    },
    {
      path: "/jsb",
      name: "捷税宝",
      component: () => import("@/views/jsb.vue")
    },
    {
      path: "/eliteplanet",
      name: "菁英星球",
      component: () => import("@/views/eliteplanet.vue")
    },
    {
      path: "/transition",
      name: "过渡",
      component: () => import("@/views/transition.vue")
    },
    {
      path: "/transitionelement",
      name: "element过渡",
      component: () => import("@/views/transitionelement.vue")
    },
    {
      path: "/lodash",
      name: "lodash",
      component: () => import("@/views/lodash.vue")
    },
    {
      path: "/vueParticles",
      name: "vue-particles",
      component: () => import("@/views/vueParticles.vue")
    },
    {
      path: "/keyboard",
      name: "keyboard",
      component: () => import("@/views/keyboard.vue")
    },
  ]
});
