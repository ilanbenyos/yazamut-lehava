import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/Home";
import CreateUser from "./components/CreateUser";
import CreateEvent from "./components/CreateEvent";
import CreateReport from "./components/CreateReport";
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
        path: "/createReport",
        name: "createReport",
        component: CreateReport
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
