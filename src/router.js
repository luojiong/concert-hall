import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/safetyMonitoring",
      children: [
        {
          path: "/safetyMonitoring",
          component: () =>
            import("./views/safety-monitoring/safetyMonitoring.vue")
        },
        {
          path: "/frame",
          component: () => import("./views/safety-monitoring/child/frame.vue")
        },
        {
          path: "/topmonitoring",
          component: () =>
            import("./views/safety-monitoring/child/top-monitoring.vue")
        },
        {
          path: "/regulartesting",
          component: () =>
            import("./views/safety-monitoring/child/regular-testing.vue")
        },
        {
          path: "/equipment",
          component: () =>
            import("./views/safety-monitoring/child/equipment.vue")
        },
        {
          path: "/webVr",
          component: () => import("./views/webVr/webVr.vue")
        },
        {
          path: "/projectdata",
          component: () => import("./views/projectdata/projectdata.vue")
        },
        {
          path: "/protectionlocation",
          component: () =>
            import("./views/protection-location/protection-location.vue")
        },
        {
          path: "/systemsetup",
          component: () => import("./views/system-setup/system-setup.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
