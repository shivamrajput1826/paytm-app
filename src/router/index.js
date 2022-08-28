import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "../pages/TheLogin.vue";
import TheSignUp from "../pages/TheSign.vue";
import TheHeader from "../components/TheHeader.vue";
import MainPage from "../components/MainPage.vue";
import MyFavourite from "../components/MyFavourites.vue";
const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHeader },
    { path: "/login", component: TheLogin },
    { path: "/signup", component: TheSignUp },
    { path: "/mainPage", component: MainPage },
    { path: "/favourites", component: MyFavourite },
  ],
});
export default routes;
