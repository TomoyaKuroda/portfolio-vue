import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top";
import Japan from "./views/Japan";
import Canada from "./views/Canada";
import Taiwan from "./views/Taiwan";

Vue.use(VueRouter);
const routes=[
    {
        path: '/',
        name:"top",
        component:Top
    },
    {
        path: "/Japan",
        name:"japan",
        component:Japan
    },
    {
        path: "/Canada",
        name:"canada",
        component:Canada
    },
    {
        path: "/Taiwan",
        name:"taiwan",
        component:Taiwan
    }
];
export default new VueRouter({
    routes:routes
});