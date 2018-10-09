import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top";
import AboutMe from "./views/AboutMe";
import ProgrammingSkills from "./views/ProgrammingSkills";
import Contact from "./views/Contact";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "top",
    component: Top
  },
  {
    path: "/about-me",
    name: "about-me",
    component: AboutMe
  },
  {
    path: "/programming-skills",
    name: "programming-skills",
    component: ProgrammingSkills
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];
export default new VueRouter({
  mode: "history",
  routes: routes
});
