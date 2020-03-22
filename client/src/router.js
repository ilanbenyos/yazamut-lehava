import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/Home";
import CreateUser from "./components/CreateUser";
import CreateEvent from "./components/CreateEvent";
import Page404 from "./components/page404";




Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', name: "home", redirect: { name: 'homePage' }},
    {
        path: "/homePage",
        name: "homePage",
        component: HomePage
    },
    {
        path: "/createUser",
        name: "createUser",
        component: CreateUser
    },
    {
      path: "/createEvent",
      name: "createEvent",
      component: CreateEvent
  },
    {
      path: "*",
      name: "404",
      component: Page404
    }
  ]
});



export default router;
