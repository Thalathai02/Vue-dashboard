import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn.vue";
import Recover from "../views/SignInFlow/Recover.vue";
import Request from "../views/SignInFlow/Request.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Team",
    name: "Team",
    component: Team
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

export default router;
