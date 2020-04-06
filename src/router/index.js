import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn.vue";
import Recover from "../views/SignInFlow/Recover.vue";
import Request from "../views/SignInFlow/Request.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/Team",
    name: "Team",
    component: Team,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn
  }, {
    path: "/Recover",
    name: "Recover",
    component: Recover
  }, {
    path: "/Request",
    name: "Request",
    component: Request
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })

  if (requiresAuth && !currentUser) {
    next("SignIn");
  } else {
    next();
  }
})
export default router;
